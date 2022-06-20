/* eslint-disable import/extensions */
import AlarmList from '@/components/Alarm/AlarmList';
import Header from '@/components/Header/Header';
import colors from '@/constants/colors';
import { MdNotificationsActive as AlarmIcon } from 'react-icons/md';
import { BlankView, IconWrapper, VerticalLine } from './AlarmPage.styles';
import { FiArrowLeft as LeftIcon } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { LeftIconWrapper } from '@/GlobalStyle';
export default function AlarmPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header
        Left={() => (
          <button css={LeftIconWrapper} onClick={() => navigate(-1)}>
            <LeftIcon color={colors.white} size={30} />
          </button>
        )}
      />
      <IconWrapper>
        <AlarmIcon size={50} color={colors.grey400} />
        <span>알람</span>
      </IconWrapper>
      <VerticalLine />

      <AlarmList storeName="BBQ 치킨" description="hi" />
      <AlarmList storeName="피자헛" description="hi" />
      <AlarmList storeName="BBQ 치킨" description="hi" />
      <AlarmList storeName="BBQ 치킨" description="hi" />
      <AlarmList storeName="피자헛" description="hi" />
      <AlarmList storeName="BBQ 치킨" description="hi" />
      <AlarmList storeName="BBQ 치킨" description="hi" />
      <AlarmList storeName="피자헛" description="hi" />
      <AlarmList storeName="BBQ 치킨" description="hi" />
      <BlankView />
    </>
  );
}
