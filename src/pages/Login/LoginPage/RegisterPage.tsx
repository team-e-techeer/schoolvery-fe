/* eslint-disable import/extensions */
import Header from '../../../components/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { AlertText, IconWrapper, Input, InputField, InputOverText, JoinBlock } from './RegisterPage.styles';
import Button from '../../../components/Button';
import { css } from '@emotion/react';
import { useCallback, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
interface RegisterInfo {
  id: string;
  pw: string;
  pwConfirm: string;
  email: string;
  school: string;
  [prop: string]: string;
}

function RegisterPage() {
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
    id: '',
    pw: '',
    pwConfirm: '',
    email: '',
    school: '',
  });

  const { id, pw, pwConfirm, email, school } = registerInfo;

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['id', 'pw', 'pwConfirm', 'email', 'school'];
      submitItems.forEach(item => {
        if (!registerInfo[item].length) {
          const select = spanRef.current?.querySelector<HTMLElement>(`#${item}`);
          if (select && !registerInfo[item]) select.style.display = 'block';
        }
      });
    },
    [registerInfo]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setRegisterInfo({
        ...registerInfo,
        [name]: value,
      });
    },
    [registerInfo]
  );

  const onCheckBlank = useCallback(
    (e: React.FocusEvent<HTMLFormElement, Element>) => {
      const select = spanRef.current?.querySelector<HTMLElement>(`#${e.target.name}`);
      if (select) {
        if (!registerInfo[e.target.name]) select.style.display = 'block';
        else select.style.display = 'none';
      }
    },
    [registerInfo, spanRef]
  );

  return (
    <>
      <Header
        title="Sign Up"
        Left={() => (
          <IconWrapper>
            <Link to="/login">
              <LeftIcon size={30} color="#fff" />
            </Link>
          </IconWrapper>
        )}
      />
      <JoinBlock ref={spanRef} onBlur={onCheckBlank} onSubmit={onSubmit}>
        <InputField>
          <InputOverText>아이디</InputOverText>
          <Input value={id} name="id" onChange={onChange} autoFocus={true} autoComplete="off" data-testid="id-input" />
          <AlertText id="id" data-testid="id-alert">
            입력란이 비어 있습니다
          </AlertText>
        </InputField>
        <InputField>
          <InputOverText>비밀번호</InputOverText>
          <Input value={pw} name="pw" onChange={onChange} autoComplete="off" type={'password'} data-testid="pw-input" />
          <AlertText id="pw">입력란이 비어 있습니다</AlertText>
        </InputField>
        <InputField>
          <InputOverText>비밀번호 확인</InputOverText>
          <Input
            value={pwConfirm}
            name="pwConfirm"
            onChange={onChange}
            type={'password'}
            data-testid="password-input"
          />
          <AlertText id="pwConfirm">입력란이 비어 있습니다</AlertText>
        </InputField>
        <InputField>
          <InputOverText>이메일</InputOverText>
          <Input value={email} name="email" onChange={onChange} type={'email'} data-testid="email-input" />
          <AlertText id="email">입력란이 비어 있습니다</AlertText>
        </InputField>
        <InputField>
          <InputOverText>학교</InputOverText>
          <Input value={school} name="school" onChange={onChange} data-testid="school-input" />
          <AlertText id="school">입력란이 비어 있습니다</AlertText>
        </InputField>
        <Button
          css={css`
            margin-top: 3rem;
          `}
          buttonId="login-button"
          type="submit"
          name="registerBtn"
        >
          회원가입
        </Button>
      </JoinBlock>
    </>
  );
}

export default RegisterPage;
