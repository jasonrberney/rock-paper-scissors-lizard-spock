import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { playerChoiceImg } from '../../utils/imageSelector.js';

export default function GamePlayerResult(props) {
    let currentImg = playerChoiceImg(props.choice);

    return (
        <div>
            {
                props.choice == undefined
                    ? <CircularProgress color="primary" size={100} style={{'marginLeft': '30px'}} />
                    : <div id="playerImg">{currentImg}</div>
            }
        </div>
    )
};

GamePlayerResult.propTypes = {
    choice: PropTypes.string
}