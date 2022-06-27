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
import React, { useCallback, useRef, useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import Logo from '../../../assets/img/Logo.png';
import LogoText from '../../../assets/img/LogoText.png';
interface LoginInfo {
  id: string;
  pw: string;
  [prop: string]: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const loginRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    id: '',
    pw: '',
  });

  const { id, pw } = loginInfo;

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitItems = ['id', 'pw'];
    submitItems.forEach(item => {
      if (loginInfo[item].length) {
        const select = loginRef.current?.querySelector<HTMLElement>(`#${item}-alert`) as HTMLElement;
        select.style.display = 'block';
      }
    });
  }, []);

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
          autoComplete="username"
          placeholder="아이디"
          onChange={onChange}
          id="input-id"
          name="id"
          value={id}
          data-testid="id-input"
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
          name="pw"
          value={pw}
          data-testid="pw-input"
        />
        <AlertText id="pw" data-testid="pw-alert">
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
