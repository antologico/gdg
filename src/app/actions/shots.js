import Types from '../statics/types';

export function shot(x, y) {
    return {
        type: Types.SHOT_START,
        x,
        y
    };
}

export function moveShots() {
    return {
        type: Types.SHOTS_MOVE
    };
}
