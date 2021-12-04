import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query';

import { StaffDto } from '../interfaces/staff';
import { ServiceDto } from '../interfaces/service';
import restApi from '../network/restApi';
import { selectStaffWhoCanDoAllServices } from '../services/staff';

export enum staffQuries {
  fetchStaffList = 'fetchStaffList',
}

export function useStaffQuery(options?: UseQueryOptions<any>): UseQueryResult<StaffDto[]> {
  return useQuery(staffQuries.fetchStaffList, restApi.fetchStaffList, options);
}

export function useAvailableStaffQuery(services: ServiceDto[]) {
  return useStaffQuery({
    select: (staffList: StaffDto[]) => selectStaffWhoCanDoAllServices(staffList, services),
  });
}
