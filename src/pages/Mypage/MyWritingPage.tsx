/* eslint-disable import/extensions */
import BottomNavigation from '@/components/BottomNavigation';
import Header from '@/components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, TopBlock, PostBlock } from './MyWritingPage.styles';
import { Link } from 'react-router-dom';
import PostI from '../../assets/img/post.png';
import PostDetail from '../../components/Post/PostDetail';
import JoinDetail from '@/components/Join/JoinDetail';
import MyPostDetail from '@/components/Post/MyPostDetail';

function PersonalPage() {
  return (
    <>
      <Header
        Left={() => (
          <IconWrapper>
            <Link to="/">
              <LeftIcon size={30} color="#fff" />
            </Link>
          </IconWrapper>
        )}
      />
      <TopBlock>
        <img src={PostI} />
      </TopBlock>
      <PostBlock>
        <MyPostDetail
          shopName="BBQ 치킨"
          categoryName="치킨"
          schoolName="00 대학교"
          time={{ left: Date.now(), post: Date.now() }}
          payment={3000}
          people={{ current: 3, total: 7 }}
        />
        <MyPostDetail
          shopName="BBQ 치킨"
          categoryName="치킨"
          schoolName="00 대학교"
          time={{ left: Date.now(), post: Date.now() }}
          payment={3000}
          people={{ current: 3, total: 7 }}
        />
        <MyPostDetail
          shopName="BBQ 치킨"
          categoryName="치킨"
          schoolName="00 대학교"
          time={{ left: Date.now(), post: Date.now() }}
          payment={3000}
          people={{ current: 3, total: 7 }}
        />
      </PostBlock>
      <BottomNavigation />
    </>
  );
}

export default PersonalPage;
