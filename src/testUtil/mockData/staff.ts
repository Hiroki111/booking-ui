import { NoPreferenceStaff, StaffDto } from '../../interfaces/staff';
import { NO_PREFERENCE_STAFF_ID } from '../../staticData/staff';
import { createMockAvailableDate } from './availableDate';
import { createMockServiceDto } from './service';

const mockStaff: StaffDto = {
  id: 1,
  name: 'John Smith',
  services: [createMockServiceDto()],
  availableDates: [createMockAvailableDate()],
};

const mockNoPreferenceStaff: NoPreferenceStaff = {
  id: NO_PREFERENCE_STAFF_ID,
  name: 'No preference',
  title: 'Maximum availability',
  availableDates: ['2021-01-01'],
};

export function createMockStaff(params?: Partial<StaffDto>) {
  return { ...mockStaff, ...params };
}

export function createMockNoPreferenceStaff(params?: Partial<NoPreferenceStaff>) {
  return { ...mockNoPreferenceStaff, ...params };
}
