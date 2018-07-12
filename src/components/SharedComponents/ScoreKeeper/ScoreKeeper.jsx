import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function ScoreKeeper(props) {
    const noPointer = {cursor: 'default'};
    let winList = [];

    if (props.list) {
        winList = props.list.map((element, index) => {
            if (index == 10) {
                return <div key={index}>{`${element}`}</div>
            }
            else {
                return <div key={index}>{`${index + 1}. ${element}`}</div>
            }
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

ScoreKeeper.propTypes = {
    score: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}