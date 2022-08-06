export interface PostData {
  title: string;
  schoolId: string;
  userId: string;
  categoryId: string;
  location: string;
  peopleNum: number;
  deliveryFee: number;
  deadline: string;
  content: string;
  store: string;
  id?: number;
}

export interface WritingAPI {
  postData: PostData;
  accessToken: string;
}

export interface WritingAPIResponse {
  id: number;
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

/**
 * @interface OnePostInformationAPI
 * 게시물 하나 받아오기 API
 */
export interface OnePostInformationAPI {
  postId: number;
  accessToken: string;
}

/**
 * @interface PutPostInformationAPI
 * 게시물 수정 API
 */
export interface PutPostInformationAPI {
  postData: PostData;
  accessToken: string;
}

/**
 * @interface DeleteOnePostAPI
 * 게시물 삭제 API
 */
export interface DeleteOnePostAPI {
  postId: number;
  accessToken: string;
}
