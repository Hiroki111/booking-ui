import { renderHook } from '@testing-library/react-hooks';
import { QueryClientProvider, QueryClient } from 'react-query';
import { createMockServiceDto } from '../../testUtil/mockData/service';
import { createMockNonPreferenceStaff, createMockStaff } from '../../testUtil/mockData/staff';
import { useAllStaffQuery, useRegularStaffQuery } from '../staff';

jest.mock('../../network/restApi', () => ({
  fetchStaffList: jest.fn(),
}));

describe('queries/staff', () => {
  const restApi = require('../../network/restApi');
  const serviceA = createMockServiceDto({ id: 1 });
  const serviceB = createMockServiceDto({ id: 2 });
  const serviceC = createMockServiceDto({ id: 3 });

  function wrapper({ children }: { children: JSX.Element }) {
    return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
  }

  describe('useRegularStaffQuery', () => {
    it('should get regular staff who can do all the services', async () => {
      const staffA = createMockStaff({ services: [serviceA, serviceB, serviceC] });
      const staffB = createMockStaff({ services: [serviceA, serviceB] });
      const staffC = createMockStaff({ services: [serviceA] });
      const staffD = createMockStaff({ services: [] });

      restApi.fetchStaffList.mockImplementation(() => ({
        noPreferenceStaff: createMockNonPreferenceStaff(),
        regularStaffList: [staffA, staffB, staffC, staffD],
      }));

      let renderHookResult = renderHook(() => useRegularStaffQuery([serviceA, serviceB, serviceC]), { wrapper });
      await renderHookResult.waitFor(() => renderHookResult.result.current.isSuccess);
      expect(renderHookResult.result.current.data).toEqual([staffA]);

      renderHookResult = renderHook(() => useRegularStaffQuery([]), { wrapper });
      await renderHookResult.waitFor(() => renderHookResult.result.current.isSuccess);
      expect(renderHookResult.result.current.data).toEqual([staffA, staffB, staffC, staffD]);
    });
  });

  describe('selectAllStaffWhoCanDoAllServices', () => {
    it('should get all the staff who can do all the services', async () => {
      const nonPreferenceStaff = createMockNonPreferenceStaff();
      const staffA = createMockStaff({ services: [serviceA, serviceB, serviceC] });
      const staffB = createMockStaff({ services: [serviceA, serviceB] });
      const staffC = createMockStaff({ services: [serviceA] });
      const staffD = createMockStaff({ services: [] });

      restApi.fetchStaffList.mockImplementation(() => ({
        noPreferenceStaff: createMockNonPreferenceStaff(),
        regularStaffList: [staffA, staffB, staffC, staffD],
      }));

      let renderHookResult = renderHook(() => useAllStaffQuery([serviceA, serviceB, serviceC]), { wrapper });
      await renderHookResult.waitFor(() => renderHookResult.result.current.isSuccess);
      expect(renderHookResult.result.current.data).toEqual([staffA]);

      // nonPreferenceStaff is returned only if there are 2 or more regular staff
      renderHookResult = renderHook(() => useAllStaffQuery([serviceA, serviceB]), { wrapper });
      await renderHookResult.waitFor(() => renderHookResult.result.current.isSuccess);
      expect(renderHookResult.result.current.data).toEqual([nonPreferenceStaff, staffA, staffB]);

      renderHookResult = renderHook(() => useAllStaffQuery([]), { wrapper });
      await renderHookResult.waitFor(() => renderHookResult.result.current.isSuccess);
      expect(renderHookResult.result.current.data).toEqual([nonPreferenceStaff, staffA, staffB, staffC, staffD]);
    });
  });
});
