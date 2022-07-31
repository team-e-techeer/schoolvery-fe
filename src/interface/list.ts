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

export interface PostListAPI {
  schoolId: string;
  accessToken: string;
}

export interface PostListAPIResponse {
  dtoList: Post[];
  totalPage: number;
  page: number;
  size: number;
  start: number;
  end: number;
}

export interface PostListWithCategoryAPI {
  schoolId: string;
  categoryId: number;
  accessToken: string;
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
