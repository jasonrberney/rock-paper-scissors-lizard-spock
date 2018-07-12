import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

ResetScore.propTypes = {
    onClick: PropTypes.func.isRequired
}