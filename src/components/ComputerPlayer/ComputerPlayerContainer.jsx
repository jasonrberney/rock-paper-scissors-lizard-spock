import React, { Component } from 'react';

import ComputerPlayer from './ComputerPlayer.jsx';

class ComputerPlayerContainer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <ComputerPlayer />
            </div>
        )
    }
}

export default ComputerPlayerContainer;