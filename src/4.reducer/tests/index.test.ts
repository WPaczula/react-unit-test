import reducer, { State } from '..';
import { fireMagicLogic } from '../action';

describe(`reducer`, () => {
  const createInitialState = (opts: Partial<State> = {}) => {
    const { logic = '👶' } = opts;

    return { logic };
  };

  it(`should have initial state.`, () => {
    const expectedState = { logic: '🤡' };

    const state = reducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(expectedState);
  });

  it('should change logic to magic fire when fireMagicLogic action is fired.', () => {
    const expectedState = { logic: '🔥🧙‍🔥' };
    const action = fireMagicLogic();
    const initialState = createInitialState();

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
