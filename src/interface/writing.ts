export interface WritingAPI {
  postData: {
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
  };
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
