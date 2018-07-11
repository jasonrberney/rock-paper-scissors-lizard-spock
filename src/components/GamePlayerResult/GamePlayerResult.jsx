import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { playerChoiceImg } from '../../utils/imageSelector.js';

export default function GamePlayerResult(props) {
    let currentImg = playerChoiceImg(props.choice);

    return (
        <div>
            {
                props.choice == undefined
                    ? <CircularProgress color="primary" size={100} />
                    : <div className="choiceImg">{currentImg}</div>
            }
        </div>
    )
};