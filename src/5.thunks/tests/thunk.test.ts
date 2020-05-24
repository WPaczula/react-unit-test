import { request, success, error } from '../action';
import { makeRequest } from '../thunk';

describe('makeRequest', () => {
  it('should dispatch a request and success actions when API returns roles successfully.', async () => {
    // given
    const id = 5;
    const api = {
      makeRequest: jest.fn().mockReturnValue(id),
    };
    const dispatch = jest.fn();

    // when
    const thunk = makeRequest(id);
    await thunk(dispatch, jest.fn(), api);

    // then
    expect(api.makeRequest).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(request());
    expect(dispatch).toHaveBeenCalledWith(success(id));
  });

  it('should dispatch a request and error actions when API fails.', async () => {
    // given
    const requestError = new Error();
    const api = {
      makeRequest: jest.fn().mockImplementation(() => {
        throw error;
      }),
    };
    const dispatch = jest.fn();

    // when
    const thunk = makeRequest(5);
    await thunk(dispatch, jest.fn(), api);

    // then
    expect(api.makeRequest).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(request());
    expect(dispatch).toHaveBeenCalledWith(error(requestError));
  });
});
