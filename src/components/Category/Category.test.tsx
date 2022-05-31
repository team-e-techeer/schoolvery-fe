import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import Category from './Category';
import type { ImgInfo } from './Category';
import Ch from '../../assets/img/ch.png';
import Chicken from '../../assets/img/Chicken.png';
import Jp from '../../assets/img/jp.png';
import Ko from '../../assets/img/ko.png';
import { createMemoryHistory, MemoryHistory } from 'history';
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('로그인 페이지 테스트', () => {
  it('렌더링 테스트', () => {
    const history: MemoryHistory = createMemoryHistory();
    const imageInfos: ImgInfo[] = [
      { path: '/category/korea', src: Ko, name: '한식' },
      { path: '/category/china', src: Ch, name: '중식' },
      { path: '/category/japan', src: Jp, name: '일식' },
      { path: '/category/chicken', src: Chicken, name: '치킨' },
    ];

    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Category imageInfo={imageInfos} />
      </Router>
    );
    history.push('/');
    expect(screen.getByAltText('category img for 한식')).toBeInTheDocument();
    expect(screen.getByAltText('category img for 중식')).toBeInTheDocument();
    expect(screen.getByAltText('category img for 일식')).toBeInTheDocument();
    expect(screen.getByAltText('category img for 치킨')).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
    const toKorea = screen.getByText('한식');
    fireEvent.click(toKorea);
    expect(history.location.pathname).toBe('/category/korea');
    expect(container).toMatchSnapshot();
  });
});
