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
