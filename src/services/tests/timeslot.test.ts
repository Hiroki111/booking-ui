import { AvailableTimeSlotDto } from '../../interfaces/availableTimeSlot';
import { ServiceDto } from '../../interfaces/service';
import { filterTimeslotsWithServices } from '../timeslot';

describe('client/services/timeslot', () => {
  describe('filterTimeslotsWithServices', () => {
    const timeslots = [
      { startTime: '14:00', endTime: '14:30' },
      { startTime: '14:30', endTime: '15:00' },
      // "15:00" to "15:30" is absent
      { startTime: '15:30', endTime: '16:00' },
      { startTime: '16:00', endTime: '16:30' },
    ] as AvailableTimeSlotDto[];

    it('should filter timeslots', () => {
      const servicesA = [{ minutes: 10 }, { minutes: 30 }] as ServiceDto[];
      const servicesB = [{ minutes: 10 }, { minutes: 30 }, { minutes: 60 }] as ServiceDto[];
      const servicesC = [{ minutes: 10 }] as ServiceDto[];

      const availableTimeslotsA = filterTimeslotsWithServices(timeslots, servicesA);
      const availableTimeslotsB = filterTimeslotsWithServices(timeslots, servicesB);
      const availableTimeslotsC = filterTimeslotsWithServices(timeslots, servicesC);

      expect(availableTimeslotsA).toEqual([
        { startTime: '14:00', endTime: '14:30' },
        { startTime: '15:30', endTime: '16:00' },
      ]);
      expect(availableTimeslotsB).toEqual([]);
      expect(availableTimeslotsC).toEqual([
        { startTime: '14:00', endTime: '14:30' },
        { startTime: '14:30', endTime: '15:00' },
        { startTime: '15:30', endTime: '16:00' },
        { startTime: '16:00', endTime: '16:30' },
      ]);
    });

    it('should filter timeslots with an empty sevice list', () => {
      const services = [] as ServiceDto[];
      const availableTimeslots = filterTimeslotsWithServices(timeslots, services);

      expect(availableTimeslots).toEqual([
        { startTime: '14:00', endTime: '14:30' },
        { startTime: '14:30', endTime: '15:00' },
        { startTime: '15:30', endTime: '16:00' },
        { startTime: '16:00', endTime: '16:30' },
      ]);
    });

    it('should return an empty array if there is no timeslot', () => {
      const services = [{ minutes: 10 }] as ServiceDto[];
      const availableTimeslots = filterTimeslotsWithServices([], services);

      expect(availableTimeslots).toEqual([]);
    });
  });
});
