import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { playerChoiceImg } from '../../utils/imageSelector.js';

export default function ComputerPlayerResult(props) {
    let currentImg = playerChoiceImg(props.choice);

    return (
        <div>
            {
                props.choice == undefined
                    ? <CircularProgress color="secondary" size={100} style={{'marginRight': '30px'}} />
                    : <div id="computerImg">{currentImg}</div>
            }
        </div>
    )
};

ComputerPlayerResult.propTypes = {
    choice: PropTypes.string
}