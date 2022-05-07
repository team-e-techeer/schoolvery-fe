import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './LoginPage';
describe('로그인 페이지 테스트', () => {
  jest.mock('');
  it('렌더링 테스트', () => {
    render(
      <RecoilRoot>
        <LoginPage />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );
  });
});
