import React, { Component } from 'react';
import { connect } from 'react-redux';

import ComputerPlayer from './ComputerPlayer.jsx';

class ComputerPlayerContainer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <ComputerPlayer choice={this.props.player.computerSelection} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps)(ComputerPlayerContainer);