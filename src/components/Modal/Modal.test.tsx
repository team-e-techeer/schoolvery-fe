import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Modal from './Modal';

describe('[Modal Component]', () => {
  it('[Modal Component] 렌더링 테스트', () => {
    const handleClose = jest.fn();
    const { container } = render(
      <Modal visible={true} setModalVisible={handleClose}>
        <div>hi</div>
      </Modal>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText('hi')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('[Modal Component] 닫기 버튼 누르기', async () => {
    const handleClose = jest.fn();
    const { container, getByText } = render(
      <Modal visible={true} setModalVisible={handleClose}>
        <div>hi</div>
      </Modal>,
      { wrapper: BrowserRouter }
    );
    expect(getByText('hi')).toBeTruthy();
    const button = screen.getByTestId('test-modal-button');
    fireEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
