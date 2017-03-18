import Types from '../statics/types';
import Consts from '../statics/consts';

export function moveSpaceship() {
    return {
        type: Types.SPACESHIP_MOVE
    };
}

export function keyRight() {
    return {
        type: Types.GAME_KEY,
        key: Consts.KEY_RIGHT
    }
}

export function keyLeft() {
    return {
        type: Types.GAME_KEY,
        key: Consts.KEY_LEFT
    }
}

export function keyNone() {
    return {
        type: Types.GAME_KEY,
        key: Consts.KEY_NONE
    }
}
