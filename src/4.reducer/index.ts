import { FIRE_SOME_MAGIC_LOGIC } from './type';
import { FireMagicLogicAction, Action } from './action';

export interface State {
  logic: string;
}

const initialState: State = {
  logic: '🤡',
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FIRE_SOME_MAGIC_LOGIC:
      return {
        ...state,
        logic: (action as FireMagicLogicAction).logic,
      };
    default:
      return state;
  }
};

export default reducer;
