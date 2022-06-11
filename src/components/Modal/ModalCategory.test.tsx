import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import ModalCategory from './ModalCategory';
import { createMemoryHistory, MemoryHistory } from 'history';
describe('[Modal Component]', () => {
  it('[ModalCategory Component] 렌더링 테스트', () => {
    const handleClose = jest.fn();
    const { container, getByText } = render(
      <ModalCategory visible={true} setModalVisible={handleClose} isNavigating={false}></ModalCategory>,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(getByText('카테고리를 선택해주세요')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('[ModalCategory Component] 닫기 버튼 누르기', async () => {
    const handleClose = jest.fn();
    const { container } = render(
      <ModalCategory visible={true} setModalVisible={handleClose} isNavigating={false}></ModalCategory>,
      {
        wrapper: BrowserRouter,
      }
    );

    const button = screen.getByTestId('test-modal-button');
    fireEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
  it('[ModalCategory Component] 카테고리 이동', async () => {
    const handleClose = jest.fn();
    const history: MemoryHistory = createMemoryHistory();
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <ModalCategory visible={true} setModalVisible={handleClose} isNavigating={true}></ModalCategory>
      </Router>
    );
    history.push('/category/home');

    const chickenIcon = screen.getByText('치킨');
    fireEvent.click(chickenIcon);
    expect(history.location.pathname).toBe('/category/치킨');

    expect(container).toMatchSnapshot();
  });
});
