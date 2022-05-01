/* eslint-disable import/extensions */
import Header from '../../../components/Header';

import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IconWrapper, Input, Title } from './LoginPage.style';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../../atoms/loginState';
import { useState } from 'react';
function LoginPage() {
  const login = useRecoilValue(loginState);
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = loginInfo;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  return (
    <>
      <Header
        Left={() => (
          <IconWrapper>
            <button onClick={() => console.log('hi')}>
              <LeftIcon size={30} color="#fff" />
            </button>
          </IconWrapper>
        )}
      />
      <Title>스쿨버리</Title>
      <Input placeholder="이메일" type="email" onChange={onChange} id="input-id" name="id" value={id} />
      <Input placeholder="비밀번호" type="password" onChange={onChange} id="input-pw" name="pw" value={pw} />
    </>
  );
}

export default LoginPage;
