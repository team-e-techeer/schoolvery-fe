import client from '../client';
import type { ListAPI, ListWithCategoryAPI } from '@/interface/list';

export const getListAPI = async ({ schoolId }: ListAPI) => {
  const response = await client.get(`/api/v1/posts/school/${schoolId}`);
  return response;
};

export const getListWithCategoryAPI = async ({ schoolId, categoryId }: ListWithCategoryAPI) => {
  const response = await client.get(`/api/v1/posts/school/${schoolId}/category/${categoryId}`);
  return response;
};
