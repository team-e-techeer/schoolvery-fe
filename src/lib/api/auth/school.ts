import client from '../client';

export const getSchoolListAPI = async () => {
  const response = await client.get('/api/v1/school');
  return response.data;
};
