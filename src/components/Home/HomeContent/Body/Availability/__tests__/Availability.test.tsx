import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Availability } from '../Availability';
import { HomePageContext, HomePageContextInterface } from '../../../../../../contexts/HomePageContext';
import { createMockHomePageContextValue } from '../../../../../../testUtil/mockData/HomePageContext';
import { AvailableDate } from '../../../../../../interfaces/staff';
import { createMockAvailableDate } from '../../../../../../testUtil/mockData/availableDate';

jest.mock('../../../../../../../services/routing', () => ({
  getPathToSkippedPage: jest.fn().mockImplementation(() => null),
}));

describe('Availability.tsx', () => {
  function renderAvailability(contextValue: HomePageContextInterface) {
    return render(
      <MemoryRouter>
        <HomePageContext.Provider value={contextValue}>
          <Availability />
        </HomePageContext.Provider>
      </MemoryRouter>,
    );
  }

  it('should scroll into AvailableTime when the selected date gets its value', () => {
    const mockedScrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = mockedScrollIntoView;

    let contextValue = createMockHomePageContextValue({ selectedDate: {} as AvailableDate });
    renderAvailability(contextValue);
    expect(mockedScrollIntoView).not.toBeCalled();

    contextValue = createMockHomePageContextValue({ selectedDate: createMockAvailableDate() });
    renderAvailability(contextValue);
    expect(mockedScrollIntoView).toBeCalled();
  });
});
