import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchInput from './SearchInput';
describe('로그인 페이지 테스트', () => {
  it('렌더링 테스트', () => {
    const { container } = render(<SearchInput isLinking={true} />, { wrapper: BrowserRouter });
    expect(screen.getByPlaceholderText('검색어를 입력해 주세요')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('입력 테스트', () => {
    const { container } = render(<SearchInput isLinking={false} />, { wrapper: BrowserRouter });

    const input = screen.getByPlaceholderText('검색어를 입력해 주세요') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
    expect(container).toMatchSnapshot();
  });
});
