import React from 'react';
import NavigateButton, { Props } from '..';
import { render, fireEvent, act } from '@testing-library/react';
const { MemoryRouter } = jest.requireActual('react-router');

const mockHistoryPush = jest.fn();

jest.mock('react-router', () => ({
  useHistory: () => ({ push: mockHistoryPush }),
}));

describe('NavigateButton', () => {
  const renderButton = (props: Partial<Props> = {}) => {
    const { url = 'http://google.com' } = props;

    return render(
      <MemoryRouter>
        <NavigateButton url={url} />
      </MemoryRouter>,
    );
  };

  beforeEach(() => {
    mockHistoryPush.mockRestore();
  });

  it('should navigate when the button is clicked.', () => {
    const url = 'www.page.com';
    const { getByText } = renderButton({ url });
    const button = getByText('Navigate');

    fireEvent.click(button);

    expect(mockHistoryPush).toHaveBeenCalledWith(url);
  });

  it('should disable the button when the application goes offline.', () => {
    const { getByText } = renderButton();
    const button = getByText('Navigate');

    act(() => {
      window.dispatchEvent(new Event('offline'));
    });

    expect(button).toHaveAttribute('disabled');
  });

  it('should remove listeners when unmounted.', () => {
    const spy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderButton();

    unmount();

    const numberOfRemoveOnlineCalls = spy.mock.calls.filter(
      (call) => call[0] === 'online',
    ).length;
    const numberOfRemoveOfflineCalls = spy.mock.calls.filter(
      (call) => call[0] === 'offline',
    ).length;
    expect(numberOfRemoveOfflineCalls).toBe(1);
    expect(numberOfRemoveOnlineCalls).toBe(1);
    spy.mockClear();
  });
});
