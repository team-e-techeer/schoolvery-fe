/* eslint-disable import/extensions */
import Header from '../../../components/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, Input, InputOverText, JoinBlock } from './RegisterPage.style';
import Button from '../../../components/Button';
import { css } from '@emotion/react';
import { useState } from 'react';

function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    id: '',
    pw: '',
    pwConfirm: '',
    email: '',
    school: '',
  });
  return (
    <>
      <Header
        title="Sign Up"
        Left={() => (
          <IconWrapper>
            <button onClick={() => console.log('hi')}>
              <LeftIcon size={30} color="#fff" />
            </button>
          </IconWrapper>
        )}
      />
      <JoinBlock>
        <InputOverText>아이디</InputOverText>
        <Input autoFocus={true} autoComplete="off"></Input>
        <InputOverText>비밀번호</InputOverText>
        <Input autoComplete="off" type={'password'}></Input>
        <InputOverText>비밀번호 확인</InputOverText>
        <Input type={'password'}></Input>
        <InputOverText>이메일</InputOverText>
        <Input type={'email'}></Input>
        <InputOverText>학교</InputOverText>
        <Input></Input>
      </JoinBlock>
      <Button
        css={css`
          margin-top: 3rem;
        `}
        width={80}
        buttonId="login-button"
      >
        회원가입
      </Button>
    </>
  );
}

export default RegisterPage;
