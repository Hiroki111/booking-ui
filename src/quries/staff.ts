import { useQuery, UseQueryResult } from 'react-query';

import { FetchStaffListResponseDto, NoPreferenceStaff, StaffDto } from '../interfaces/staff';
import { ServiceDto } from '../interfaces/service';
import restApi from '../network/restApi';
import { selectRegularStaffWhoCanDoAllServices, selectAllStaffWhoCanDoAllServices } from '../services/staff';

export enum staffQuries {
  fetchStaffList = 'fetchStaffList',
}

export function useStaffQuery(): UseQueryResult<FetchStaffListResponseDto> {
  return useQuery<FetchStaffListResponseDto, any, FetchStaffListResponseDto>(
    staffQuries.fetchStaffList,
    restApi.fetchStaffList,
  );
}

export function useRegularStaffQuery(services: ServiceDto[]): UseQueryResult<StaffDto[]> {
  return useQuery<FetchStaffListResponseDto, any, StaffDto[]>(staffQuries.fetchStaffList, restApi.fetchStaffList, {
    select: (staffList: FetchStaffListResponseDto) => selectRegularStaffWhoCanDoAllServices(staffList, services),
  });
}

export function useAllStaffQuery(services: ServiceDto[]): UseQueryResult<(NoPreferenceStaff | StaffDto)[]> {
  return useQuery<FetchStaffListResponseDto, any, (NoPreferenceStaff | StaffDto)[]>(
    staffQuries.fetchStaffList,
    restApi.fetchStaffList,
    {
      select: (staffList: FetchStaffListResponseDto) => selectAllStaffWhoCanDoAllServices(staffList, services),
    },
  );
}
