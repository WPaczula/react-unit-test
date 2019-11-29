import reducer from '..';
import { fireMagicLogic } from '../action';
import { fromJS } from 'immutable';

describe(`reducer`, () => {
    const createInitialState = (opts = {}) => {
        const {
            logic = '👶',
        } = opts;

        return fromJS({ logic });
    }

    it(`should have initial state.`, () => {
    const expectedState = fromJS({ logic: '🤡' });

    const state = reducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(expectedState);
  });

  it('should change logic to magic fire when fireMagicLogic action is fired.', () => {
    const expectedState = fromJS({ logic: '🔥🧙‍🔥' });
    const action = fireMagicLogic();
    const initialState = createInitialState();
    
    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});