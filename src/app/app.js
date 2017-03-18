import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions/index';
import MainComponent from './components/main';

function mapStateToProps(state) {
    return {
        aliens       : state.aliens,
        game         : state.game,
        spaceship    : state.spaceship,
        shots        : state.shots
    };
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(MainComponent);

export default App;
