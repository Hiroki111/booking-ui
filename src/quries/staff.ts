import { useQuery, UseQueryResult } from 'react-query';

import { FetchStaffListResponseDto, NoPreferenceStaff, StaffDto } from '../interfaces/staff';
import { ServiceDto } from '../interfaces/service';
import restApi from '../network/restApi';
import { selectRegularStaffWhoCanDoAllServices, selectAllStaffWhoCanDoAllServices } from '../services/staff';

export enum staffQuries {
  fetchStaffList = 'fetchStaffList',
}

export function useStaffQuery(): UseQueryResult<FetchStaffListResponseDto> {
  return useQuery(staffQuries.fetchStaffList, restApi.fetchStaffList);
}

export function useRegularStaffQuery(services: ServiceDto[]): UseQueryResult<StaffDto[]> {
  return useQuery(staffQuries.fetchStaffList, restApi.fetchStaffList, {
    select: (staffList: FetchStaffListResponseDto) => selectRegularStaffWhoCanDoAllServices(staffList, services),
  });
}

export function useAllStaffQuery(services: ServiceDto[]): UseQueryResult<(NoPreferenceStaff | StaffDto)[]> {
  return useQuery(staffQuries.fetchStaffList, restApi.fetchStaffList, {
    select: (staffList: FetchStaffListResponseDto) => selectAllStaffWhoCanDoAllServices(staffList, services),
  });
}
