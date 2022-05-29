import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderWithGradation from './HeaderWithGradation';
import imgPath from '../../assets/img/dog.png';

describe('로그인 페이지 테스트', () => {
  it('렌더링 테스트', () => {
    const { container } = render(<HeaderWithGradation schoolName="한국공과" categoryName="강아지" imgSrc={imgPath} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText('스쿨버리')).toBeInTheDocument();
    expect(screen.getByText('한국공과 대학교')).toBeInTheDocument();
    expect(screen.getByAltText('category-img')).toBeInTheDocument();
    expect(screen.getByText('강아지')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
