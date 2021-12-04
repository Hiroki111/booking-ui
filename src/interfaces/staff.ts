import { AvailableTimeSlotDto } from './availableTimeSlot';
import { ServiceDto } from './service';

export interface StaffDto {
  id: number;
  name: string;
  title?: string;
  profilePhotoUrl?: string;
  services: ServiceDto[];
  availableDates: AvailableDate[];
}

export interface NoPreferenceStaff extends Omit<StaffDto, 'availableDates'> {
  availableDates: string[];
  isNoPreferenceStaff: boolean;
}

export interface AvailableDate {
  id: number;
  date: string;
  availableTimeSlots: AvailableTimeSlotDto[];
}
