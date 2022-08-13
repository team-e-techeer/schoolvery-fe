// 게시물 불러오기 API
export interface Post {
  id: string;
  title: string;
  location: string;
  schoolId: string;
  categoryId: string;
  peopleNum: number;
  deliveryFee: number;
  deadline: string;
  content: string;
  store: string;
}

// Request
export interface PostListAPI {
  schoolId: string;
  accessToken: string;
}

export interface PostListWithCategoryAPI {
  schoolId: string;
  categoryId: string;
  accessToken: string;
}

export interface MyPostListAPI {
  userId: string;
  token: string;
}

// Response
export interface PostListAPIResponse {
  dtoList: Post[];
  totalPage: number;
  page: number;
  size: number;
  start: number;
  end: number;
}

// 카테고리

// Request

export interface CategoryListAPI {
  page?: number;
  size?: number;
}

// Response

interface Category {
  id: string;
  name: string;
  description: string;
}

export interface CategoryListAPIResponse {
  dtoList: Category[];
}

// 게시물 검색

export interface SearchListAPI {
  keyword: string;
  accessToken: string;
}

export interface SearchListAPIResponse {
  dtoList: Post[];
  totalPage: number;
  page: number;
  size: number;
  start: number;
  end: number;
}

// 학교 리스트

interface schoolInfo {
  schoolId: '';
  schoolName: '';
}

export type SchoolListResponse = schoolInfo[];

export interface JoinDetail {
  id: string;
  title: string;
  location: string;
  schoolId: string;
  categoryId: string;
  peopleNum: number;
  deliveryFee: number;
  deadline: string;
  content: string;
  store: string;
  left: string;
}
