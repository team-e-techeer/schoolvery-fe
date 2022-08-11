/* eslint-disable import/extensions */
import BottomNavigation from '@/components/BottomNavigation';
import Header from '@/components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IoMdSettings as SettingIcon } from 'react-icons/io';
import { FaRegListAlt as EnterIcon, FaPen as PenIcon } from 'react-icons/fa';
import { AiFillNotification as NotificationIcon } from 'react-icons/ai';
import {
  IconWrapper,
  ProfileBlock,
  BoardBlock,
  ProfileInfo,
  ProfileSetting,
  BoardBtn,
  ImgBlock,
  GreyLine,
  BlankView,
} from './MyInfoPage.styles';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';
import Dog from '../../assets/img/dog.png';
import colors from '@/constants/colors';

function PersonalPage() {
  const user = useRecoilValue(userState);
  const [userInfo, setUserInfo] = useRecoilState(userState);
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
        <ImgBlock>
          <img src={Dog}></img>
        </ImgBlock>
        <ProfileInfo>
          <p style={{ fontWeight: 'bold' }}>{userInfo.nickname}</p>
          <br />

          <p>{userInfo.email}</p>
        </ProfileInfo>
        <ProfileSetting>
          <Link to="/myProfile">
            <SettingIcon size={33} color={colors.grey500} />
          </Link>
        </ProfileSetting>
      </ProfileBlock>
      <GreyLine />
      <BoardBlock>
        <BlankView />
        <BoardBtn to="/chat">
          <EnterIcon size={33} color={colors.grey100} />
          <p>참여 이력</p>
        </BoardBtn>
        <BlankView />
        <BoardBtn to="/myWriting">
          <PenIcon size={33} color={colors.grey100} />
          <p>내가 쓴 글</p>
        </BoardBtn>
        <BlankView />
        <BoardBtn to="/notification">
          <NotificationIcon size={33} color={colors.grey100} />
          <p>공지사항</p>
        </BoardBtn>
        <BlankView />
      </BoardBlock>
      <BottomNavigation />
    </>
  );
}

export default PersonalPage;
