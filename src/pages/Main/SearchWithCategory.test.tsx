import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import SearchWithCategoryPage from './SearchWithCategoryPage';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('검색 상세 페이지 테스트', () => {
  let history: MemoryHistory;
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/');
    history.push('/category/한식');
    render(
      <Router location={history.location} navigator={history}>
        <SearchWithCategoryPage />
      </Router>
    );
  });

  it('[SearchWithCategoryPage] 렌더링 테스트', () => {
    expect(screen.getByText('검색 결과')).toBeInTheDocument();
    expect(history.location.pathname).toBe('/category/한식');
  });
  it('[SearchWithCategoryPage] 뒤로 가기 버튼 테스트', () => {
    const icon = screen.getByTestId('btn-back');
    expect(history.location.pathname).toBe('/category/한식');
    fireEvent.click(icon);
    expect(history.location.pathname).toBe('/');
  });
});
