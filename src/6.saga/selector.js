export const complicatedSelectorForHalfOfTheState = state => state.some.very.deep.state;

export const makeComplicatedSelectorForAPieceOfTheState = id => state => state.some.very.deep.state[id];