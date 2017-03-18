import Types from '../statics/types';
import Consts from '../statics/consts';

function getPositionX(x, key) {
    let _x = x;
    switch (key) {
      case Consts.KEY_RIGHT:
        _x = x + 1;
        break;
      case Consts.KEY_LEFT :
        _x = x - 1;
    }
    if (_x > Consts.BOARD_WIDTH - (Consts.SPACESHIP_WIDTH + Consts.BOARD_MARGIN)) {
      return Consts.BOARD_WIDTH - (Consts.SPACESHIP_WIDTH + Consts.BOARD_MARGIN);
    }
    if (_x < Consts.BOARD_MARGIN) {
      return Consts.BOARD_MARGIN;
    }
    return _x;
}

export default function spaceship(state = {}, action) {

    switch (action.type) {

      case Types.GAME_KEY:
          return Object.assign({}, state, {
              key  : action.key
          });
      break;

      case Types.SPACESHIP_MOVE:
          return Object.assign({}, state, {
              x  : getPositionX(state.x, state.key)
          });
      break;
    }

    return state;
}
