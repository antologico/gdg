import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import Consts from './statics/consts';

const defaultState = {
  aliens       : [
      {y: Consts.BOARD_MARGIN, x: 10, direction: 1},
      {y: Consts.BOARD_MARGIN, x: 70, direction: 1},
      {y: Consts.BOARD_MARGIN, x: 130, direction: 1},
      {y: Consts.BOARD_MARGIN, x: 190, direction: 1},
      {y: Consts.BOARD_MARGIN, x: 250, direction: 1},
      {y: Consts.BOARD_MARGIN, x: 310, direction: 1}
  ],
  spaceship    : {
      key      : Consts.KEY_NONE,
      x        : (Consts.BOARD_WIDTH /2),
      y        : (Consts.BOARD_HEIGHT - (Consts.SPACESHIP_WIDTH + Consts.BOARD_MARGIN))
  },
  shots        : [],
  game         : {
      frame  : 0,
      status : Consts.GAME_STOP,
  }
};
const store = createStore(
    reducers,
    defaultState,
    applyMiddleware( thunkMiddleware, routerMiddleware(browserHistory) ));

export default store;
export const history = syncHistoryWithStore(browserHistory, store);
