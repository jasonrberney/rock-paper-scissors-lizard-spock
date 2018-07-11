import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ComputerPlayer(props) {
    return (
        <div>
            {
                props.choice == undefined
                    ? <CircularProgress color="secondary" size={100} />
                    : props.choice
            }
        </div>
    )
};