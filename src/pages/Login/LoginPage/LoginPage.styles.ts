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
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const Input = styled.input`
  display: flex;
  background-color: #e7f0fe;

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

export const InputForm = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 2.5rem;
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.mainColor};
    border-radius: 0.7rem;
    color: ${colors.black};

    outline: none;
    /* padding: 1.25rem; */
    padding: 1.3rem;
    background: none;

    &:hover {
      border-color: ${colors.subColor};
    }

    &:focus {
      border-color: ${colors.mainColor};
    }
  }

  & label {
    position: absolute;
    left: 1rem;
    top: 1.3rem;
    padding: 0.4rem;
    border-radius: 0.7rem;
    color: ${colors.grey100};
    cursor: text;
    transition: top 300ms linear, left 300ms linear, font-size 300ms linear;
    background-color: ${colors.subColor};
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  input:-webkit-autofill ~ label {
    top: -1rem;
    font-size: 1rem;
    left: 0.8rem;
  }
`;
