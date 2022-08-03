import { WritingAPI } from '@/interface/writing';
import { postWritingAPI } from '@/lib/api/writing/writing';
import { useMutation } from 'react-query';

export const useWritingMutation = () => {
  return useMutation((writingInfo: WritingAPI) => postWritingAPI(writingInfo));
};
