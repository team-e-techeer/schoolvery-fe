import { SchoolListResponse } from '@/interface/list';
import client from '../client';

export const getSchoolListAPI = async (): Promise<SchoolListResponse> => {
  const headers = { 'Content-type': 'Application/json', Accept: '*/*' };
  const { data } = await client.get('/api/v1/school', { headers });
  return data;
};
