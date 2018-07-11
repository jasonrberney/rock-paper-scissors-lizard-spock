import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default function GamePlayer(props) {
    return (
        <div id='gamePlayerDiv'>
            <Button onClick={props.onClick} value="rock" variant="contained" color="primary">
                Rock
            </Button>
            <Button onClick={props.onClick} value="paper" variant="contained" color="primary">
                Paper
            </Button>
            <Button onClick={props.onClick} value="scissors" variant="contained" color="primary">
                Scissors
            </Button>
        </div>
    )
};