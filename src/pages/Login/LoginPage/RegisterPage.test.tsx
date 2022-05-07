import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
describe('회원가입 페이지 테스트', () => {
  jest.mock('');

  beforeEach(() => {
    render(<RegisterPage />, { wrapper: BrowserRouter });
  });
  it('[Render] 렌더링 테스트', async () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('회원가입');

    expect(screen.getByText('회원가입'));
    expect(screen.getByText('비밀번호'));
    expect(screen.getByText('비밀번호 확인'));
    expect(screen.getByText('이메일'));
    expect(screen.getByText('학교'));
  });

  it('[Error] 입력란 비어 있음 포커스 out', () => {
    const idInput = screen.getByTestId('id-input');
    const idAlert = screen.getByTestId('id-alert');
    expect(idAlert).toHaveStyle('display: none');
    idInput.focus();
    expect(idInput).toHaveFocus();
    idInput.blur();
    expect(idInput).not.toHaveFocus();
    screen.getAllByText('입력란이 비어 있습니다');
    expect(idAlert).toHaveStyle('display: block');
  });

  it('[Error] 입력란 비어 있음 폼 버튼 클릭', () => {
    const button = screen.getByRole('button');
    const idAlert = screen.getByTestId('id-alert');
    expect(idAlert).toHaveStyle('display: none');
    fireEvent(button, new MouseEvent('click'));
    expect(idAlert).toHaveStyle('display: block');
  });
});
