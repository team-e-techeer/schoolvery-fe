import { searchState } from '@/atoms/searchState';
import { RecoilObserver } from '@/util/RecoilObserver';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
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
    input.blur();
    await waitFor(() => expect(screen.getByText('검색 결과')).toBeInTheDocument());
  });

  it('검색어 입력후 전송', async () => {
    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.submit(form);
    expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenCalledWith([{ searchValue: '123' }]);
    await waitFor(() => expect(screen.getByText('123')).toBeInTheDocument());
  });

  it('검색어 입력후 전송후 삭제', async () => {
    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.submit(form);

    expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenCalledWith([{ searchValue: '123' }]);
    await waitFor(() => expect(screen.getByText('123')).toBeInTheDocument());
    const button = screen.getAllByRole('button');
    fireEvent.click(button[1]);
  });
});
