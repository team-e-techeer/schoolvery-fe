import BottomNavigation from '@/components/BottomNavigation';
import Input from '@/components/Input';
import JoinSummary from '@/components/JoinSummary';
import Header from '../../components/Header';

function MainPage() {
  return (
    <>
      <Header title="OO 대학교" Right={() => <></>} />
      <>
        <Input isLinking={true} />
        <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
      </>
      <BottomNavigation />
    </>
  );
}

export default MainPage;
