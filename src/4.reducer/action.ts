import { FIRE_SOME_MAGIC_LOGIC } from './type';

export const fireMagicLogic = () => ({
  type: FIRE_SOME_MAGIC_LOGIC,
  logic: '🔥🧙‍🔥',
});

const init = () => ({
  type: '@@INIT',
});

export type FireMagicLogicAction = ReturnType<typeof fireMagicLogic>;

export type Action = FireMagicLogicAction | ReturnType<typeof init>;
