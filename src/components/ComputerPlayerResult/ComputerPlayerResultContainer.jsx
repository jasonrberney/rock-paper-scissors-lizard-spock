import React, { Component } from 'react';
import { connect } from 'react-redux';

import ComputerPlayerResult from './ComputerPlayerResult.jsx';

class ComputerPlayerResultContainer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <ComputerPlayerResult choice={this.props.player.computerSelection} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps)(ComputerPlayerResultContainer);