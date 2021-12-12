import { NoPreferenceStaff, FetchStaffListResponseDto } from '../interfaces/staff';
import { NO_PREFERENCE_STAFF_ID } from '../staticData/staff';

export const mockServiceTypes = [
  {
    id: 1,
    name: 'Featured',
    services: [
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 3,
        name: 'Spray Tan Full Body',
        serviceTypeId: 1,
        minutes: 20,
        price: 30,
        tax: 0,
      },
    ],
  },
  {
    id: 2,
    name: 'Hands and Feet',
    services: [
      {
        id: 4,
        name: 'Gel Shape and Paint Feet (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 5,
        name: 'Gel Shape and Paint Hands (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 6,
        name: 'Full hand nail art add on',
        serviceTypeId: 2,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
    ],
  },
  {
    id: 3,
    name: 'Hair cut',
    services: [
      {
        id: 7,
        name: 'Cut+Blow Dry',
        serviceTypeId: 3,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 8,
        name: 'Cut + Blow Dry [AddOn]',
        serviceTypeId: 3,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 9,
        name: 'Cut + Blow Dry + Clour',
        serviceTypeId: 3,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
    ],
  },
  {
    id: 4,
    name: 'Colouring',
    services: [
      {
        id: 10,
        name: 'Full Colour',
        serviceTypeId: 4,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 11,
        name: 'Partial Foil Highlights',
        serviceTypeId: 4,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 12,
        name: 'Colour Consultation Colour Expert',
        serviceTypeId: 4,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
    ],
  },
  {
    id: 5,
    name: 'Skin Clinic',
    services: [
      {
        id: 13,
        name: 'Obagi Skin Care Consultation',
        serviceTypeId: 5,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 14,
        name: 'Teenager Facial',
        serviceTypeId: 5,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 15,
        name: 'Bespoke Facial with Skin Specialist',
        serviceTypeId: 5,
        minutes: 80,
        price: 30.5,
        tax: 0,
      },
    ],
  },
  {
    id: 6,
    name: 'Eyelashes',
    services: [
      {
        id: 16,
        name: 'Package Lashes',
        serviceTypeId: 6,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 17,
        name: 'Full Set Semi Permanent Lashes',
        serviceTypeId: 6,
        minutes: 120,
        price: 45.55,
        tax: 5,
      },
    ],
  },
];

const mockRegularStaffList = [
  {
    id: 1,
    name: 'Cooper Afternoon',
    title: 'Senior Colorist',
    profilePhotoUrl:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--H4p1KR_4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/418876/293e9eaa-92fc-44d3-9705-67f74f20608d.jpeg',
    services: [
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 3,
        name: 'Spray Tan Full Body',
        serviceTypeId: 1,
        minutes: 20,
        price: 30,
        tax: 0,
      },
      {
        id: 11,
        name: 'Partial Foil Highlights',
        serviceTypeId: 4,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 10,
        name: 'Full Colour',
        serviceTypeId: 4,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 9,
        name: 'Cut + Blow Dry + Clour',
        serviceTypeId: 3,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
    ],
    availableDates: [
      {
        id: 271,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 281,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 291,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 301,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 311,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 321,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 331,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 341,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 351,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 361,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 371,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 381,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 391,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 401,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 411,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 421,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 431,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 441,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 451,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 461,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 471,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 481,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 491,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 501,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 511,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 521,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 531,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 541,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 551,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Lucian Peel',
    title: 'Hair Stylist',
    services: [
      {
        id: 15,
        name: 'Bespoke Facial with Skin Specialist',
        serviceTypeId: 5,
        minutes: 80,
        price: 30.5,
        tax: 0,
      },
      {
        id: 7,
        name: 'Cut+Blow Dry',
        serviceTypeId: 3,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 14,
        name: 'Teenager Facial',
        serviceTypeId: 5,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 13,
        name: 'Obagi Skin Care Consultation',
        serviceTypeId: 5,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
    ],
    availableDates: [
      {
        id: 272,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 282,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 292,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 302,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 312,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 322,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 332,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 342,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 352,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 362,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 372,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 382,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 392,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 402,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 412,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 422,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 432,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 442,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 452,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 462,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 472,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 482,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 492,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 502,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 512,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 522,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 532,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 542,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 552,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Cohen Earlymorning',
    title: 'Senior Hair Stylist',
    services: [
      {
        id: 4,
        name: 'Gel Shape and Paint Feet (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 14,
        name: 'Teenager Facial',
        serviceTypeId: 5,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 3,
        name: 'Spray Tan Full Body',
        serviceTypeId: 1,
        minutes: 20,
        price: 30,
        tax: 0,
      },
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 15,
        name: 'Bespoke Facial with Skin Specialist',
        serviceTypeId: 5,
        minutes: 80,
        price: 30.5,
        tax: 0,
      },
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
      {
        id: 12,
        name: 'Colour Consultation Colour Expert',
        serviceTypeId: 4,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
    ],
    availableDates: [
      {
        id: 273,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 283,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 293,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 303,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 313,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 323,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 333,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 343,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 353,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 363,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 373,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 383,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 393,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 403,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 413,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 423,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 433,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 443,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 453,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 463,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 473,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 483,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 493,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 503,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 513,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 523,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 533,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 543,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
      {
        id: 553,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '07:00',
            endTime: '07:30',
          },
          {
            startTime: '07:30',
            endTime: '08:00',
          },
          {
            startTime: '08:00',
            endTime: '08:30',
          },
          {
            startTime: '08:30',
            endTime: '09:00',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Jayna Nightshifts',
    title: 'Hair Stylist',
    services: [
      {
        id: 6,
        name: 'Full hand nail art add on',
        serviceTypeId: 2,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
      {
        id: 4,
        name: 'Gel Shape and Paint Feet (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 5,
        name: 'Gel Shape and Paint Hands (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 7,
        name: 'Cut+Blow Dry',
        serviceTypeId: 3,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
    ],
    availableDates: [
      {
        id: 274,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 284,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 294,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 304,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 314,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 324,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 334,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 344,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 354,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 364,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 374,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 384,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 394,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 404,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 414,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 424,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 434,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 444,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 454,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 464,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 474,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 484,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 494,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 504,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 514,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 524,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 534,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 544,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
      {
        id: 554,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '20:00',
            endTime: '20:30',
          },
          {
            startTime: '20:30',
            endTime: '21:00',
          },
          {
            startTime: '21:00',
            endTime: '21:30',
          },
          {
            startTime: '21:30',
            endTime: '22:00',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Carey Low',
    services: [
      {
        id: 13,
        name: 'Obagi Skin Care Consultation',
        serviceTypeId: 5,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
      {
        id: 11,
        name: 'Partial Foil Highlights',
        serviceTypeId: 4,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 12,
        name: 'Colour Consultation Colour Expert',
        serviceTypeId: 4,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 14,
        name: 'Teenager Facial',
        serviceTypeId: 5,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 4,
        name: 'Gel Shape and Paint Feet (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 5,
        name: 'Gel Shape and Paint Hands (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 10,
        name: 'Full Colour',
        serviceTypeId: 4,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
    ],
    availableDates: [
      {
        id: 275,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 285,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 295,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 305,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 315,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 325,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 335,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 345,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 355,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 365,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 375,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 385,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 395,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 405,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 415,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 425,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 435,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 445,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 455,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 465,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 475,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 485,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 495,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 505,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 515,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 525,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 535,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 545,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 555,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Blossom Gabriels',
    services: [
      {
        id: 9,
        name: 'Cut + Blow Dry + Clour',
        serviceTypeId: 3,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
      {
        id: 4,
        name: 'Gel Shape and Paint Feet (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 8,
        name: 'Cut + Blow Dry [AddOn]',
        serviceTypeId: 3,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 3,
        name: 'Spray Tan Full Body',
        serviceTypeId: 1,
        minutes: 20,
        price: 30,
        tax: 0,
      },
      {
        id: 10,
        name: 'Full Colour',
        serviceTypeId: 4,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 15,
        name: 'Bespoke Facial with Skin Specialist',
        serviceTypeId: 5,
        minutes: 80,
        price: 30.5,
        tax: 0,
      },
    ],
    availableDates: [
      {
        id: 276,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 286,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 296,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 306,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 316,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 326,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 336,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 346,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 356,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 366,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 376,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 386,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 396,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 406,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 416,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 426,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 436,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 446,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 456,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 466,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 476,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 486,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 496,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 506,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 516,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 526,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 536,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 546,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 556,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Zanna Millhouse',
    services: [
      {
        id: 4,
        name: 'Gel Shape and Paint Feet (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 5,
        name: 'Gel Shape and Paint Hands (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
      {
        id: 3,
        name: 'Spray Tan Full Body',
        serviceTypeId: 1,
        minutes: 20,
        price: 30,
        tax: 0,
      },
      {
        id: 6,
        name: 'Full hand nail art add on',
        serviceTypeId: 2,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
    ],
    availableDates: [
      {
        id: 267,
        date: '2021-12-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 277,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 287,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 297,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 307,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 317,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 327,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 337,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 347,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 357,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 367,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 377,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 387,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 397,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 407,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 417,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 427,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 437,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 447,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 457,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 467,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 477,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 487,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 497,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 507,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 517,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 527,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 537,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 547,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 557,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Davis Lovell',
    services: [
      {
        id: 10,
        name: 'Full Colour',
        serviceTypeId: 4,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 11,
        name: 'Partial Foil Highlights',
        serviceTypeId: 4,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 9,
        name: 'Cut + Blow Dry + Clour',
        serviceTypeId: 3,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
    ],
    availableDates: [
      {
        id: 278,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 288,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 298,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 308,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 318,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 328,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 338,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 348,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 358,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 368,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 378,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 388,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 398,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 408,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 418,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 428,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 438,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 448,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 458,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 468,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 478,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 488,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 498,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 508,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 518,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 528,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 538,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 548,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 558,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Conor Dane',
    services: [
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 6,
        name: 'Full hand nail art add on',
        serviceTypeId: 2,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
      {
        id: 5,
        name: 'Gel Shape and Paint Hands (No gel removal needed)',
        serviceTypeId: 2,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 1,
        name: 'Blow Dry',
        serviceTypeId: 1,
        minutes: 40,
        price: 35,
        tax: 5,
      },
      {
        id: 17,
        name: 'Full Set Semi Permanent Lashes',
        serviceTypeId: 6,
        minutes: 120,
        price: 45.55,
        tax: 5,
      },
      {
        id: 7,
        name: 'Cut+Blow Dry',
        serviceTypeId: 3,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 16,
        name: 'Package Lashes',
        serviceTypeId: 6,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
    ],
    availableDates: [
      {
        id: 279,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 289,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 299,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 309,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 319,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 329,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 339,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 349,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 359,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 369,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 379,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 389,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 399,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 409,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 419,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 429,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 439,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 449,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 459,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 469,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 479,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 489,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 499,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 509,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 519,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 529,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 539,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 549,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 559,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Dianna Haines',
    title: 'Senior Hair Stylist',
    services: [
      {
        id: 3,
        name: 'Spray Tan Full Body',
        serviceTypeId: 1,
        minutes: 20,
        price: 30,
        tax: 0,
      },
      {
        id: 6,
        name: 'Full hand nail art add on',
        serviceTypeId: 2,
        minutes: 20,
        price: 30.5,
        tax: 0,
      },
      {
        id: 15,
        name: 'Bespoke Facial with Skin Specialist',
        serviceTypeId: 5,
        minutes: 80,
        price: 30.5,
        tax: 0,
      },
      {
        id: 7,
        name: 'Cut+Blow Dry',
        serviceTypeId: 3,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
      {
        id: 2,
        name: 'Eyebrows Wax',
        serviceTypeId: 1,
        minutes: 30,
        price: 45,
        tax: 5,
      },
      {
        id: 14,
        name: 'Teenager Facial',
        serviceTypeId: 5,
        minutes: 30,
        price: 45.55,
        tax: 5,
      },
      {
        id: 16,
        name: 'Package Lashes',
        serviceTypeId: 6,
        minutes: 40,
        price: 35.5,
        tax: 5,
      },
    ],
    availableDates: [
      {
        id: 280,
        date: '2021-12-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 290,
        date: '2021-12-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 300,
        date: '2021-12-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 310,
        date: '2021-12-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 320,
        date: '2021-12-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 330,
        date: '2021-12-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 340,
        date: '2021-12-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 350,
        date: '2021-12-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 360,
        date: '2022-01-01',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 370,
        date: '2022-01-02',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 380,
        date: '2022-01-03',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 390,
        date: '2022-01-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 400,
        date: '2022-01-15',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 410,
        date: '2022-01-20',
        availableTimeSlots: [
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 420,
        date: '2022-01-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 430,
        date: '2022-01-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 440,
        date: '2022-01-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 450,
        date: '2022-02-05',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 460,
        date: '2022-02-06',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 470,
        date: '2022-02-08',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 480,
        date: '2022-02-09',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 490,
        date: '2022-02-10',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
          {
            startTime: '18:00',
            endTime: '18:30',
          },
        ],
      },
      {
        id: 500,
        date: '2022-02-11',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
          {
            startTime: '17:30',
            endTime: '18:00',
          },
        ],
      },
      {
        id: 510,
        date: '2022-02-15',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
        ],
      },
      {
        id: 520,
        date: '2022-02-17',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 530,
        date: '2022-02-20',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
          {
            startTime: '16:30',
            endTime: '17:00',
          },
          {
            startTime: '17:00',
            endTime: '17:30',
          },
        ],
      },
      {
        id: 540,
        date: '2022-02-21',
        availableTimeSlots: [
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
          {
            startTime: '16:00',
            endTime: '16:30',
          },
        ],
      },
      {
        id: 550,
        date: '2022-02-25',
        availableTimeSlots: [
          {
            startTime: '09:00',
            endTime: '09:30',
          },
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
      {
        id: 560,
        date: '2022-02-27',
        availableTimeSlots: [
          {
            startTime: '09:30',
            endTime: '10:00',
          },
          {
            startTime: '10:00',
            endTime: '10:30',
          },
          {
            startTime: '10:30',
            endTime: '11:00',
          },
          {
            startTime: '11:00',
            endTime: '11:30',
          },
          {
            startTime: '11:30',
            endTime: '12:00',
          },
          {
            startTime: '12:00',
            endTime: '12:30',
          },
          {
            startTime: '12:30',
            endTime: '13:00',
          },
          {
            startTime: '13:00',
            endTime: '13:30',
          },
          {
            startTime: '13:30',
            endTime: '14:00',
          },
          {
            startTime: '14:00',
            endTime: '14:30',
          },
          {
            startTime: '14:30',
            endTime: '15:00',
          },
          {
            startTime: '15:00',
            endTime: '15:30',
          },
          {
            startTime: '15:30',
            endTime: '16:00',
          },
        ],
      },
    ],
  },
];

const allAvailableDates = mockRegularStaffList
  .map((staff) => staff.availableDates)
  .flat()
  .map((availableDate) => availableDate.date);

const mockNoPreferenceStaff = {
  id: NO_PREFERENCE_STAFF_ID,
  name: 'No preference',
  title: 'Maximum availability',
  availableDates: Array.from(new Set(allAvailableDates)),
} as NoPreferenceStaff;

export const mockStaffList: FetchStaffListResponseDto = {
  regularStaffList: mockRegularStaffList,
  noPreferenceStaff: mockNoPreferenceStaff,
};

export const mockCaptcha =
  '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0,0,150,50"><path fill="#222" d="M56.66 33.02L56.60 32.96L56.64 33.00Q59.66 32.56 62.86 32.68L62.97 32.79L62.80 32.61Q62.87 30.17 62.87 27.77L62.79 27.70L62.79 27.69Q62.87 25.29 63.06 22.74L63.10 22.79L63.00 22.68Q61.84 24.46 56.62 32.98ZM66.59 40.40L66.46 40.27L66.57 40.38Q64.86 40.04 63.07 39.96L62.95 39.84L62.95 39.84Q62.83 37.55 62.71 35.08L62.77 35.14L62.69 35.06Q57.43 34.93 52.71 36.34L52.59 36.22L52.65 36.28Q52.82 35.84 53.01 34.85L52.96 34.81L53.05 34.89Q54.71 31.60 58.28 25.32L58.40 25.44L58.26 25.30Q61.29 20.56 64.72 16.68L64.69 16.65L64.63 16.59Q65.62 16.51 67.29 16.24L67.26 16.21L67.17 16.12Q65.22 22.51 65.22 29.55L65.33 29.66L65.24 29.57Q65.26 31.08 65.34 32.56L65.33 32.55L66.68 32.73L66.67 32.72Q67.32 32.79 67.92 32.90L67.92 32.89L67.93 32.91Q68.03 33.89 68.30 35.83L68.27 35.80L68.29 35.82Q67.02 35.50 65.53 35.31L65.61 35.39L65.63 35.41Q65.74 37.30 66.42 40.23ZM68.08 32.41L68.23 32.56L68.14 32.47Q68.00 32.45 67.81 32.45L67.75 32.39L67.47 32.49L67.45 32.46Q67.29 30.93 67.29 29.52L67.35 29.59L67.34 29.58Q67.27 23.11 69.33 17.10L69.39 17.16L69.26 17.03Q68.58 17.37 67.13 17.76L67.15 17.78L67.08 17.71Q67.29 16.93 67.75 15.52L67.86 15.63L67.75 15.52Q66.60 16.05 64.55 16.28L64.56 16.29L64.53 16.27Q60.56 20.56 55.35 29.92L55.30 29.87L57.34 26.17L57.45 26.27Q57.00 27.28 56.74 27.85L56.75 27.86L52.24 36.82L52.21 36.80Q52.90 36.69 54.04 36.31L54.02 36.28L53.97 36.62L53.95 36.59Q53.75 37.20 53.45 38.45L53.50 38.50L53.60 38.61Q57.57 37.13 62.40 37.32L62.48 37.40L62.39 37.31Q62.59 38.42 62.78 40.40L62.71 40.33L62.69 40.31Q63.66 40.21 64.72 40.32L64.89 40.49L64.77 40.37Q65.04 41.17 65.30 42.54L65.32 42.55L65.30 42.53Q67.05 42.61 70.06 43.53L70.10 43.57L70.05 43.52Q69.06 41.38 68.14 38.11L68.21 38.18L69.60 38.57L69.63 38.61Q70.36 38.88 71.04 39.22L71.12 39.30L71.07 39.25Q70.31 36.77 70.16 35.10L70.01 34.95L70.05 34.99Q69.52 34.88 68.38 34.65L68.35 34.62L68.44 34.71Q68.18 33.39 68.18 32.51ZM60.16 32.34L60.25 32.43L60.19 32.36Q60.91 31.03 62.47 28.48L62.52 28.53L62.41 28.41Q62.58 29.54 62.55 30.49L62.49 30.44L62.36 30.31Q62.51 31.45 62.55 32.40L62.53 32.39L62.46 32.31Q62.01 32.40 61.44 32.40L61.41 32.36L61.32 32.28Q60.88 32.44 60.27 32.44Z"></path><path fill="#222" d="M119.97 32.90L120.03 32.97L120.09 33.02Q123.12 32.59 126.32 32.71L126.39 32.77L126.37 32.75Q126.36 30.24 126.36 27.84L126.17 27.65L126.35 27.82Q126.35 25.35 126.54 22.80L126.38 22.64L126.55 22.81Q125.26 24.45 120.04 32.98ZM129.90 40.28L130.00 40.38L129.84 40.22Q128.30 40.05 126.51 39.98L126.46 39.93L126.53 40.00Q126.23 37.53 126.12 35.05L126.14 35.08L126.18 35.12Q120.74 34.82 116.02 36.23L116.10 36.30L116.07 36.27Q116.12 35.72 116.31 34.73L116.41 34.83L116.47 34.89Q118.25 31.72 121.83 25.44L121.71 25.31L121.79 25.39Q124.66 20.50 128.08 16.61L128.01 16.54L128.04 16.57Q129.03 16.49 130.71 16.23L130.55 16.07L130.68 16.21Q128.78 22.64 128.78 29.68L128.66 29.56L128.78 29.68Q128.81 31.20 128.88 32.68L128.78 32.58L130.05 32.67L130.10 32.72Q130.81 32.85 131.42 32.97L131.28 32.83L131.39 32.94Q131.45 33.88 131.72 35.82L131.78 35.88L131.79 35.89Q130.53 35.58 129.04 35.39L129.06 35.41L128.99 35.34Q129.21 37.35 129.90 40.28ZM131.53 32.43L131.63 32.53L131.64 32.54Q131.41 32.43 131.22 32.43L131.30 32.51L130.82 32.40L130.75 32.34Q130.69 30.91 130.69 29.50L130.81 29.62L130.80 29.61Q130.76 23.17 132.81 17.15L132.73 17.07L132.87 17.21Q132.09 17.46 130.64 17.84L130.55 17.75L130.67 17.86Q130.86 17.07 131.31 15.66L131.25 15.59L131.34 15.68Q130.05 16.07 128.00 16.30L127.89 16.19L127.91 16.21Q124.03 20.60 118.82 29.96L118.80 29.94L120.86 26.26L120.80 26.20Q120.43 27.27 120.16 27.84L120.22 27.89L115.80 36.95L115.78 36.93Q116.43 36.79 117.58 36.41L117.58 36.41L117.43 36.65L117.40 36.61Q117.32 37.34 117.02 38.59L117.04 38.61L116.94 38.51Q121.05 37.18 125.88 37.37L125.90 37.38L125.80 37.29Q125.88 38.28 126.07 40.26L126.08 40.27L126.13 40.32Q127.27 40.39 128.33 40.51L128.31 40.48L128.17 40.34Q128.42 41.13 128.69 42.50L128.69 42.50L128.57 42.38Q130.50 42.64 133.51 43.55L133.65 43.69L133.60 43.64Q132.58 41.48 131.67 38.21L131.75 38.29L133.06 38.61L133.15 38.70Q133.85 38.94 134.54 39.29L134.44 39.19L134.47 39.22Q133.73 36.76 133.58 35.09L133.48 34.99L133.48 34.99Q132.87 34.80 131.73 34.57L131.78 34.62L131.85 34.69Q131.68 33.46 131.68 32.58ZM123.62 32.37L123.53 32.28L123.69 32.44Q124.42 31.11 125.98 28.56L125.90 28.48L125.90 28.48Q125.94 29.47 125.90 30.42L125.92 30.44L125.84 30.36Q125.97 31.48 126.00 32.43L125.97 32.39L125.98 32.40Q125.30 32.26 124.73 32.26L124.88 32.41L124.75 32.28Q124.25 32.39 123.65 32.39Z"></path><path fill="#444" d="M35.37 32.87L35.44 32.94L35.37 32.88Q38.52 32.56 41.72 32.67L41.83 32.79L41.74 32.70Q41.70 30.15 41.70 27.75L41.66 27.71L41.73 27.77Q41.65 25.22 41.84 22.67L41.86 22.69L41.85 22.68Q40.74 24.50 35.53 33.03ZM45.42 40.37L45.36 40.31L45.28 40.23Q43.61 39.93 41.82 39.85L41.86 39.90L41.93 39.97Q41.61 37.47 41.49 35.00L41.68 35.18L41.63 35.14Q36.28 34.92 31.55 36.33L31.49 36.27L31.57 36.34Q31.62 35.79 31.81 34.80L31.75 34.74L31.82 34.81Q33.66 31.70 37.24 25.42L37.11 25.28L37.25 25.43Q40.19 20.60 43.62 16.72L43.44 16.54L43.52 16.62Q44.39 16.43 46.07 16.16L46.11 16.20L46.12 16.21Q44.18 22.61 44.18 29.65L44.15 29.62L44.25 29.73Q44.08 31.04 44.15 32.52L44.28 32.65L45.45 32.64L45.52 32.70Q46.12 32.74 46.73 32.85L46.71 32.84L46.82 32.95Q46.81 33.81 47.08 35.75L47.16 35.84L47.10 35.77Q45.99 35.62 44.51 35.43L44.41 35.33L44.42 35.34Q44.57 37.27 45.25 40.20ZM46.93 32.40L47.04 32.51L46.97 32.44Q46.84 32.43 46.65 32.43L46.55 32.33L46.34 32.50L46.28 32.44Q46.06 30.85 46.06 29.44L46.15 29.53L46.07 29.45Q46.14 23.13 48.20 17.11L48.25 17.16L48.22 17.14Q47.53 17.47 46.08 17.85L45.94 17.71L45.96 17.73Q46.16 16.94 46.62 15.53L46.77 15.68L46.74 15.66Q45.35 15.94 43.29 16.17L43.40 16.28L43.30 16.18Q39.46 20.60 34.25 29.96L34.24 29.95L36.38 26.34L36.32 26.29Q35.94 27.35 35.67 27.92L35.62 27.87L31.06 36.78L31.14 36.87Q31.84 36.77 32.98 36.39L32.93 36.34L32.72 36.51L32.84 36.63Q32.60 37.19 32.30 38.44L32.31 38.45L32.41 38.55Q36.51 37.22 41.35 37.41L41.30 37.35L41.39 37.44Q41.35 38.32 41.54 40.30L41.61 40.37L41.48 40.24Q42.66 40.36 43.73 40.47L43.71 40.45L43.77 40.51Q43.87 41.14 44.13 42.51L44.08 42.46L44.02 42.40Q45.93 42.64 48.94 43.55L48.96 43.57L48.93 43.54Q47.98 41.45 47.07 38.18L47.20 38.30L48.55 38.67L48.45 38.57Q49.27 38.93 49.95 39.27L49.83 39.15L49.85 39.17Q49.10 36.71 48.95 35.03L48.88 34.97L49.00 35.09Q48.32 34.82 47.17 34.59L47.27 34.69L47.26 34.68Q47.09 33.44 47.09 32.57ZM38.99 32.31L38.97 32.28L39.00 32.31Q39.78 31.04 41.34 28.49L41.28 28.43L41.26 28.40Q41.33 29.43 41.29 30.38L41.35 30.44L41.34 30.43Q41.41 31.49 41.45 32.44L41.34 32.33L41.34 32.33Q40.72 32.25 40.15 32.25L40.22 32.32L40.14 32.24Q39.65 32.36 39.04 32.36Z"></path><path fill="#444" d="M14.24 32.88L14.31 32.96L14.29 32.94Q17.29 32.48 20.49 32.59L20.52 32.62L20.53 32.63Q20.47 30.06 20.47 27.66L20.58 27.77L20.53 27.72Q20.55 25.26 20.74 22.71L20.70 22.67L20.73 22.70Q19.52 24.43 14.31 32.95ZM24.25 40.35L24.29 40.39L24.17 40.27Q22.61 40.08 20.83 40.01L20.67 39.85L20.72 39.90Q20.56 37.57 20.45 35.10L20.37 35.02L20.50 35.15Q15.12 34.91 10.40 36.32L10.33 36.25L10.41 36.33Q10.47 35.78 10.66 34.79L10.70 34.83L10.78 34.91Q12.57 31.75 16.15 25.47L16.05 25.37L15.98 25.30Q18.90 20.45 22.32 16.57L22.34 16.58L22.29 16.54Q23.17 16.34 24.84 16.08L25.02 16.25L24.98 16.21Q23.10 22.67 23.10 29.71L23.01 29.62L22.97 29.59Q23.07 31.17 23.14 32.66L23.20 32.71L24.42 32.75L24.32 32.65Q25.09 32.85 25.70 32.96L25.54 32.81L25.66 32.92Q25.72 33.86 25.99 35.80L26.08 35.89L26.09 35.90Q24.71 35.48 23.22 35.28L23.33 35.39L23.27 35.33Q23.58 37.43 24.27 40.36ZM25.92 32.54L25.89 32.51L25.78 32.40Q25.75 32.48 25.56 32.48L25.46 32.38L25.08 32.38L25.03 32.34Q24.94 30.87 24.94 29.46L25.02 29.54L25.02 29.54Q25.08 23.21 27.13 17.19L26.97 17.02L27.04 17.10Q26.36 17.44 24.91 17.82L24.84 17.75L24.86 17.78Q25.15 17.07 25.61 15.67L25.48 15.53L25.55 15.61Q24.18 15.91 22.12 16.14L22.11 16.13L22.14 16.16Q18.28 20.56 13.07 29.93L13.07 29.92L15.07 26.17L15.10 26.21Q14.82 27.37 14.55 27.94L14.46 27.85L9.95 36.82L9.98 36.85Q10.62 36.69 11.76 36.31L11.70 36.25L11.69 36.62L11.73 36.66Q11.60 37.33 11.30 38.59L11.26 38.54L11.13 38.42Q15.30 37.15 20.14 37.34L20.17 37.37L20.15 37.35Q20.16 38.27 20.35 40.25L20.34 40.24L20.34 40.25Q21.50 40.34 22.57 40.45L22.44 40.32L22.62 40.50Q22.59 41.01 22.86 42.38L22.87 42.39L22.96 42.48Q24.87 42.71 27.87 43.63L27.91 43.67L27.85 43.61Q26.86 41.47 25.95 38.20L25.87 38.12L27.36 38.62L27.42 38.68Q28.08 38.89 28.77 39.23L28.70 39.16L28.69 39.15Q27.98 36.73 27.82 35.05L27.75 34.97L27.80 35.03Q27.32 34.97 26.18 34.74L26.15 34.70L26.04 34.60Q25.92 33.41 25.92 32.53ZM17.95 32.41L17.86 32.32L17.90 32.36Q18.73 31.14 20.29 28.59L20.17 28.46L20.12 28.42Q20.15 29.40 20.11 30.35L20.09 30.33L20.21 30.45Q20.21 31.43 20.25 32.38L20.15 32.29L20.16 32.30Q19.63 32.30 19.06 32.30L19.07 32.31L18.97 32.21Q18.59 32.44 17.98 32.44Z"></path><path fill="#111" d="M99.53 40.36L99.48 40.31L99.61 40.44Q98.13 40.45 96.57 40.03L96.46 39.92L96.59 40.05Q95.41 39.18 95.26 37.54L95.27 37.55L95.25 37.53Q95.21 37.34 95.40 34.71L95.24 34.55L95.34 34.65Q96.45 34.54 98.46 34.16L98.39 34.08L98.27 34.92L98.18 34.83Q97.99 36.66 99.40 37.23L99.22 37.05L99.41 37.24Q100.21 37.57 102.30 37.57L102.23 37.50L102.11 37.39Q103.84 37.36 104.03 37.29L104.03 37.29L103.99 37.25Q104.90 37.09 105.62 36.59L105.57 36.55L105.73 36.71Q107.12 35.73 106.93 33.64L106.93 33.64L106.84 33.55Q106.76 31.23 105.03 29.66L104.84 29.47L104.92 29.56Q103.11 27.92 100.64 27.92L100.68 27.96L100.71 27.76L100.65 27.71Q101.08 27.72 101.96 27.64L101.88 27.57L101.89 27.57Q103.94 27.60 105.31 26.36L105.34 26.39L105.18 26.23Q106.61 25.06 106.76 23.19L106.79 23.22L106.88 23.31Q106.94 22.95 106.94 22.61L106.91 22.58L106.78 22.45Q106.86 21.01 105.49 20.09L105.50 20.11L105.48 20.08Q104.27 19.29 102.67 19.41L102.74 19.47L102.67 19.41Q101.33 19.21 100.11 19.63L100.18 19.70L100.23 19.74Q98.71 20.21 98.41 21.35L98.44 21.38L98.39 21.33Q98.17 22.07 98.25 22.83L98.21 22.79L98.33 22.91Q97.17 22.55 95.12 21.83L95.29 22.00L95.11 21.82Q94.92 20.18 94.96 19.34L95.01 19.39L95.12 19.50Q95.17 17.92 96.24 17.23L96.19 17.19L96.28 17.28Q97.68 16.66 99.28 16.66L99.30 16.68L99.30 16.69Q102.36 16.54 105.52 16.81L105.61 16.90L105.54 16.83Q110.61 17.26 110.31 21.03L110.24 20.96L110.33 21.05Q110.14 22.42 109.65 23.98L109.72 24.05L109.72 24.06Q108.76 27.10 106.40 28.01L106.38 27.99L106.40 28.01Q108.98 28.50 109.59 31.85L109.68 31.94L109.71 31.96Q109.92 33.09 109.99 35.10L110.01 35.12L109.92 35.03Q110.16 39.57 105.55 40.03L105.46 39.94L105.53 40.01Q104.77 40.05 99.48 40.31ZM104.82 42.68L104.71 42.58L104.71 42.58Q105.39 42.68 108.24 42.76L108.24 42.75L108.14 42.65Q109.94 42.78 111.57 42.13L111.57 42.12L111.51 42.06Q112.69 41.12 112.50 39.37L112.66 39.52L112.55 39.41Q112.48 38.12 112.17 36.37L112.13 36.32L112.22 36.42Q111.50 31.92 109.55 30.29L109.46 30.19L109.32 29.86L109.31 29.82L109.24 29.75Q111.00 28.31 111.77 23.93L111.83 24.00L111.85 24.01Q111.84 23.51 111.95 22.56L112.01 22.62L111.98 22.58Q112.06 21.83 111.99 21.14L111.95 21.11L111.94 21.10Q111.68 19.32 110.39 18.63L110.54 18.79L110.36 18.68L110.46 18.78Q110.07 17.71 108.93 17.18L109.04 17.29L109.05 17.29Q107.51 16.60 102.37 16.29L102.28 16.20L102.21 16.13Q100.59 16.11 98.99 16.11L99.07 16.19L98.96 16.08Q97.36 16.07 95.83 16.72L95.82 16.70L95.98 16.87Q94.74 17.60 94.74 19.35L94.73 19.34L94.69 19.30Q94.61 18.81 94.88 22.16L94.95 22.23L95.02 22.30Q95.25 22.30 96.88 22.91L96.80 22.83L96.86 22.88Q96.98 23.54 96.94 24.03L96.78 23.87L96.91 24.00Q96.93 24.51 96.97 25.05L96.94 25.02L96.90 24.98Q98.73 25.40 100.75 25.52L100.78 25.55L100.68 25.45Q100.71 23.54 101.82 22.70L101.63 22.52L101.67 22.55Q102.57 21.97 104.59 21.74L104.65 21.80L104.66 21.81Q105.80 21.81 106.37 22.00L106.36 21.99L106.22 21.85Q106.30 22.01 106.34 22.12L106.44 22.22L106.33 22.31L106.44 22.87L106.45 22.88Q106.50 23.13 106.47 23.28L106.36 23.17L106.53 23.34Q106.40 25.01 104.88 26.19L104.77 26.07L104.84 26.15Q104.01 27.14 101.99 27.33L101.94 27.28L101.87 27.21Q101.14 27.35 100.26 27.35L100.23 27.32L100.34 27.43Q100.30 27.69 100.45 28.38L100.42 28.35L100.53 28.46Q102.27 28.44 103.71 29.17L103.73 29.18L103.61 29.17L102.11 29.43L102.11 29.43Q101.96 29.59 102.08 30.20L102.21 30.33L102.25 30.37Q104.39 30.30 106.10 31.63L106.05 31.58L106.01 31.54Q106.21 31.89 106.51 33.52L106.55 33.57L106.62 33.63Q106.84 36.59 103.91 37.01L103.82 36.92L103.87 36.98Q101.68 37.15 101.11 37.11L101.24 37.24L101.08 37.08Q100.73 37.08 100.20 37.00L100.21 37.01L100.13 36.48L100.34 36.11L100.39 35.74L100.28 35.29L100.27 35.28Q99.47 35.50 98.67 35.70L98.68 35.71L98.55 35.57Q98.61 35.45 98.61 35.26L98.57 35.22L98.53 35.17Q98.69 35.11 98.69 34.88L98.50 34.69L98.52 34.70Q98.53 34.27 98.69 33.54L98.77 33.63L98.77 33.62Q96.98 33.93 95.11 34.27L95.03 34.19L94.96 34.12Q95.03 34.68 94.91 35.80L94.85 35.74L94.91 35.80Q94.80 36.92 94.80 37.53L94.86 37.60L94.78 37.51Q94.89 39.61 96.27 40.37L96.34 40.45L96.36 40.46Q97.67 42.58 102.39 42.39L102.41 42.40L102.45 42.45Q103.15 42.39 104.67 42.54Z"></path><path fill="#333" d="M82.19 23.32L82.26 23.39L82.18 23.31Q78.99 23.32 77.16 22.25L77.34 22.43L77.17 22.27Q79.79 21.00 84.66 16.77L84.56 16.67L84.70 16.81Q85.39 16.59 86.69 15.98L86.69 15.98L86.63 15.93Q85.25 21.82 85.14 28.18L85.13 28.17L85.25 28.28Q85.00 34.51 86.07 40.60L86.24 40.78L86.18 40.71Q84.38 39.87 82.25 39.76L82.27 39.78L82.24 39.75Q82.21 35.68 82.21 31.61L82.25 31.64L82.13 31.53Q82.23 27.52 82.27 23.40ZM81.92 25.68L81.83 40.17L81.95 40.29Q83.20 40.33 84.16 40.52L84.11 40.47L84.07 40.43Q84.15 41.11 84.34 42.49L84.37 42.52L84.27 42.42Q87.17 43.00 89.61 45.25L89.68 45.31L89.56 45.20Q87.11 38.11 87.08 30.65L87.08 30.64L87.12 30.69Q86.95 23.14 88.78 15.90L88.77 15.89L88.76 15.89Q88.25 16.33 86.65 17.43L86.64 17.41L86.75 17.53Q86.94 16.77 87.25 15.25L87.30 15.30L87.17 15.17Q85.87 15.96 84.42 16.34L84.34 16.26L84.43 16.35Q80.75 20.01 76.44 22.30L76.39 22.24L76.46 22.32Q77.84 23.39 80.20 23.73L80.15 23.68L80.16 23.69Q79.44 24.15 78.15 25.22L78.18 25.25L78.20 25.28Q79.75 25.72 81.96 25.72L81.93 25.69Z"></path><path d="M10 46 C67 15,86 32,140 46" stroke="#444" fill="none"></path></svg>';
