import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query';

import { StaffDto } from '../interfaces/staff';
import { ServiceDto } from '../interfaces/service';
import restApi from '../network/restApi';

export enum staffQuries {
  fetchStaffList = 'fetchStaffList',
}

export function useStaffQuery(options?: UseQueryOptions<any>): UseQueryResult<StaffDto[]> {
  return useQuery(staffQuries.fetchStaffList, restApi.fetchStaffList, options);
}

function selectStaffWhoCanDoAllServices(staffList: StaffDto[], services: ServiceDto[]) {
  const serviceIds = services.map((service) => service.id) || [];
  return staffList.filter((staff: StaffDto) =>
    serviceIds.every((id: number) => staff.services?.map((service) => service.id).includes(id)),
  );
}

export function useAvailableStaffQuery(services: ServiceDto[]) {
  return useStaffQuery({
    select: (staffList: StaffDto[]) => selectStaffWhoCanDoAllServices(staffList, services),
  });
}
