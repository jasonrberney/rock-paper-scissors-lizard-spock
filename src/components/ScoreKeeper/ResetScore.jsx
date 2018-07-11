import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default function ResetScore(props) {
    return (
        <div id="resetScoreDiv">
            <Button variant="contained" onClick={props.onClick} >
                Reset Score
            </Button>
        </div>
    )
}