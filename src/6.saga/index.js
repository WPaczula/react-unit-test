import { call, select, put } from 'redux-saga/effects';
import { complicatedSelectorForHalfOfTheState, makeComplicatedSelectorForAPieceOfTheState } from './selector';
import { notEnoughComplicatedData, greatSuccess, sadFailure } from './action';

export function* complicatedSaga(api, { id }) {
    const selector = id !== undefined 
        ? makeComplicatedSelectorForAPieceOfTheState(id) 
        : complicatedSelectorForHalfOfTheState;
    const requestData = yield select(selector);

    if(!requestData) {
        yield put(notEnoughComplicatedData(id));
        return;
    }

    try {
        const response = yield call(api.someEndpoint, requestData);
        
        yield put(greatSuccess(response, id));
    } catch (e) {
        yield put(sadFailure(e, id));
    }
}