import styled from '@emotion/styled';
import colors from '../../../constants/colors';
import { Link } from 'react-router-dom';

export const IconWrapper = styled.div`
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

export const LogoWrapper = styled.h2`
  display: flex;
  flex-direction: row;
`;

export const LogoImage = styled.img`
  display: flex;
  margin: 0 auto;
  max-width: 30rem;
  max-height: 30rem;
`;

export const UnderLogo = styled.img`
  display: flex;
  width: 20rem;
  height: 15rem;
  margin: 0rem auto;
  object-fit: cover;
  z-index: -1;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
`;

export const InputBlock = styled.form`
  width: 80%;
  margin: auto;
`;

export const Input = styled.input`
  display: flex;
  background-color: #e7f0fe;
  margin-top: 2rem;
  margin-bottom: 3rem;
  border-radius: 0.7rem;
  width: 100%;
  padding: 1.5rem;
  font-size: 1.5rem;
  ::placeholder {
    opacity: 0.6;
    font-size: 1.5rem;
  }
  :focus {
    background-color: ${colors.blue100};
  }
  :nth-of-type(1) {
    margin-top: 0;
  }
`;

export const LinkText = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  text-decoration: none;
  margin-top: 1.5rem;
  margin-right: 10%;
  color: #646363;
  font-size: 1.2rem;
  z-index: 999;
`;

export const AlertText = styled.span`
  display: none;
  color: ${colors.red500};
  font-size: 1.3rem;
  margin-top: -1.5rem;
  margin-bottom: 1rem;
`;
