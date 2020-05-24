import { ThunkAction } from 'redux-thunk';
import { State } from './state';
import { Api } from './api';
import { Action, request, success, error } from './action';

export const makeRequest = (
  id: number,
): ThunkAction<void, State, Pick<Api, 'makeRequest'>, Action> => {
  return async (dispatch, getState, api) => {
    dispatch(request());

    try {
      const result = await api.makeRequest(id);

      dispatch(success(result));
    } catch (e) {
      dispatch(error(e));
    }
  };
};
