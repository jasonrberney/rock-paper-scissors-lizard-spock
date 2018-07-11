import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default function ScoreKeeper(props) {
    const noPointer = {cursor: 'default'};
    return (
        <div>
            <Button variant="fab" color={props.color} style={noPointer}>
                {props.score}
            </Button>
        </div>
    )
}