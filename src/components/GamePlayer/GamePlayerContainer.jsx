import React, { Component } from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux';

import GamePlayer from './GamePlayer.jsx';
import { playerChooses } from '../../redux/actions/playerActions';

class GamePlayerContainer extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        switch(e.target.innerText) {
            case "ROCK":
                console.log("rock");
                this.props.dispatch(playerChooses("rock"));
                break;
            case "PAPER":
                console.log("paper");
                this.props.dispatch(playerChooses("paper"));
                break;
            case "SCISSORS":
                console.log("scissors");
                this.props.dispatch(playerChooses("scissors"));
                break;
            case "LIZARD":
                console.log("lizard");
                this.props.dispatch(playerChooses("lizard"));
                break;
            case "SPOCK":
                console.log("spock");
                this.props.dispatch(playerChooses("spock"));
                break;
            default:
                console.log("nothing registered as clicked");
        }
    }

    render() {
        return (
            <div id="gamePlayerContainerDiv">
                <GamePlayer choice={this.props.player.playerSelection} onClick={this.onClick} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps)(GamePlayerContainer);