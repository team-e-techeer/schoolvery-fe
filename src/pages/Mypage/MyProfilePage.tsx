/* eslint-disable import/extensions */
import BottomNavigation from '@/components/BottomNavigation';
import Header from '@/components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { AlertText, BlankInput, IconWrapper, Input, InputField, InputOverText, JoinBlock } from './MyProfilePage.styles';
import { css } from '@emotion/react';
import Button from '../../components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { UnderLogo } from '../Login/LoginPage/LoginPage.styles';
import LogoText from '../../assets/img/LogoText.png';
import { usePatchUserQuery } from '@/hooks/query/profile/usePatchUser';


interface UserInfo {
    nickname: string;
    password: string;
    phoneNum: string;
    [prop: string]: unknown;
  }

function MyProfilePage(){
    const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
    const navigate = useNavigate();
    const [UserInfo, setUserInfo] = useState<UserInfo>({
        nickname: '',
        password: '',
        phoneNum: '',
  });
  const { nickname, password, phoneNum} = UserInfo;
//   const { mutate, data, isSuccess } = usePatchUserQuery();
//   useEffect(() => {
//     console.log(isSuccess, data);
//     isSuccess && navigate('/myInfo');
//   }, [data, isSuccess]);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setUserInfo({
        ...UserInfo,
        [name]: value,
      });
    },
    [UserInfo]
  );
    return (
        <>
          <Header
            Left={() => (
              <IconWrapper>
                <Link to="/myInfo">
                  <LeftIcon size={30} color="#fff" />
                </Link>
              </IconWrapper>
            )}
          />
          <JoinBlock>
            <BlankInput name="id" type="username" />
            <BlankInput type="password" />
            <InputField>
              <InputOverText>닉네임</InputOverText>
              <Input value={nickname || ''} name="nickname" onChange={onChange} autoComplete="off" data-testid="id-input" />
              <AlertText id="nickname" data-testid="id-alert">
                입력란이 비어 있습니다
              </AlertText>
            </InputField>
            <InputField>
              <InputOverText>비밀번호</InputOverText>
              <Input
                value={password || ''}
                name="password"
                onChange={onChange}
                autoComplete="off"
                type="password"
                data-testid="password-input"
              />
              <AlertText id="password">입력란이 비어 있습니다</AlertText>
            </InputField>
            <InputField>
              <InputOverText>비밀번호 확인</InputOverText>
              <Input
                value={password || ''}
                name="passwordConfirm"
                autoComplete="off"
                onChange={onChange}
                type="password"
                data-testid="password-differ"
              />
              <AlertText id="passwordConfirm" data-testid="password-alert">
                비밀번호가 일치하지 않습니다
              </AlertText>
            </InputField>
            <InputField>
              <InputOverText>핸드폰</InputOverText>
              <Input value={phoneNum || ''} name="phoneNum" onChange={onChange} data-testid="phoneNum-input" />
              <AlertText id="phoneNum">올바른 핸드폰 번호를 입력해 주세요</AlertText>
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
          <UnderLogo src={LogoText} alt="스클버리 로고 이미지" />
        </>
      );
}

export default MyProfilePage;