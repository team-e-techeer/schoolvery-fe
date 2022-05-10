import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { AiTwotoneHome, AiOutlineHome, AiOutlineEllipsis } from 'react-icons/ai';
import { RiWechat2Fill, RiWechat2Line } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti';
import { Link, useLocation } from 'react-router-dom';

const iconWrapper = css`
  cursor: pointer;
  width: 3rem;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const selectIconSize = 100;
const iconSize = 30;

export default function BottomNavigation() {
  const { pathname } = useLocation();

  return (
    <footer
      css={css`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 7rem;
        z-index: 777;
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-content: center;
        background-color: ${colors.grey200};
      `}
    >
      <Link to="/" css={iconWrapper} data-testid="link-home">
        {pathname === '/' ? (
          <AiTwotoneHome data-testid="icon-home" color={colors.mainColor} />
        ) : (
          <AiOutlineHome size={iconSize} />
        )}
      </Link>
      <Link to="/chat" css={iconWrapper} data-testid="link-chat">
        {pathname === '/chat' ? (
          <RiWechat2Fill size={selectIconSize} color={colors.mainColor} />
        ) : (
          <RiWechat2Line size={iconSize} />
        )}
      </Link>
      <Link to="/writing" css={iconWrapper}>
        {pathname === '/writing' ? (
          <TiPlus size={selectIconSize} color={colors.mainColor} />
        ) : (
          <TiPlus size={iconSize} />
        )}
      </Link>
      <Link to="/myInfo" css={iconWrapper}>
        {pathname === '/myInfo' ? (
          <AiOutlineEllipsis size={selectIconSize} color={colors.mainColor} />
        ) : (
          <AiOutlineEllipsis size={iconSize} />
        )}
      </Link>
    </footer>
  );
}
