/* eslint-disable import/extensions */
import Header from '../../../components/Header';

import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, Input, Title, LinkText, InputBlock } from './LoginPage.style';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../../atoms/loginState';
import { useCallback, useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
function LoginPage() {
  const navigate = useNavigate();

  const login = useRecoilValue(loginState);
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = loginInfo;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  return (
    <>
      <Header
        Left={() => (
          <IconWrapper>
            <button onClick={() => console.log('hi')}>
              <LeftIcon size={30} color="#fff" />
            </button>
          </IconWrapper>
        )}
      />
      <Title>스쿨버리</Title>
      <InputBlock>
        <Input autoComplete="username" placeholder="아이디" onChange={onChange} id="input-id" name="id" value={id} />
        <Input
          autoComplete="current-password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          id="input-pw"
          name="pw"
          value={pw}
        />
        <Button buttonId="login-button">로그인</Button>
      </InputBlock>
      <LinkText to="">아이디/비밀번호 찾기</LinkText>
      <LinkText to="register">아직 회원이 아니신가요? 회원가입 하기</LinkText>
    </>
  );
}

export default LoginPage;
