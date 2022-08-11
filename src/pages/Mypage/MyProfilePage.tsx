import Header from '@/components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import {
  AlertText,
  BlankInput,
  IconWrapper,
  Input,
  InputField,
  InputOverText,
  JoinBlock,
} from './MyProfilePage.styles';
import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { ProfileFooter } from '@/components/Profile/ProfileFooter';
import { usePatchUser } from '@/hooks/query/profile/usePatchUser';
import { useDeleteUser } from '@/hooks/query/profile/useDeleteUser';

interface UserInfo {
  nickname: string;
  password: string;
  passwordConfirm: string;
  phoneNum: string;
  [prop: string]: unknown;
}

function MyProfilePage() {
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [profileInfo, setProfileInfo] = useState<UserInfo>({
    userId: userInfo.id,
    accessToken: userInfo.accessToken,
    nickname: userInfo.nickname,
    password: '',
    passwordConfirm: '',
    phoneNum: userInfo.phoneNum,
    profileImageUrl: userInfo.profileImageUrl,
  });
  const { nickname, password, passwordConfirm, phoneNum } = profileInfo;

  // 삭제하기
  const deletePostMutation = useDeleteUser({ accessToken: userInfo.accessToken, userId: userInfo.id });

  // 수정하기
  const { mutate, data, isSuccess } = usePatchUser();
  useEffect(() => {
    if (isSuccess) navigate('/');
  });
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['userId', 'accessToken', 'nickname', 'password', 'passwordConfirm', 'phone'];
      mutate({
        userId: userInfo.id,
        accessToken: userInfo.accessToken,
        nickname,
        password,
        phoneNum,
        profileImageUrl: '1',
      });
    },
    [profileInfo]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setProfileInfo({
        ...profileInfo,
        [name]: value,
      });
    },
    [profileInfo]
  );
  const onCheckBlank = useCallback(
    (e: React.FocusEvent<HTMLFormElement, Element>) => {
      !profileInfo.schoolName && useCheckBlank({ e, ref: spanRef, state: profileInfo });
      onCheckHaveSamePassword();
    },
    [profileInfo, spanRef]
  );

  const onCheckHaveSamePassword = useCallback(() => {
    const select = spanRef.current?.querySelector<HTMLElement>('#passwordConfirm') as HTMLElement;
    if (isEqualPassword(profileInfo.password, profileInfo.passwordConfirm)) return (select.style.display = 'none');
    select.style.display = 'block';
  }, [spanRef, profileInfo]);

  const isEqualPassword = useCallback(
    (password: string, passwordConfirm: string) => (password === passwordConfirm ? true : false),
    []
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
      <JoinBlock ref={spanRef} onBlur={onCheckBlank} onSubmit={onSubmit}>
        <BlankInput name="id" type="username" />
        <BlankInput type="password" />
        <InputField>
          <InputOverText>이름</InputOverText>
          <Input value={userInfo.name} name="name" autoComplete="off" data-testid="id-input" disabled={true} />
        </InputField>
        <InputField>
          <InputOverText>이메일</InputOverText>
          <Input value={userInfo.email} name="email" autoComplete="off" data-testid="id-input" disabled={true} />
        </InputField>
        <InputField>
          <InputOverText>닉네임</InputOverText>
          <Input
            defaultValue={userInfo.nickname}
            name="nickname"
            onChange={onChange}
            autoComplete="off"
            data-testid="id-input"
          />
          <AlertText id="nickname">입력란이 비어 있습니다</AlertText>
        </InputField>
        <InputField>
          <InputOverText>새 비밀번호 입력</InputOverText>
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
          <InputOverText>새 비밀번호 확인</InputOverText>
          <Input
            value={passwordConfirm || ''}
            name="passwordConfirm"
            autoComplete="off"
            onChange={onChange}
            type="password"
            data-testid="password-differ"
          />
          <AlertText id="passwordConfirm">비밀번호가 일치하지 않습니다</AlertText>
        </InputField>
        <InputField>
          <InputOverText>핸드폰</InputOverText>
          <Input defaultValue={userInfo.phoneNum} name="phoneNum" onChange={onChange} />
          <AlertText id="phoneNum">입력란이 비어 있습니다</AlertText>
        </InputField>
        <ProfileFooter deleteProfileMutation={deletePostMutation} />
      </JoinBlock>
    </>
  );
}

export default MyProfilePage;
