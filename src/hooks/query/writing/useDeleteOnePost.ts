import type { DeleteOnePostAPI } from '@/interface/writing';
import { deleteOnePostAPI } from '@/lib/api/writing/writing';
import { useMutation } from 'react-query';

export const useDeleteOnePost = (deleteInfo: DeleteOnePostAPI) => {
  return useMutation(() => deleteOnePostAPI(deleteInfo));
};
