import BottomNavigation from '@/components/BottomNavigation';
import Header from '@/components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, TopBlock} from './MyWritingPage.styles';
import { Link } from 'react-router-dom';
import Post from '../../assets/img/post.png';

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
      <img src ={Post}/>
      </TopBlock>
      <BottomNavigation />
    </>
  );
}

export default PersonalPage;
