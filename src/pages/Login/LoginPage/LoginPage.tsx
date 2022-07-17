/* eslint-disable import/extensions */
import Header from '../../../components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import {
  IconWrapper,
  Input,
  LinkText,
  InputBlock,
  AlertText,
  LogoImage,
  LogoWrapper,
  UnderLogo,
} from './LoginPage.styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import Logo from '../../../assets/img/Logo.png';
import LogoText from '../../../assets/img/LogoText.png';

import { useLoginMutation } from '@/hooks/query/useLogin';
import { useRecoilState } from 'recoil';
import { loginState } from '@/atoms/Login/loginState';

function LoginPage() {
  const navigate = useNavigate();
  const loginRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);

  const { email, password } = loginInfo;
  const { mutate, data, isSuccess } = useLoginMutation();

  useEffect(() => {
    isSuccess && navigate('/');
  }, [isSuccess]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['email', 'password'];
      mutate({ email, password });

      // submitItems.forEach(item => {
      //   if (loginInfo[item].length) {
      //     const select = loginRef.current?.querySelector<HTMLElement>(`#${item}-alert`) as HTMLElement;
      //     select.style.display = 'block';
      //   }
      // });
    },
    [loginInfo]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const onCheckBlank = useCallback(
    (e: React.FocusEvent<HTMLFormElement, Element>) => {
      useCheckBlank({ e, ref: loginRef, state: loginInfo });
    },
    [loginInfo]
  );

  return (
    <>
      <Header
        Left={() => (
          <IconWrapper data-testid="logo-prev">
            <button onClick={() => navigate('/')}>
              <LeftIcon size={30} color="#fff" />
            </button>
          </IconWrapper>
        )}
      />
      <LogoWrapper>
        <LogoImage src={Logo} alt="토끼가 오토바이를 타고 있는 로고 이미지" />
      </LogoWrapper>
      <InputBlock ref={loginRef} onBlur={onCheckBlank} onSubmit={onSubmit}>
        <Input
          autoComplete="email"
          placeholder="이메일"
          onChange={onChange}
          id="input-email"
          name="email"
          value={email}
          data-testid="email-input"
          type={'email'}
        />
        <AlertText id="id" data-testid="id-alert">
          입력란이 비어 있습니다
        </AlertText>
        <Input
          autoComplete="current-password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          id="input-pw"
          name="password"
          value={password}
          data-testid="pw-input"
        />
        <AlertText id="password" data-testid="pw-alert">
          입력란이 비어 있습니다
        </AlertText>
        <Button buttonId="login-button" data-testid="login-button">
          로그인
        </Button>
      </InputBlock>
      <LinkText to="">아이디/비밀번호 찾기</LinkText>
      <LinkText to="/register">아직 회원이 아니신가요? 회원가입 하기</LinkText>
      <UnderLogo src={LogoText} alt="스쿨버리 로고 이미지" />
    </>
  );
}

export default LoginPage;
