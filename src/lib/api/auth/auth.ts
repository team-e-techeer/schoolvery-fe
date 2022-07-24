import { LoginAPI, LoginAPIResponse, RegisterAPI } from '@/interface/auth';
import client from '../client';

export const postRegisterAPI = async (registerInfo: RegisterAPI) => {
  const headers = { 'Content-type': 'Application/json', Accept: '*/*' };
  const { data } = await client.post('/api/v1/users/signup', JSON.stringify(registerInfo), { headers });

  return data;
};

export const getLoginAPI = async (loginInfo: LoginAPI): Promise<LoginAPIResponse> => {
  const headers = { 'Content-type': 'Application/json', Accept: '*/*' };
  const { data } = await client.post('/api/v1/users/login', JSON.stringify(loginInfo), { headers });
  return data;
};
