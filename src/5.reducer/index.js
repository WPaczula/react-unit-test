import { FIRE_SOME_MAGIC_LOGIC } from './type';
import { fromJS } from 'immutable';

const initialState = fromJS({
    logic: '🤡',
})

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FIRE_SOME_MAGIC_LOGIC:
            return state.set('logic', action.logic); 
        default: 
            return state;
    }
}

export default reducer;