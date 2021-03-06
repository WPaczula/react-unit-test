import { renderHook, act } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import useWindowSize from '.';

describe(`useWindowSize`, () => {
  it(`should return with default resolution`, () => {
    // given
    const DEFAULT_DOM_RESOLUTION = [1024, 768];

    // when
    const { result } = renderHook(() => useWindowSize());

    // then
    expect([result.current.width, result.current.height]).toEqual(
      DEFAULT_DOM_RESOLUTION,
    );
    expect(result.error).toEqual(undefined);
  });

  it(`should return changed resolution when resizing`, () => {
    // given
    const newWidth = 1000;
    const newHeight = 800;
    const { result } = renderHook(() => useWindowSize());

    // when
    Object.defineProperty(window, 'innerWidth', { get: () => newWidth });
    Object.defineProperty(window, 'innerHeight', { get: () => newHeight });
    act(() => {
      fireEvent(window, new Event('resize'));
    });

    // then
    expect([result.current.width, result.current.height]).toEqual([
      newWidth,
      newHeight,
    ]);
  });

  it(`should subscribe and unsubscribe to the 'resize' event only once`, () => {
    // given
    const addSpy = jest.spyOn(window, 'addEventListener');
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount, rerender } = renderHook(() => useWindowSize());

    // when
    act(() => {
      fireEvent(window, new Event('resize'));
    });
    rerender();
    unmount();

    // then
    const numberOfResizeCallsForAdd = addSpy.mock.calls.filter(
      (call) => call[0] === 'resize',
    ).length;
    const numberOfResizeCallsForRemove = removeSpy.mock.calls.filter(
      (call) => call[0] === 'resize',
    ).length;
    expect(numberOfResizeCallsForAdd).toBe(1);
    expect(numberOfResizeCallsForRemove).toBe(1);
  });
});
