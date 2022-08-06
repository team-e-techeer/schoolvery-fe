import { WritingAPIResponse } from '@/interface/writing';
import { WritingInfo } from '@/pages/Writing/WritingPage';
import { useEffect, useState } from 'react';
/**
 * @interface HookParams
 */
enum PageMode {
  Write = 'Write',
  Fix = 'Fix',
}

interface HookParams {
  search: string;
  data: WritingAPIResponse | undefined;
  setWritingInfo: React.Dispatch<React.SetStateAction<WritingInfo>>;
  setCategoryID: React.Dispatch<React.SetStateAction<string>>;
}

type HookReturn = PageMode;

export function useCheckWritingMode({
  search,
  data,
  setWritingInfo,
  setCategoryID,
}: HookParams): ReadonlyArray<HookReturn> {
  const [pageMode, setPageMode] = useState<PageMode>(PageMode.Write);
  useEffect(() => {
    if (search.length) {
      setPageMode(PageMode.Fix);
      if (data) {
        const { content, deliveryFee, location, peopleNum, store, title, categoryId } = data;
        setWritingInfo(prevData => ({
          ...prevData,
          content,
          deliveryFee,
          location,
          peopleNum,
          store,
          title,
        }));
        setCategoryID(categoryId);
      }
      return;
    }
    setPageMode(PageMode.Write);
  }, [search, data]);
  return [pageMode];
}
