import Types from '../statics/types';
import Consts from '../statics/consts';

export default function shots(state = {}, action) {

    switch (action.type) {

      case Types.SHOT_START:
          let newShots = state.slice();
          newShots.push({
              x: action.x,
              y: action.y
            });
          return newShots
          break;

      case Types.SHOTS_MOVE:
          let shots = [];
          for(const k in state) {
            let shot = state[k];
            shot.y -= 1;
            if (shot.y > 0) {
              shots.push(shot);
            }
          }
          return shots;
          break;
    }

    return state;
}
