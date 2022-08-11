import client from '../client';
import type {
  CategoryListAPI,
  CategoryListAPIResponse,
  MyPostListAPI,
  PostListAPI,
  PostListAPIResponse,
  PostListWithCategoryAPI,
} from '@/interface/list';
import { makeHeader } from '@/util/makeHeader';

// 포스트 목록 불러오기
export const getPostListAPI = async ({ schoolId, accessToken }: PostListAPI): Promise<PostListAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/posts/school/${schoolId}`, {
    headers,
    params: {
      page: 1,
      size: 15,
    },
  });
  return data;
};

export const getPostListWithCategoryAPI = async ({
  schoolId,
  categoryId,
  accessToken,
}: PostListWithCategoryAPI): Promise<PostListAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/posts/school/${schoolId}/category/${categoryId}`, {
    headers,
    params: {
      page: 1,
      size: 15,
    },
  });
  return data;
};

// 내 포스트 목록 불러오기
export const getMyPostListAPI = async ({ userId, token }: MyPostListAPI): Promise<PostListAPIResponse> => {
  const headers = makeHeader(token);
  const { data } = await client.get(`/api/v1/posts/user/${userId}`, { headers });
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
