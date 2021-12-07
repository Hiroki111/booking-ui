import { useQuery, UseQueryResult } from 'react-query';

import { ServiceTypeDto } from '../interfaces/serviceType';
import restApi from '../network/restApi';

export enum serviceTypesQuries {
  fetchServiceTypes = 'fetchServiceTypes',
}

export function useServiceTypesQuries(): UseQueryResult<ServiceTypeDto[]> {
  return useQuery(serviceTypesQuries.fetchServiceTypes, restApi.fetchServiceTypes);
}
