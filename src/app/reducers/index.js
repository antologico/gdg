import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import aliens from './aliens';
import game from './game';
import spaceship from './spaceship';
import shots from './shots';

const reducers = combineReducers({
    aliens,
    game,
    shots,
    spaceship,
    // routes
    routing: routerReducer
});

export default reducers;
