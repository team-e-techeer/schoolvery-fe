import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import JoinDetail from './JoinDetail';
import React, { useState as useStateMock, useEffect as useEffectMock } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));
describe('상세정보 페이지 테스트', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
    (useEffectMock as jest.Mock).mockImplementation(f => f());
    jest.spyOn(React, 'useEffect');
    jest.spyOn(React, 'useState');

    jest.useFakeTimers().setSystemTime(1653480974069);
  });

  it('렌더링 테스트', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    Date.now = jest.fn(() => 1653480974069);
    const { container } = render(
      <JoinDetail
        shopName="BBQ"
        schoolName="한국공과"
        categoryName="치킨"
        people={{ current: 3, total: 7 }}
        time={{ post: Date.now(), left: Date.now() }}
        payment={3000}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText('BBQ')).toBeInTheDocument();
    expect(screen.getByText('한국공과')).toBeInTheDocument();
    expect(screen.getByText('치킨')).toBeInTheDocument();
    expect(screen.getByText('현재 3명')).toBeInTheDocument();
    expect(screen.getByText('7명')).toBeInTheDocument();
    expect(screen.getByText('총 3000원')).toBeInTheDocument();
    expect(screen.getByText(`인당 ${Math.round(3000 / 7)}원 예상`)).toBeInTheDocument();
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000 * 60);
    expect(useEffectMock).toHaveBeenCalledTimes(1);
    expect(useStateMock).toHaveBeenCalledTimes(3);
    expect(useEffectMock).toBeCalledTimes(1);

    expect(container).toMatchSnapshot();
  });
});
