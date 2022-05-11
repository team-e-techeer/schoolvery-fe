import BottomNavigation from '@/components/BottomNavigation';
import JoinSummary from '@/components/JoinSummary';
import Header from '../components/Header';

function MainPage() {
  return (
    <>
      <Header />
      <>
        <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
      </>
      <BottomNavigation />
    </>
  );
}

export default MainPage;
