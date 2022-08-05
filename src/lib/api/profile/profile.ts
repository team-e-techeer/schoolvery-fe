import { UserAPI, UserAPIResponse, ProfileAPI, ProfileAPIResponse} from '@/interface/profile';
import { makeHeader } from '@/util/makeHeader';
import client from '../client';

// 유저 정보 불러오기
export const getUserAPI = async ({ userId, accessToken }: UserAPI): Promise<UserAPIResponse> => {
    const headers = makeHeader(accessToken);
    const { data } = await client.get(`/api/v1/users/${userId}`, { headers });
    return data;
  };

// 유저 정보 수정하기
export const patchUserAPI = async (profileInfo: ProfileAPI): Promise<ProfileAPIResponse> => {
    const headers = { 'Content-type': 'Application/json', Accept: '*/*' };
    const { data } = await client.patch(`/api/v1/users/${profileInfo.userId}`, JSON.stringify(profileInfo), { headers });
    return data;
  };