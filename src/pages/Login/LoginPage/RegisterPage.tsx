/* eslint-disable import/extensions */
import Header from '../../../components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { AlertText, BlankInput, IconWrapper, Input, InputField, InputOverText, JoinBlock } from './RegisterPage.styles';
import Button from '../../../components/Button';
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { UnderLogo } from './LoginPage.styles';
import LogoText from '../../../assets/img/LogoText.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { schoolSearchState } from '@/atoms/Login/schoolSearchState';
import { registerState } from '@/atoms/Login/registerState';
import { useRegisterMutation } from '@/hooks/query/user/useRegister';

function RegisterPage() {
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useRecoilState(registerState);
  const [submitOK, setSubmit] = useState(true);
  const schoolInfo = useRecoilValue(schoolSearchState);
  const { name, nickname, id, password, passwordConfirm, phoneNum, email, school } = registerInfo;
  const { mutate, data, isSuccess } = useRegisterMutation();
  useEffect(() => {
    setRegisterInfo({ ...registerInfo, school: schoolInfo.schoolName });
  }, [schoolInfo.schoolName]);

  useEffect(() => {
    console.log(isSuccess, data);
    isSuccess && navigate('/login');
  }, [data, isSuccess]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['nickname', 'password', 'passwordConfirm', 'phone', 'email', 'school'];
      // submitItems.forEach(item => {
      //   if (!registerInfo[item].length) {
      //     setSubmit(false);
      //     const select = spanRef.current?.querySelector<HTMLElement>(`#${item}`);
      //     if (select && !registerInfo[item]) select.style.display = 'block';
      //   }
      // });
      mutate({ email, name, nickname, password, phoneNum, profileImageUrl: '1', schoolId: schoolInfo.schoolId });
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
      !registerInfo.schoolName && useCheckBlank({ e, ref: spanRef, state: registerInfo });
      onCheckHaveSamePassword();
      onCheckEmail();
    },
    [registerInfo, spanRef]
  );

  const onCheckEmail = useCallback(() => {
    if (!registerInfo.email) return;
    const email = registerInfo.email;
    const select = spanRef.current?.querySelector<HTMLElement>('#email') as HTMLElement;
    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regEmail.test(email)) return (select.style.display = 'block');
    select.style.display = 'none';
  }, [registerInfo.email]);

  const onCheckHaveSamePassword = useCallback(() => {
    const select = spanRef.current?.querySelector<HTMLElement>('#passwordConfirm') as HTMLElement;

    if (isEqualPassword(registerInfo.password, registerInfo.passwordConfirm)) return (select.style.display = 'none');
    select.style.display = 'block';
  }, [spanRef, registerInfo]);

  const isEqualPassword = useCallback(
    (password: string, passwordConfirm: string) => (password === passwordConfirm ? true : false),
    []
  );

  return (
    <>
      <Header
        Left={() => (
          <IconWrapper>
            <Link to="/login">
              <LeftIcon size={30} color="#fff" />
            </Link>
          </IconWrapper>
        )}
      />
      <JoinBlock ref={spanRef} onBlur={onCheckBlank} onSubmit={onSubmit}>
        <BlankInput name="id" type="username" />
        <BlankInput type="password" />
        <InputField>
          <InputOverText>??????</InputOverText>
          <Input
            value={name || ''}
            name="name"
            onChange={onChange}
            autoFocus={true}
            autoComplete="off"
            data-testid="name-input"
          />
          <AlertText id="name" data-testid="name-alert">
            ???????????? ?????? ????????????
          </AlertText>
        </InputField>
        <InputField>
          <InputOverText>?????????</InputOverText>
          <Input value={nickname || ''} name="nickname" onChange={onChange} autoComplete="off" data-testid="id-input" />
          <AlertText id="nickname" data-testid="id-alert">
            ???????????? ?????? ????????????
          </AlertText>
        </InputField>
        <InputField>
          <InputOverText>????????????</InputOverText>
          <Input
            value={password || ''}
            name="password"
            onChange={onChange}
            autoComplete="off"
            type="password"
            data-testid="password-input"
          />
          <AlertText id="password">???????????? ?????? ????????????</AlertText>
        </InputField>
        <InputField>
          <InputOverText>???????????? ??????</InputOverText>
          <Input
            value={passwordConfirm || ''}
            name="passwordConfirm"
            autoComplete="off"
            onChange={onChange}
            type="password"
            data-testid="password-differ"
          />
          <AlertText id="passwordConfirm" data-testid="password-alert">
            ??????????????? ???????????? ????????????
          </AlertText>
        </InputField>
        <InputField>
          <InputOverText>?????????</InputOverText>
          <Input value={phoneNum || ''} name="phoneNum" onChange={onChange} data-testid="phoneNum-input" />
          <AlertText id="phoneNum">????????? ????????? ????????? ????????? ?????????</AlertText>
        </InputField>
        <InputField>
          <InputOverText>?????????</InputOverText>
          <Input value={email || ''} name="email" onChange={onChange} type={'email'} data-testid="email-input" />
          <AlertText id="email">????????? ????????? ?????? ???????????????</AlertText>
        </InputField>
        <InputField onClick={() => navigate('/register/schoolSearch')}>
          <InputOverText>??????</InputOverText>
          <Input readOnly={true} value={school || ''} name="school" data-testid="school-input" />
          <AlertText id="school">???????????? ?????? ????????????</AlertText>
        </InputField>
        <Button
          css={css`
            margin-top: 3rem;
          `}
          buttonId="login-button"
          type="submit"
          name="registerBtn"
        >
          ????????????
        </Button>
      </JoinBlock>
      <UnderLogo src={LogoText} alt="???????????? ?????? ?????????" />
    </>
  );
}

export default RegisterPage;
