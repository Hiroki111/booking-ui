import { StaffDto } from '../interfaces/staff';
import { ServiceTypeDto } from '../interfaces/serviceType';
import { BookingRequestDto } from '../interfaces/booking';
import { mockServiceTypes, mockStaffLinst, mockCaptcha } from './mockData';

const restApi = {
  fetchServiceTypes: async function (): Promise<ServiceTypeDto[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockServiceTypes), 500));
  },

  fetchStaffList: async function (): Promise<StaffDto[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockStaffLinst), 500));
  },

  fetchCaptcha: async function (): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(mockCaptcha), 500));
  },

  bookAppointment: async function (_data: BookingRequestDto): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
  },
};

export default restApi;
