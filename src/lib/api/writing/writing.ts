import client from '../client';
import { makeHeader } from '@/util/makeHeader';
import type {
  WritingAPI,
  WritingAPIResponse,
  OnePostInformationAPI,
  PutPostInformationAPI,
  DeleteOnePostAPI,
} from '@/interface/writing';

export const postWritingAPI = async ({ accessToken, postData }: WritingAPI): Promise<WritingAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.post('/api/v1/posts', postData, { headers });
  return data;
};

export const getOnePostInformationAPI = async ({
  accessToken,
  postId,
}: OnePostInformationAPI): Promise<WritingAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/posts/${postId}`, { headers });
  return data;
};

export const putPostInformationAPI = async ({
  accessToken,
  postData,
}: PutPostInformationAPI): Promise<WritingAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.put(`/api/v1/posts/${postData.id}`, postData, { headers });
  return data;
};

export const deleteOnePostAPI = async ({ postId, accessToken }: DeleteOnePostAPI) => {
  const headers = makeHeader(accessToken);
  const { data } = await client.delete(`/api/v1/posts/${postId}`, { headers });
  return data;
};
