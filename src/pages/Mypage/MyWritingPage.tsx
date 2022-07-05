import BottomNavigation from '@/components/BottomNavigation';
import Header from '@/components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, TopBlock, PostBlock} from './MyWritingPage.styles';
import { Link } from 'react-router-dom';
import PostI from '../../assets/img/post.png';
import Post from '../../components/Post/Post';

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
        )}/>
      <TopBlock>
      <img src ={PostI}/>
      </TopBlock>
      <PostBlock>
      <Post title="피자스쿨" location="잠실점" peopleNum="3" time="12:00" fee="3000"/>
      <Post title="피자스쿨" location="잠실점" peopleNum="3" time="12:00" fee="3000"/>
      <Post title="피자스쿨" location="잠실점" peopleNum="3" time="12:00" fee="3000"/>
      </PostBlock>
      <BottomNavigation />
    </>
  );
}

export default PersonalPage;
