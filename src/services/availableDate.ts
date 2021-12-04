import { ServiceDto } from '../interfaces/service';
import { StaffDto } from '../interfaces/staff';
import { AvailableDateMap } from '../interfaces/availableDate';
import { filterTimeslotsWithServices } from './timeslot';

export function getAvailableDateMap(selectedStaff: StaffDto, selectedServices: ServiceDto[]): AvailableDateMap {
  if (!selectedStaff?.availableDates) return {};

  const availableDates = selectedStaff.availableDates.filter((availableDate) => {
    const availableTimeSlots = filterTimeslotsWithServices(availableDate?.availableTimeSlots || [], selectedServices);
    return availableTimeSlots.length > 0;
  });

  return availableDates.reduce((map, availableDate) => ({ ...map, [availableDate.date]: availableDate }), {});
}

export function getAvailableDateMapWithMaxAvailability(
  selectedServices: ServiceDto[],
  staffList: StaffDto[],
): AvailableDateMap {
  const allAvailableDates = staffList.map((staff) => staff.availableDates).flat();
  const mapDateToDiscoveredTimeslotStartTime: { [date: string]: Set<string> } = {};

  return allAvailableDates.reduce((mapDateToAvailableDateObj, availableDate) => {
    const availableTimeSlots = filterTimeslotsWithServices(availableDate?.availableTimeSlots || [], selectedServices);

    if (!availableTimeSlots.length) {
      return mapDateToAvailableDateObj;
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

    const existingTimeslots = mapDateToAvailableDateObj[date]?.availableTimeSlots || [];
    return {
      ...mapDateToAvailableDateObj,
      [date]: {
        ...availableDate,
        id: -1,
        availableTimeSlots: existingTimeslots.concat(undiscoveredTimeslots),
      },
    };
  }, {} as AvailableDateMap);
}
