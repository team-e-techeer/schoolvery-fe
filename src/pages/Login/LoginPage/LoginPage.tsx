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
  InputForm,
} from './LoginPage.styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import Logo from '../../../assets/img/Logo.png';
import LogoText from '../../../assets/img/LogoText.png';

import { useLoginMutation } from '@/hooks/query/user/useLogin';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginState } from '@/atoms/Login/loginState';
import { userState } from '@/atoms/user/userState';
import { css } from '@emotion/react';
import colors from '@/constants/colors';

function LoginPage() {
  const navigate = useNavigate();
  const loginRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const setUserState = useSetRecoilState(userState);

  const { email, password } = loginInfo;
  const { mutate, data, isSuccess } = useLoginMutation();

  useEffect(() => {
    data && setUserState(prev => ({ ...prev, accessToken: data.accessToken, email: data.email }));
    isSuccess && navigate('/');
  }, [data]);

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
        <InputForm>
          <input
            autoComplete="email"
            placeholder=" "
            onChange={onChange}
            id="input-email"
            name="email"
            value={email}
            data-testid="email-input"
            type={'email'}
          />
          <label htmlFor="title">이메일 주소</label>
        </InputForm>

        <AlertText id="email" data-testid="id-alert">
          입력란이 비어 있습니다
        </AlertText>
        <InputForm>
          <input
            autoComplete="current-password"
            placeholder=" "
            type="password"
            onChange={onChange}
            id="input-pw"
            name="password"
            value={password}
            data-testid="pw-input"
          />
          <label htmlFor="title">비밀번호</label>
        </InputForm>
        <AlertText id="password" data-testid="pw-alert">
          입력란이 비어 있습니다
        </AlertText>
        <Button buttonId="login-button" data-testid="login-button">
          로그인
        </Button>
        {/* <LinkText to="">아이디/비밀번호 찾기</LinkText> */}
        <LinkText
          css={css`
            color: ${colors.orange900};
          `}
          to="/register"
        >
          아직 회원이 아니신가요? 회원가입 하기
        </LinkText>
      </InputBlock>

      <UnderLogo src={LogoText} alt="스쿨버리 로고 이미지" />
    </>
  );
}

export default LoginPage;
