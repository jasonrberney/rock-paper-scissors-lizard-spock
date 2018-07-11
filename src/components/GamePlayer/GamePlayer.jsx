import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default function GamePlayer(props) {
    return (
        <div id='gamePlayerDiv'>
            <div>
                {props.choice}
            </div>
            <div id='gamePlayerButtonsDiv'>
                <div className="gamePlayerButton">
                    <Button onClick={props.onClick} value="rock" variant="contained" color="primary">
                        Rock
                    </Button>
                </div>
                <div className="gamePlayerButton">
                    <Button onClick={props.onClick} value="paper" variant="contained" color="primary">
                        Paper
                    </Button>
                </div>
                <div className="gamePlayerButton">
                    <Button onClick={props.onClick} value="scissors" variant="contained" color="primary">
                        Scissors
                    </Button>
                </div>
                <div className="gamePlayerButton">
                    <Button onClick={props.onClick} value="lizard" variant="contained" color="primary">
                        Lizard
                    </Button>
                </div>
                <div>
                    <Button onClick={props.onClick} value="spock" variant="contained" color="primary">
                        Spock
                    </Button>
                </div>
            </div>
        </div>
    )
};