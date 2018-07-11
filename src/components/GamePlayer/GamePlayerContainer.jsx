import React, { Component } from 'react';

import GamePlayer from './GamePlayer.jsx';

class GamePlayerContainer extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        switch(e.target.innerText) {
            case "ROCK":
                console.log("rock");
                break;
            case "PAPER":
                console.log("paper");
                break;
            case "SCISSORS":
                console.log("scissors");
                break;
            default:
                console.log("nothing registered as clicked");
        }
    }

    render() {
        return (
            <div>
                <GamePlayer onClick={this.onClick} />
            </div>
        )
    }
}

export default GamePlayerContainer;