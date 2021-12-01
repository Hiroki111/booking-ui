import { render, screen } from '@testing-library/react';

import { AvailableTime } from '../AvailableTime';
import { HomePageContext, HomePageContextInterface } from '../../../../../../../contexts/HomePageContext';
import { createMockHomePageContextValue } from '../../../../../../../testUtil/mockData/HomePageContext';
import { createMockAvailableTimeslot } from '../../../../../../../testUtil/mockData/availableTimeSlot';
import { createMockAvailableDate } from '../../../../../../../testUtil/mockData/availableDate';

describe('AvailableTime.tsx', () => {
  const mockAvailableTimeSlots = [
    createMockAvailableTimeslot('10:00', '10:30'),
    createMockAvailableTimeslot('10:30', '11:00'),
    createMockAvailableTimeslot('11:00', '11:30'),
  ];

  function renderAvailableTime(contextValue: HomePageContextInterface) {
    return render(
      <HomePageContext.Provider value={contextValue}>
        <AvailableTime />
      </HomePageContext.Provider>,
    );
  }

  it('should render timeslots', () => {
    const contextValue = createMockHomePageContextValue({
      selectedDate: createMockAvailableDate({
        availableTimeSlots: mockAvailableTimeSlots,
      }),
    });

    renderAvailableTime(contextValue);

    mockAvailableTimeSlots.forEach((timeSlot) => {
      expect(screen.getByText(timeSlot.startTime)).toBeInTheDocument();
    });
  });

  it('should render null if no timeslot is provided', () => {
    const contextValue = createMockHomePageContextValue({
      selectedDate: createMockAvailableDate({ availableTimeSlots: [] }),
    });

    const { container } = renderAvailableTime(contextValue);

    expect(container.innerHTML).toHaveLength(0);
  });
});
