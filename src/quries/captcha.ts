import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query';

import restApi from '../network/restApi';

export enum captchaQuries {
  fetchCaptcha = 'fetchCaptcha',
}

export function useCaptchaQuery(): UseQueryResult<string> {
  return useQuery(captchaQuries.fetchCaptcha, restApi.fetchCaptcha);
}
