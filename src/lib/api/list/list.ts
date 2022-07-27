import client from '../client';
import type { CategoryListAPI, CategoryListAPIResponse, PostListAPI, PostListWithCategoryAPI } from '@/interface/list';
import { makeHeader } from '@/util/makeHeader';
import { useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';

// 포스트 목록 불러오기
export const getPostListAPI = async ({ schoolId, accessToken }: PostListAPI): Promise<CategoryListAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/posts/school/${schoolId}`, { headers });
  return data;
};

export const getPostListWithCategoryAPI = async ({ schoolId, categoryId, accessToken }: PostListWithCategoryAPI) => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/posts/school/${schoolId}/category/${categoryId}`, { headers });
  return data;
};

// 카테고리 목록 불러오기
export const getCategoryListAPI = async ({
  page = 1,
  size = 15,
}: CategoryListAPI): Promise<CategoryListAPIResponse> => {
  const { data } = await client.get('/api/v1/categories', { params: { page, size } });
  return data;
};
