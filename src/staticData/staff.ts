import { ServiceDto } from '../interfaces/service';
import { NoPreferenceStaff } from '../interfaces/staff';

export const NO_PREFERENCE_STAFF: NoPreferenceStaff = {
  id: -1,
  name: 'No preference',
  title: 'Maximum availability',
  services: [] as ServiceDto[],
  availableDates: [] as string[],
  isNoPreferenceStaff: true,
};
