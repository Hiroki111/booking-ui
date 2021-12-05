import { createMockAvailableDate } from '../../testUtil/mockData/availableDate';
import { createMockStaff } from '../../testUtil/mockData/staff';
import { getNoPreferenceStaffWithMaxAvailability } from '../staff';

describe('services/staff', () => {
  describe('getNoPreferenceStaffWithMaxAvailability', () => {
    it('should create No preference staff with max availability', () => {
      const mockAvailableDateA = createMockAvailableDate({ date: '2021-01-29' });
      const mockAvailableDateB = createMockAvailableDate({ date: '2021-01-29' });
      const mockAvailableDateC = createMockAvailableDate({ date: '2021-01-30' });
      const mockAvailableDateD = createMockAvailableDate({ date: '2021-01-31' });

      const staffA = createMockStaff({ availableDates: [mockAvailableDateA] });
      const staffB = createMockStaff({ availableDates: [mockAvailableDateB, mockAvailableDateC] });
      // Unused staff. It won't affect getNoPreferenceStaffWithMaxAvailability
      createMockStaff({ availableDates: [mockAvailableDateD] });

      const staffWithMaxAvailability = getNoPreferenceStaffWithMaxAvailability([staffA, staffB]);

      expect(staffWithMaxAvailability.id).toEqual(-1);
      expect(staffWithMaxAvailability.availableDates).toEqual(['2021-01-29', '2021-01-30']);
    });
  });
});
