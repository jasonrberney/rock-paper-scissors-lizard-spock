import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { playerChoiceImg } from '../../utils/imageSelector.js';

export default function ComputerPlayerResult(props) {
    let currentImg = playerChoiceImg(props.choice);

    return (
        <div>
            {
                props.choice == undefined
                    ? <CircularProgress color="secondary" size={100} style={{'margin-right': '30px'}} />
                    : <div id="computerImg">{currentImg}</div>
            }
        </div>
    )
};