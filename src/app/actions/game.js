import Types from '../statics/types';
import Consts from '../statics/consts';

import { moveAliens } from './aliens';
import { moveSpaceship } from './spaceship';
import { moveShots } from './shots';

export function gotoNextFrame() {
  return {
      type: Types.GAME_GOTO_NEXT_FRAME
  }
}

export function initGame() {
  return {
      type: Types.GAME_START
  }
}

export function testEnd(aliens) {
  if (aliens.length == 0) {
      console.log("win");
    return {
        type: Types.GAME_WIN
    }
  }

  for(const k in aliens) {
    const alien = aliens[k];
    if (alien.alive &&
      ((alien.y + Consts.ALIEN_HEIGHT) > (Consts.BOARD_HEIGHT - Consts.CITY_HEIGHT))) {
        return {
            type: Types.GAME_OVER
        }
    }
  }
  return {
      type: Types.GAME_START
  }
}

export function iterate(status, aliens, shots) {
  if (status == Consts.GAME_PLAY) {
    return dispatch => {
        dispatch(moveAliens(shots));
        dispatch(moveSpaceship());
        dispatch(moveShots());
        dispatch(testEnd(aliens));
        return dispatch(gotoNextFrame());
    }
  }
  return gotoNextFrame();
}
