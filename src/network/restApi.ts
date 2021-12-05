import { FetchStaffListResponseDto } from '../interfaces/staff';
import { ServiceTypeDto } from '../interfaces/serviceType';
import { BookingRequestDto } from '../interfaces/booking';
import { mockServiceTypes, mockStaffList, mockCaptcha } from './mockData';

const restApi = {
  fetchServiceTypes: async function (): Promise<ServiceTypeDto[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockServiceTypes), 500));
  },

  fetchStaffList: async function (): Promise<FetchStaffListResponseDto> {
    return new Promise((resolve) => setTimeout(() => resolve(mockStaffList), 500));
  },

  fetchCaptcha: async function (): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(mockCaptcha), 500));
  },

  bookAppointment: async function (_data: BookingRequestDto): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
  },
};

export default restApi;
