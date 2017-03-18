import Types from '../statics/types';
import Consts from '../statics/consts';

function updateAlienMovement(oldAlien) {
    let alien = Object.assign({}, oldAlien);
    if (alien.x > Consts.BOARD_WIDTH - (Consts.ALIEN_WIDTH + Consts.BOARD_MARGIN)) {
        alien.x = Consts.BOARD_WIDTH - (Consts.ALIEN_WIDTH + Consts.BOARD_MARGIN);
        alien.direction *= -1;
        alien.y += Consts.ALIEN_DOWN_STEP;
    } else if (alien.x < Consts.BOARD_MARGIN) {
        alien.x = Consts.BOARD_MARGIN;
        alien.direction *= -1;
        alien.y += Consts.ALIEN_DOWN_STEP;
    }

    alien.x += alien.direction * Consts.ALIEN_MOVE_STEP;
    return alien;
}

function aliensNotShoted(alien, shots) {
  for(const k in shots) {
    const shot = shots[k]
    if ((shot.x > alien.x) && (shot.x < alien.x +  Consts.ALIEN_WIDTH) &&
        (shot.y > alien.y) && (shot.y < alien.y +  Consts.ALIEN_HEIGHT)) {
          return false;
    }
  }
  return true;
}

function updateAlien(alien, shots) {
    let newAlien = Object.assign({}, alien);
    if (aliensNotShoted(newAlien, shots)) {
        return updateAlienMovement(newAlien);
    }
    return null;
}

export default function aliens(state = {}, action) {
    switch (action.type) {
      case Types.ALIEN_DESTROY:
          return aliens
        break;
      case Types.ALIENS_MOVE:
          let aliens = [];
          for(const k in state) {
            const alien = updateAlien(state[k], action.shots);
            if (alien) {
              aliens[k] = alien;
            }
          }
          return aliens
        break;
    }
    return state;
}
