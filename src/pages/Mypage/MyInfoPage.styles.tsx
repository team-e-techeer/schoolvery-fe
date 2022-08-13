import styled from '@emotion/styled';
import colors from '../../constants/colors';
import { Link } from 'react-router-dom';

export const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2rem;
  .button {
    border: none;
    cursor: pointer;
    padding: 1rem;
    &:focus {
      outline: none;
    }
  }
`;

export const ProfileBlock = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  @media (min-width: 500px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ImgBlock = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  img {
    border-radius: 50%;

    width: 8rem;
    height: 8rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  p {
    margin-left: 2rem;
  }
`;

export const ProfileSetting = styled.button`
  display: flex;
  flex: 1;
`;

export const GreyLine = styled.div`
  width: 100%;
  border-bottom: 0.8px solid #878787;
  margin: 3rem 0;
`;

export const BoardBlock = styled.div`
  display: flex;

  margin: 0 auto;
  @media (min-width: 500px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const BoardBtn = styled(Link)`
  display: flex;
  flex: 1;
  background-color: ${colors.mainColor};
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-radius: 1.3rem;

  margin: 0 1.5rem;
  padding: 1rem;
  -webkit-font-smoothing: antialiased;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${colors.orange600};
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${colors.grey100};
    font-weight: 600;
  }
`;

export const BlankView = styled.div`
  display: flex;
  flex: 0.2;
`;
