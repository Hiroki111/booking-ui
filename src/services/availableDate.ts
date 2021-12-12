import { ServiceDto } from '../interfaces/service';
import { StaffDto } from '../interfaces/staff';
import { MapDateToAvailableDate } from '../interfaces/availableDate';
import { filterTimeslotsWithServices } from './timeslot';
import { MAX_AVAILABILITY_DATE_ID } from '../staticData/availableDate';

export function getMapDateToAvailableDate(selectedStaff: StaffDto, selectedServices: ServiceDto[]) {
  if (!selectedStaff?.availableDates) {
    return {};
  }

  const availableDates = selectedStaff.availableDates
    .map((availableDate) => ({
      ...availableDate,
      availableTimeSlots: filterTimeslotsWithServices(availableDate?.availableTimeSlots || [], selectedServices),
    }))
    .filter((availableDate) => availableDate.availableTimeSlots.length > 0);

  return availableDates.reduce(
    (map, availableDate) => ({ ...map, [availableDate.date]: availableDate }),
    {} as MapDateToAvailableDate,
  );
}

export function getMapDateToMaxAvailableDate(selectedServices: ServiceDto[], staffList: StaffDto[]) {
  const allAvailableDates = staffList.map((staff) => staff.availableDates).flat();
  const mapDateToDiscoveredTimeslotStartTime: { [date: string]: Set<string> } = {};

  const mapDateToAvailableDate = allAvailableDates.reduce((mapDateToAvailableDate, availableDate) => {
    const availableTimeSlots = filterTimeslotsWithServices(availableDate?.availableTimeSlots || [], selectedServices);

    if (!availableTimeSlots.length) {
      return mapDateToAvailableDate;
    }

    const { date } = availableDate;
    const undiscoveredTimeslots = availableTimeSlots.filter((timeslot) => {
      const isTimeslotFound = mapDateToDiscoveredTimeslotStartTime[date]?.has(timeslot.startTime);
      return !isTimeslotFound;
    });

    if (!mapDateToDiscoveredTimeslotStartTime.hasOwnProperty(date)) {
      mapDateToDiscoveredTimeslotStartTime[date] = new Set();
    }
    undiscoveredTimeslots.forEach((timeslot) => mapDateToDiscoveredTimeslotStartTime[date].add(timeslot.startTime));

    const existingTimeslots = mapDateToAvailableDate[date]?.availableTimeSlots || [];
    return {
      ...mapDateToAvailableDate,
      [date]: {
        ...availableDate,
        id: MAX_AVAILABILITY_DATE_ID,
        availableTimeSlots: existingTimeslots.concat(undiscoveredTimeslots),
      },
    };
  }, {} as MapDateToAvailableDate);

  return Object.keys(mapDateToAvailableDate).reduce((result, date) => {
    const availableDate = mapDateToAvailableDate[date];
    return {
      ...result,
      [date]: {
        ...availableDate,
        availableTimeSlots: availableDate.availableTimeSlots.sort((a, b) => a.startTime.localeCompare(b.startTime)),
      },
    };
  }, {} as MapDateToAvailableDate);
}
