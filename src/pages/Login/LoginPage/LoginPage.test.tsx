import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './LoginPage';
describe('로그인 페이지 테스트', () => {
  jest.mock('');
  beforeEach(() => {
    render(
      <RecoilRoot>
        <LoginPage />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );
  });
  it('렌더링 테스트', () => {
    screen.findByText('스쿨버리');
    screen.findByText('아이디/비밀번호 찾기');
    screen.findByText('아직 회원이 아니신가요? 회원가입 하기');
    const button = screen.getByTestId('login-button');
    expect(button).toHaveTextContent('로그인');
  });

  it('[Error] 입력칸 비어있음', () => {
    const idInput = screen.getByTestId('id-input');
    const idAlertText = screen.getByTestId('id-alert');
    expect(idAlertText).toHaveStyle('display: none');
    idInput.focus();
    idInput.blur();
    expect(idAlertText).toHaveStyle('display: block');
    const pwInput = screen.getByTestId('pw-input');
    const pwAlertText = screen.getByTestId('pw-alert');
    expect(pwAlertText).toHaveStyle('display: none');
    pwInput.focus();
    pwInput.blur();
    expect(pwAlertText).toHaveStyle('display: block');
  });
});
