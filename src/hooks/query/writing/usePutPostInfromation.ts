import type { PutPostInformationAPI } from '@/interface/writing';
import { putPostInformationAPI } from '@/lib/api/writing/writing';
import { useMutation } from 'react-query';

export const usePutPostInformation = () => {
  return useMutation((fixInfo: PutPostInformationAPI) => putPostInformationAPI(fixInfo));
};
