import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import SearchDetailPage from './SearchDetailPage';

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
    history.push('/search');
    history.push('/search/hi');
    render(
      <Router location={history.location} navigator={history}>
        <SearchDetailPage />
      </Router>
    );
  });

  it('[SearchDetailPage] 렌더링 테스트', () => {
    expect(screen.getByText('스쿨버리')).toBeInTheDocument();
    expect(screen.getByText('목록으로 돌아가기')).toBeInTheDocument();
  });
  it('[SearchDetailPage] 뒤로 돌아가기 테스트', () => {
    const button = screen.getByTestId('detail-button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(history.location.pathname).toBe('/search');
  });
});
