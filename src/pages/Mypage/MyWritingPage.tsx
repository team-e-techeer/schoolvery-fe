import BottomNavigation from '@/components/BottomNavigation';
import Header from '@/components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, TopBlock} from './MyWritingPage.styles';
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
      <Post title="James" location="jamsil" peopleNum="3" time="12:00" fee="3000"/>
      <BottomNavigation />
    </>
  );
}

export default PersonalPage;
