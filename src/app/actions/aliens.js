import Types from '../statics/types';

export function moveAliens(shots) {
    return {
        type: Types.ALIENS_MOVE,
        shots
    };
}
