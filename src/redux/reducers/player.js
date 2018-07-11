const defaultState = {
    playerSelection: undefined,
    computerSelection: undefined
}

const player = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_PLAYER_SELECTION':
            return {
                ...state,
                playerSelection: action.selection
            }
        case 'SET_COMPUTER_SELECTION':
            return {
                ...state,
                computerSelection: action.selection
            }
        default:
            return state;
    }
}

export default player;