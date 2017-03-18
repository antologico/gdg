import Types from '../statics/types';
import Consts from '../statics/consts';

export default function game(state = {}, action) {

    switch (action.type) {
      case Types.GAME_GOTO_NEXT_FRAME:
          return Object.assign({}, state, {
              frame  : state.frame + 1
          });
      break;
      case Types.GAME_START:
          return Object.assign({}, state, {
              status  : Consts.GAME_PLAY
          });
      break;
      case Types.GAME_OVER:
          return Object.assign({}, state, {
              status  : Consts.GAME_OVER
          });
      break;
      case Types.GAME_WIN:
          return Object.assign({}, state, {
              status  : Consts.GAME_WIN
          });
      break;
    }

    return state;
}
