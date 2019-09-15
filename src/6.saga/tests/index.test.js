import { expectSaga } from 'redux-saga-test-plan';
import { select } from 'redux-saga/effects';
import { complicatedSaga } from '..';
import { notEnoughComplicatedData, greatSuccess, sadFailure } from '../action';
import { complicatedSelectorForHalfOfTheState, makeComplicatedSelectorForAPieceOfTheState } from '../selector';

const mockSelector = jest.fn();
jest.mock('../selector', () => {
    const module = require.requireActual('../selector');

    return ({
        ...module,
        makeComplicatedSelectorForAPieceOfTheState: id => mockSelector,
    })
});

describe('complicatedSaga', () => {
    it('should put notEnoughComplicatedData action if there is no request data.', () => {
        const requestData = null;

        return expectSaga(complicatedSaga, {}, {})
            .provide([
                [select(complicatedSelectorForHalfOfTheState), requestData]
            ])
            .put(notEnoughComplicatedData())
            .run();
    });

    it('should call api and put success action if it succeeds.', () => {
        const response = {};
        const api = {
            someEndpoint: jest.fn().mockReturnValue(response),
        };
        const requestData = {};

        return expectSaga(complicatedSaga, api, {})
            .provide([
                [select(complicatedSelectorForHalfOfTheState), requestData]
            ])
            .call(api.someEndpoint, requestData)
            .put(greatSuccess(response))
            .run();
    });
    
    it('should call api and put sad failure action if it fails.', () => {
        const error = new Error();
        const api = {
            someEndpoint: jest.fn().mockImplementation(() => { throw error; }),
        };
        const requestData = {};

        return expectSaga(complicatedSaga, api, {})
            .provide([
                [select(complicatedSelectorForHalfOfTheState), requestData]
            ])
            .call(api.someEndpoint, requestData)
            .put(sadFailure(error))
            .run();
    });

    it('should use id if its given.', () => {
        const response = {};
        const api = {
            someEndpoint: jest.fn().mockReturnValue(response),
        };
        const requestData = {};
        const id = 'id';

        return expectSaga(complicatedSaga, api, { id })
            .provide([
                [select(makeComplicatedSelectorForAPieceOfTheState(id)), requestData]
            ])
            .call(api.someEndpoint, requestData)
            .put(greatSuccess(response, id))
            .run();
    });
})