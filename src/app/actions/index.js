import * as aliens from './aliens';
import * as game from './game';
import * as spaceship from './spaceship';
import * as shots from './shots';

const actions = Object.assign(
    aliens,
    game,
    shots,
    spaceship
);

export default actions;
