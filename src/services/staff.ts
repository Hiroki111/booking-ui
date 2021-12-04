import { ServiceDto } from '../interfaces/service';
import { NoPreferenceStaff, StaffDto } from '../interfaces/staff';
import { NO_PREFERENCE_STAFF } from '../staticData/staff';

export function getNoPreferenceStaffWithMaxAvailability(staffList: StaffDto[]): NoPreferenceStaff {
  const allDates = staffList
    .map((staff) => staff.availableDates)
    .flat()
    .map((availableDate) => availableDate.date);

  return {
    ...NO_PREFERENCE_STAFF,
    availableDates: Array.from(new Set(allDates)),
  };
}

export function getStaffListWithNoPreferenceStaff(staffList: StaffDto[]): (StaffDto | NoPreferenceStaff)[] {
  if (staffList.length <= 1) {
    return staffList;
  }

  const noPreferenceStaff = getNoPreferenceStaffWithMaxAvailability(staffList);
  return [noPreferenceStaff, ...staffList];
}

export function selectStaffWhoCanDoAllServices(staffList: StaffDto[], services: ServiceDto[]) {
  const serviceIds = services.map((service) => service.id) || [];
  return staffList.filter((staff: StaffDto) =>
    serviceIds.every((id: number) => staff.services?.map((service) => service.id).includes(id)),
  );
}
