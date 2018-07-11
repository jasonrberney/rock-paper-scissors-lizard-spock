import React, { Component } from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux';

import GamePlayerResult from './GamePlayerResult.jsx';

class GamePlayerResultContainer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <GamePlayerResult choice={this.props.player.playerSelection} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps)(GamePlayerResultContainer);