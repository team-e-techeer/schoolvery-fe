import BottomNavigation from '@/components/BottomNavigation';
import Header from '@/components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, ProfileBlock, BoardBlock, ProfileImg, ProfileInfo, ProfileSetting, BoardBtn} from './MyInfoPage.styles';
import { Link } from 'react-router-dom';
import Participation from '../../assets/img/Participation.png';
import Post from '../../assets/img/post.png';
import Notice from '../../assets/img/notice.png';
import Setting from '../../assets/img/settings.png';
import Dog from '../../assets/img/dog.png';

function PersonalPage() {
  return (
    <>
      <Header
      title="마이 페이지"
        Left={() => (
          <IconWrapper>
            <Link to="/">
              <LeftIcon size={30} color="#fff" />
            </Link>
          </IconWrapper> 
          
        )}
      />
      <ProfileBlock>
        <ProfileImg src={Dog}></ProfileImg>
        <ProfileInfo>
          <p style={{fontWeight: 'bold'}}>아이디</p>
          <br/>
          <p style={{display : 'inline-block', color: '#878787'}}>스탠포드</p>
          <p style={{marginLeft:'2%', display : 'inline-block', color: '#878787'}}>대학교</p>
          <br/>
          <p><u>standford@gmail.com</u></p>
        </ProfileInfo>
        <ProfileSetting><Link to="/"><img src={Setting}/></Link></ProfileSetting>
        
      </ProfileBlock>
      <BoardBlock>
      <BoardBtn><Link to="/chat"><img src ={Participation}/></Link></BoardBtn>
      <BoardBtn><Link to="/myWriting"><img src ={Post}/></Link></BoardBtn>
      <BoardBtn><Link to="/"><img src ={Notice}/></Link></BoardBtn>
        </BoardBlock>
      <BottomNavigation />
    </>
  );
}

export default PersonalPage;