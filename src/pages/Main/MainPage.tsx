import BottomNavigation from '@/components/BottomNavigation';
import Category from '@/components/Category/Category';
import SearchInput from '@/components/Input/SearchInput';
import JoinSummary from '@/components/Join/JoinSummary';
import Header from '../../components/Header/Header';
import Ch from '../../assets/img/ch.png';
import Chicken from '../../assets/img/Chicken.png';
import Jp from '../../assets/img/jp.png';
import Ko from '../../assets/img/ko.png';
import { useState } from 'react';
import type { ImgInfo } from '../../components/Category/Category';
function MainPage() {
  const [imageInfo] = useState<ImgInfo[]>([
    { path: '/category/한식', src: Ko, name: '한식' },
    { path: '/category/중식', src: Ch, name: '중식' },
    { path: '/category/일식', src: Jp, name: '일식' },
    { path: '/category/치킨', src: Chicken, name: '치킨' },
    { path: '/category/한식', src: Ko, name: '한식' },
    { path: '/category/중식', src: Ch, name: '중식' },
    { path: '/category/일식', src: Jp, name: '일식' },
    { path: '/category/치킨', src: Chicken, name: '치킨' },
  ]);
  return (
    <>
      <Header title="OO 대학교" Right={() => <></>} />
      <>
        <SearchInput isLinking={true} />
        <Category imageInfo={imageInfo} />
        <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
      </>
      <BottomNavigation />
    </>
  );
}

export default MainPage;
