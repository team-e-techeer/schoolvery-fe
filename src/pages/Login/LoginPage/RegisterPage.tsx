/* eslint-disable import/extensions */
import Header from '../../../components/Header/Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import {
  AlertText,
  BlankInput,
  IconWrapper,
  Input,
  InputField,
  InputForm,
  InputOverText,
  JoinBlock,
} from './RegisterPage.styles';
import Button from '../../../components/Button';
import { css } from '@emotion/react';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { UnderLogo } from './LoginPage.styles';
import LogoText from '../../../assets/img/LogoText.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { schoolSearchState } from '@/atoms/Login/schoolSearchState';
import { registerState } from '@/atoms/Login/registerState';
import { useRegisterMutation } from '@/hooks/query/user/useRegister';
import { faker } from '@faker-js/faker';
import axios from 'axios';

function RegisterPage() {
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useRecoilState(registerState);
  const [submitOK, setSubmit] = useState(true);
  const schoolInfo = useRecoilValue(schoolSearchState);
  const { name, nickname, id, password, passwordConfirm, phoneNum, email, school, profileImageUrl } = registerInfo;
  const { mutate, data, isSuccess } = useRegisterMutation();
  const [img, setImg] = useState<FormData>(new FormData());
  useEffect(() => {
    setRegisterInfo({ ...registerInfo, school: schoolInfo.schoolName });
  }, [schoolInfo.schoolName]);

  useEffect(() => {
    isSuccess && navigate('/login');
  }, [data, isSuccess]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['nickname', 'password', 'passwordConfirm', 'phone', 'email', 'school', 'profileImg'];

      const data = new FormData();
      const requestData = {
        email,
        name,
        nickname,
        password,
        phoneNum,
        // profileImageUrl: faker.image.cats(),
        schoolId: schoolInfo.schoolId,
      };
      img.append('request', new Blob([JSON.stringify(requestData)], { type: 'application/json' }));

      img && mutate(img);
    },
    [registerInfo, img]
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

  function encodeBase64ImageFile(image: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      // convert the file to base64 text
      reader.readAsDataURL(image);
      // on reader load somthing...
      reader.onload = event => {
        resolve(event.target?.result) as unknown as string;
        console.log(event.target?.result);
      };
      reader.onerror = error => {
        reject(error);
      };
    });
  }

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const formData = new FormData();

      formData.append('file', file);

      setImg(formData);

      // encodeBase64ImageFile(file).then(data => {
      //   setImg(String(data));
      // });

      // setImg(file);
    }
  };

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
      <JoinBlock encType="multipart/form-data" ref={spanRef} onBlur={onCheckBlank} onSubmit={onSubmit}>
        <BlankInput name="id" type="username" />
        <BlankInput type="password" />
        <InputField>
          <InputForm>
            <input
              value={name || ''}
              name="name"
              onChange={onChange}
              autoFocus={true}
              autoComplete="off"
              data-testid="name-input"
              placeholder=" "
            />
            <label htmlFor="title">이름</label>
          </InputForm>
          <AlertText id="name" data-testid="name-alert">
            입력란이 비어 있습니다
          </AlertText>
        </InputField>
        <InputField>
          <InputForm>
            <input
              value={nickname || ''}
              name="nickname"
              onChange={onChange}
              autoComplete="off"
              data-testid="id-input"
              placeholder=" "
            />
            <label htmlFor="title">닉네임</label>
          </InputForm>

          <AlertText id="nickname" data-testid="id-alert">
            입력란이 비어 있습니다
          </AlertText>
        </InputField>
        <InputField>
          <InputForm>
            <input
              value={password || ''}
              name="password"
              onChange={onChange}
              autoComplete="off"
              type="password"
              data-testid="password-input"
              placeholder=" "
            />
            <label htmlFor="title">비밀번호</label>
          </InputForm>

          <AlertText id="password">입력란이 비어 있습니다</AlertText>
        </InputField>
        <InputField>
          <InputForm>
            <input
              value={passwordConfirm || ''}
              name="passwordConfirm"
              autoComplete="off"
              onChange={onChange}
              type="password"
              data-testid="password-differ"
              placeholder=" "
            />
            <label htmlFor="title">비밀번호 확인</label>
          </InputForm>

          <AlertText id="passwordConfirm" data-testid="password-alert">
            비밀번호가 일치하지 않습니다
          </AlertText>
        </InputField>
        <InputField>
          <InputForm>
            <input
              value={phoneNum || ''}
              name="phoneNum"
              onChange={onChange}
              data-testid="phoneNum-input"
              placeholder=" "
            />
            <label htmlFor="title">핸드폰 번호</label>
          </InputForm>

          <AlertText id="phoneNum">올바른 핸드폰 번호를 입력해 주세요</AlertText>
        </InputField>
        <InputField>
          <InputForm>
            <input
              value={email || ''}
              name="email"
              onChange={onChange}
              type={'email'}
              data-testid="email-input"
              placeholder=" "
            />
            <label htmlFor="title">이메일 주소</label>
          </InputForm>

          <AlertText id="email">이메일 형식이 잘못 되었습니다</AlertText>
        </InputField>
        <InputField onClick={() => navigate('/register/schoolSearch')}>
          <InputForm>
            <input
              onFocus={() => navigate('/register/schoolSearch')}
              readOnly={true}
              value={school || ''}
              name="school"
              data-testid="school-input"
              placeholder=" "
            />
            <label htmlFor="title">학교</label>
          </InputForm>
          <AlertText id="school">입력란이 비어 있습니다</AlertText>
        </InputField>
        <input type="file" accept="image/png" name="profileImageUrl" onChange={onChangeImg} />
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
      <UnderLogo src={LogoText} alt="스클버리 로고 이미지" />
    </>
  );
}

export default RegisterPage;
