const setPlayerSelection = selection => ({
    type: 'SET_PLAYER_SELECTION',
    selection
})

const setComputerSelection = selection => ({
    type: 'SET_COMPUTER_SELECTION',
    selection
})

export function playerChooses(selection) {
    return (dispatch, getState) => {
        Promise.all([
            dispatch(setPlayerSelection(selection))
        ]).then(() => {
            let computerRandomChoice = Math.floor(Math.random() * 6) + 1;
            dispatch(setComputerSelection(computerRandomChoice));
        })
    }
}