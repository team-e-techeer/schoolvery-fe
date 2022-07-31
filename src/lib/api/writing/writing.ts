import client from '../client';
import { makeHeader } from '@/util/makeHeader';
import { WritingAPI, WritingAPIResponse } from '@/interface/writing';

export const postWritingAPI = async ({ accessToken, postData }: WritingAPI): Promise<WritingAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.post('/api/v1/posts', postData, { headers });
  return data;
};
