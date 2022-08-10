import Header from '@/components/Header/Header';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { AlertText, BlankInput, IconWrapper, Input, InputField, InputOverText, JoinBlock } from './MyProfilePage.styles';
import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { ProfileFooter } from '@/components/Profile/ProfileFooter';
import { usePatchUserMutation } from '@/hooks/query/profile/usePatchUser';
import { useDeleteUserMutation} from '@/hooks/query/profile/useDeleteUser';

interface UserInfo {
    nickname: string;
    password: string;
    phoneNum: string;
    [prop: string]: unknown;
  }

function MyProfilePage(){
    const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
    const navigate = useNavigate();
    const user = useRecoilValue(userState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [profileInfo, setProfileInfo] = useState<UserInfo>({
        nickname: '',
        password: '',
        phoneNum: '',
  });
  const { nickname, password, phoneNum} = profileInfo;
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete,setIsDelete] = useState(false);
  const { mutate, data, isSuccess } = usePatchUserMutation();
  //const { mutate, deleteData, isDeleteSuccess } = useDeleteUserMutation();

  // useEffect(() => {
  //   data && setUserInfo(prev => ({ ...prev, nickname: data.nickname, password: data. }));
  //   isSuccess && navigate('/');
  // }, [data]);

//   useEffect(()=>{
//       if (isDelete){
//           const deleteData = {
//               userId: userInfo.id,
//               token: userInfo.accessToken,
//           }
//       const {mutate, deleteData, isSuccess} = useDeleteUserMutation();
//       isDelete && navigate('/login');
//       }
//   },[isDelete])

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
              <InputOverText>이름</InputOverText>
              <Input value={user.name} name="name" autoComplete="off" data-testid="id-input" disabled={true}/>
            </InputField>
            <InputField>
              <InputOverText>이메일</InputOverText>
              <Input value={user.email} name="email" autoComplete="off" data-testid="id-input" disabled={true}/>
            </InputField>
            <InputField>
              <InputOverText>닉네임</InputOverText>
              <Input value={nickname || user.nickname} name="nickname" onChange={onChange} autoComplete="off" data-testid="id-input" />
              <AlertText id="nickname" data-testid="id-alert">
                입력란이 비어 있습니다
              </AlertText>
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
              <Input value={phoneNum || user.phoneNum} name="phoneNum" onChange={onChange} data-testid="phoneNum-input" />
              <AlertText id="phoneNum">올바른 핸드폰 번호를 입력해 주세요</AlertText>
            </InputField>
            <ProfileFooter isEdit={isEdit} setIsEdit={setIsEdit} isDelete={isDelete} setIsDelete={setIsDelete}/>
          </JoinBlock>
        </>
      );
}

export default MyProfilePage;