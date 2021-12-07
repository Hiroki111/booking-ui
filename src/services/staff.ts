import { ServiceDto } from '../interfaces/service';
import { FetchStaffListResponseDto, NoPreferenceStaff, StaffDto } from '../interfaces/staff';

export function selectRegularStaffWhoCanDoAllServices(
  staffList: FetchStaffListResponseDto,
  services: ServiceDto[],
): StaffDto[] {
  const serviceIds = services.map((service) => service.id) || [];
  return staffList.regularStaffList.filter((staff: StaffDto) =>
    serviceIds.every((id: number) => staff.services?.map((service) => service.id).includes(id)),
  );
}

export function selectAllStaffWhoCanDoAllServices(
  staffList: FetchStaffListResponseDto,
  services: ServiceDto[],
): (NoPreferenceStaff | StaffDto)[] {
  const regularStaffList = selectRegularStaffWhoCanDoAllServices(staffList, services);

  if (regularStaffList.length <= 1) {
    return regularStaffList;
  }

  return [staffList.noPreferenceStaff, ...regularStaffList];
}
