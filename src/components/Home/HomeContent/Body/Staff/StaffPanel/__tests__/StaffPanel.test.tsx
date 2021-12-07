import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Props } from '../StaffPanel';
import { StaffPanel } from '..';
import { HomePageContextInterface, HomePageContext } from '../../../../../../../contexts/HomePageContext';
import { createMockHomePageContextValue } from '../../../../../../../testUtil/mockData/HomePageContext';
import { createMockStaff } from '../../../../../../../testUtil/mockData/staff';
import { NO_PREFERENCE_STAFF_ID } from '../../../../../../../staticData/staff';

describe('StaffPanel.tsx', () => {
  function renderServicePanel(props: Props, contextValue: HomePageContextInterface) {
    render(
      <MemoryRouter>
        <HomePageContext.Provider value={contextValue}>
          <StaffPanel {...props} />
        </HomePageContext.Provider>
      </MemoryRouter>,
    );
  }

  it('should show staff details with a photo', () => {
    const props = {
      staff: createMockStaff({ profilePhotoUrl: 'https://example.com' }),
    };
    renderServicePanel(props, createMockHomePageContextValue());

    expect(screen.getByTestId('staff-photo')).toBeInTheDocument();
    expect(screen.queryByTestId('staff-avatar')).toBeNull();
  });

  it("should show staff details with an avatar if the staff doesn't have its photo", () => {
    // First + Last name
    let props = { staff: createMockStaff({ name: 'Albus Severus Potter' }) };
    renderServicePanel(props, createMockHomePageContextValue());

    expect(screen.queryByTestId('staff-photo')).toBeNull();
    expect(screen.getByTestId('staff-avatar')).toHaveTextContent('AP');
    cleanup();

    // Single name
    props = { staff: createMockStaff({ name: 'Bob' }) };
    renderServicePanel(props, createMockHomePageContextValue());

    expect(screen.queryByTestId('staff-photo')).toBeNull();
    expect(screen.getByTestId('staff-avatar')).toHaveTextContent('B');
    cleanup();

    // No name
    props = { staff: createMockStaff({ name: '' }) };
    renderServicePanel(props, createMockHomePageContextValue());

    expect(screen.queryByTestId('staff-photo')).toBeNull();
    expect(screen.getByTestId('staff-avatar')).toHaveTextContent('');
    cleanup();
  });

  it('should show the No preference avatar', () => {
    const props = { staff: createMockStaff({ id: NO_PREFERENCE_STAFF_ID }) };
    renderServicePanel(props, createMockHomePageContextValue());

    expect(screen.queryByTestId('staff-photo')).toBeNull();
    expect(screen.getByTestId('no-preference-staff-avatar')).toBeInTheDocument();
  });
});
