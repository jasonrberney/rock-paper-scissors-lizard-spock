import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default function ScoreKeeper(props) {
    const noPointer = {cursor: 'default'};
    let winList = [];

    if (props.list) {
        winList = props.list.map((element, index) => {
            return <div key={index}>{`${index + 1}. ${element}`}</div>
        })
    }

    return (
        <div>
            <div>
                <Button variant="fab" color={props.color} style={noPointer}>
                    {props.score}
                </Button>
            </div>
            <div id="scoreKeeperScoreText">
                {winList.reverse()}
            </div>
        </div>
    )
}