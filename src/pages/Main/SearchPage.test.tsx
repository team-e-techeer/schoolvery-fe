import { searchState } from '@/atoms/searchState';
import { RecoilObserver } from '@/util/RecoilObserver';
import { render, screen, fireEvent, renderHook, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import SearchPage from './SearchPage';
import { createMemoryHistory, MemoryHistory } from 'history';
const mockHistoryPush = jest.fn();
let history: MemoryHistory;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe('검색 페이지 테스트', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('렌더링 테스트', async () => {
    const { container } = render(
      <RecoilRoot>
        <RecoilObserver node={searchState} onChange={onChange} />
        <Router location={history.location} navigator={history}>
          <SearchPage />
        </Router>
      </RecoilRoot>
    );
    history.push('/search');

    await waitFor(() => expect(screen.getByText('최근 검색어')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('전체 삭제')).toBeInTheDocument());
    expect(container).toMatchSnapshot();
  });

  it('검색어 입력후 전송', async () => {
    const { container } = render(
      <RecoilRoot>
        <RecoilObserver node={searchState} onChange={onChange} />
        <Router location={history.location} navigator={history}>
          <SearchPage />
        </Router>
      </RecoilRoot>
    );
    history.push('/search');
    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.submit(form);
    expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenCalledWith([{ searchValue: '123' }]);
    expect(screen.getByText('검색 결과')).toBeInTheDocument();
    expect(history.location.pathname).toBe('/search/123');
    expect(container).toMatchSnapshot();
  });

  it('검색어 입력후 전송후 삭제', async () => {
    const { container } = render(
      <RecoilRoot>
        <RecoilObserver node={searchState} onChange={onChange} />
        <Router location={history.location} navigator={history}>
          <SearchPage />
        </Router>
      </RecoilRoot>
    );
    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');
    fireEvent.change(input, { target: { value: '안뇽' } });
    fireEvent.submit(form);

    const { result } = renderHook(() => useRecoilValue(searchState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual([]);

    expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenCalledWith([{ searchValue: '안뇽' }]);
    fireEvent.focus(input);
    const text = screen.getByText('안뇽');
    expect(text).toBeInTheDocument();
    const button = screen.getByTestId('안뇽');
    fireEvent.click(button);
    expect(text).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('검색 쿼리문 테스트', async () => {
    history.push('/search/hi');
    const { container } = render(
      <RecoilRoot>
        <RecoilObserver node={searchState} onChange={onChange} />
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/search" element={<SearchPage />}>
              <Route path=":searchValue" element={<SearchPage />} />
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    );

    expect(screen.getByText('검색 결과')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('전체 삭제 버튼 클릭', async () => {
    const { container } = render(
      <RecoilRoot>
        <RecoilObserver node={searchState} onChange={onChange} />
        <SearchPage />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );
    await waitFor(() => screen.getByTestId('search-input'));
    await waitFor(() => screen.getByTestId('search-form'));
    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');
    fireEvent.change(input, { target: { value: '안뇽' } });
    fireEvent.submit(form);

    fireEvent.focus(input);
    await waitFor(() => screen.getByText('안뇽'));
    const text = screen.getByText('안뇽');
    await waitFor(() => screen.getByText('전체 삭제'));
    const button = screen.getByText('전체 삭제');
    fireEvent.click(button);
    expect(text).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('최근 검색어 클릭', async () => {
    history.push('/search');
    const { container } = render(
      <RecoilRoot>
        <RecoilObserver node={searchState} onChange={onChange} />
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/search" element={<SearchPage />}>
              <Route path=":searchValue" element={<SearchPage />} />
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    );
    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');
    fireEvent.change(input, { target: { value: '안뇽' } });
    fireEvent.submit(form);

    fireEvent.focus(input);
    await waitFor(() => screen.getByTestId('search-안뇽'));
    const button = screen.getByTestId('search-안뇽');
    fireEvent.click(button);
    await waitFor(() => history.location.pathname);
    expect(history.location.pathname).toBe('/search/안뇽');
    expect(container).toMatchSnapshot();
  });
});
