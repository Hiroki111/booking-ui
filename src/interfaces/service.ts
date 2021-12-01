export interface ServiceDto {
  id: number;
  name: string;
  serviceTypeId: number;
  isSelected?: boolean;
  minutes: number;
  price: number;
  tax: number;
}
