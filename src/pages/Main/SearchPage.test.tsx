import { searchState } from '@/atoms/searchState';
import { RecoilObserver } from '@/util/RecoilObserver';
import { render, screen, fireEvent, cleanup, renderHook } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import SearchPage from './SearchPage';

describe('검색 페이지 테스트', () => {
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));
  const onChange = jest.fn();
  beforeEach(() => {
    render(
      <RecoilRoot>
        <RecoilObserver node={searchState} onChange={onChange} />
        <SearchPage />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );
  });
  afterEach(cleanup);
  it('렌더링 테스트', async () => {
    expect(screen.getByText('최근 검색어')).toBeInTheDocument();
    expect(screen.getByText('전체 삭제')).toBeInTheDocument();
    const input = screen.getByTestId('search-input');
    input.focus();
  });

  it('검색어 입력후 전송', async () => {
    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.submit(form);
    expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenCalledWith([{ searchValue: '123' }]);
    expect(screen.getByText('검색 결과')).toBeInTheDocument();
  });

  it('검색어 입력후 전송후 삭제', async () => {
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
  });
});
