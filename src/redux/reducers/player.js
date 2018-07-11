const defaultState = {
    playerSelection: undefined,
    computerSelection: undefined,
    playerScore: 0,
    computerScore: 0,
    playerWins: undefined,
    computerWins: undefined,
    tie: false
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
        case 'SET_PLAYER_SCORE':
            return {
                ...state,
                playerScore: action.wins
            }
        case 'SET_COMPUTER_SCORE':
            return {
                ...state,
                computerScore: action.wins
            }
        case 'SET_PLAYER_WIN':
            return {
                ...state,
                playerWins: action.win
            }
        case 'SET_COMPUTER_WIN':
            return {
                ...state,
                computerWins: action.win
            }
        case 'SET_TIE':
            return {
                ...state,
                tie: action.tieGame
            }
        default:
            return state;
    }
}

export default player;