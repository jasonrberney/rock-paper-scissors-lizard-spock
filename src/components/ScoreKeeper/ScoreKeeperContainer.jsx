import React, { Component } from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux';

import ScoreKeeper from '../SharedComponents/ScoreKeeper/ScoreKeeper.jsx';

class ScoreKeeperContainer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div id="scoreKeeperContainerDiv">
                <div id="scoreKeeperScoreboardText">
                    SCOREBOARD
                </div>
                <div id="scoreBoardDiv">
                    <ScoreKeeper color={"secondary"} score={this.props.player.computerScore} />
                    <ScoreKeeper color={"primary"} score={this.props.player.playerScore} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps)(ScoreKeeperContainer);