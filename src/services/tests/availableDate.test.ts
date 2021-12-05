import { createMockAvailableDate } from '../../testUtil/mockData/availableDate';
import { createMockServiceDto } from '../../testUtil/mockData/service';
import { createMockStaff } from '../../testUtil/mockData/staff';
import { getMapDateToMaxAvailableDate } from '../availableDate';

describe('services/availableDate', () => {
  describe('getMapDateToMaxAvailableDate', () => {
    const serviceA = createMockServiceDto({ minutes: 30 });
    const serviceB = createMockServiceDto({ minutes: 10 });
    const serviceC = createMockServiceDto({ minutes: 61 });

    const availableDateA = createMockAvailableDate({
      date: '2022-01-01',
      availableTimeSlots: [
        { startTime: '09:00', endTime: '09:30' },
        { startTime: '09:30', endTime: '10:00' },
        { startTime: '10:30', endTime: '11:00' },
      ],
    });
    const availableDateB = createMockAvailableDate({
      date: '2022-01-01',
      availableTimeSlots: [
        { startTime: '09:30', endTime: '10:00' }, // the above available date has the same timeslot on the same date
        { startTime: '11:00', endTime: '11:30' },
        { startTime: '11:30', endTime: '12:00' },
      ],
    });
    const availableDateC = createMockAvailableDate({
      date: '2022-01-02',
      availableTimeSlots: [{ startTime: '09:30', endTime: '10:00' }],
    });

    const staffA = createMockStaff({
      services: [serviceA, serviceB, serviceC],
      availableDates: [availableDateA],
    });
    const staffB = createMockStaff({
      services: [serviceA, serviceB, serviceC],
      availableDates: [availableDateB, availableDateC],
    });

    it('should get all the unique available timeslots that have at least 30 minutes', () => {
      const map = getMapDateToMaxAvailableDate([serviceA], [staffA, staffB]);

      expect(map).toEqual({
        '2022-01-01': {
          id: -1,
          date: '2022-01-01',
          availableTimeSlots: [
            { startTime: '09:00', endTime: '09:30' },
            { startTime: '09:30', endTime: '10:00' },
            { startTime: '10:30', endTime: '11:00' },
            { startTime: '11:00', endTime: '11:30' },
            { startTime: '11:30', endTime: '12:00' },
          ],
        },
        '2022-01-02': {
          id: -1,
          date: '2022-01-02',
          availableTimeSlots: [{ startTime: '09:30', endTime: '10:00' }],
        },
      });
    });

    it('should get all the unique available timeslots that have at least 40 minutes', () => {
      const map = getMapDateToMaxAvailableDate([serviceA, serviceB], [staffA, staffB]);

      expect(map).toEqual({
        '2022-01-01': {
          id: -1,
          date: '2022-01-01',
          availableTimeSlots: [
            { startTime: '09:00', endTime: '09:30' },
            { startTime: '11:00', endTime: '11:30' },
          ],
        },
      });
    });

    it('should return an empty object if the selected staff are not availble for the selected services', () => {
      const map = getMapDateToMaxAvailableDate([serviceC], [staffA, staffB]);

      expect(map).toEqual({});
    });
  });
});
