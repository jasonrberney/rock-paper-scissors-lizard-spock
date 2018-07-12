const setPlayerSelection = selection => ({
    type: 'SET_PLAYER_SELECTION',
    selection
})

const setComputerSelection = selection => ({
    type: 'SET_COMPUTER_SELECTION',
    selection
})

const setPlayerScore = wins => ({
    type: 'SET_PLAYER_SCORE',
    wins
})

const setComputerScore = wins => ({
    type: 'SET_COMPUTER_SCORE',
    wins
})

const setPlayerWin = win => ({
    type: 'SET_PLAYER_WIN',
    win
})

const setComputerWin = win => ({
    type: 'SET_COMPUTER_WIN',
    win
})

const setTie = tieGame => ({
    type: 'SET_TIE',
    tieGame
})

const setPlayerWinSelections = wins => ({
    type: 'SET_PLAYER_WIN_SELECTIONS',
    wins
})

const setComputerWinSelections = wins => ({
    type: 'SET_COMPUTER_WIN_SELECTIONS',
    wins
})

export function resetScoreboard() {
    return (dispatch, getState) => {
        Promise.all([
            dispatch(setPlayerScore(0)),
            dispatch(setComputerScore(0)),
            dispatch(setPlayerWinSelections([])),
            dispatch(setComputerWinSelections([]))
        ])
    }
}

const choices = {
    rock: {name: "Rock", defeats: ["scissors","lizard"]},
    paper: {name: "Paper", defeats: ["rock", "spock"]},
    scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
    lizard: {name: "Lizard", defeats:["paper","spock"]},
    spock: {name: "Spock", defeats:["scissors","rock"]}
};

function resetWinText() {
    return (dispatch, getState) => {
        Promise.all([
            dispatch(setPlayerWin(undefined)),
            dispatch(setComputerWin(undefined))
        ])
    }
}

function addPlayerWinSelection(winner) {
    return (dispatch, getState) => {
        let newWinList = getState().player.playerWinSelections;
        newWinList.push(winner);

        Promise.all([
            dispatch(setPlayerWinSelections(newWinList))
        ])
    }
}

function addComputerWinSelection(winner) {
    return (dispatch, getState) => {
        let newWinList = getState().player.computerWinSelections;
        newWinList.push(winner);

        Promise.all([
            dispatch(setComputerWinSelections(newWinList))
        ])
    }
}

export function playerChooses(selection) {
    return (dispatch, getState) => {
        // reset all text before running the comparison again
        dispatch(resetWinText());

        let computerRandomChoice = selectComputerChoice();
        Promise.all([
            dispatch(setPlayerSelection(selection)),
            dispatch(setComputerSelection(computerRandomChoice))
        ]).then(() => {
            let playerChoice = getState().player.playerSelection;
            let computerChoice = getState().player.computerSelection;

            if (computerChoice == playerChoice) {
                dispatch(setTie(true));
            }
            else {
                let playerDictChoice = choices[playerChoice];
                // if the computer choice does not exist in the players' defeats list, we can assume a loss
                let victory = playerDictChoice.defeats.indexOf(computerChoice) > -1;
                
                if (victory) {
                    let currentPlayerScore = getState().player.playerScore;
                    currentPlayerScore == 10 
                        ? (
                            dispatch(setPlayerScore(1)), 
                            dispatch(setComputerScore(0)),
                            dispatch(setPlayerWinSelections([playerChoice])),
                            dispatch(setComputerWinSelections([]))
                          ) 
                        : (dispatch(setPlayerScore(currentPlayerScore + 1)), dispatch(addPlayerWinSelection(playerChoice)));
                    dispatch(setPlayerWin(true));
                    dispatch(setComputerWin(false));
                }
                else {
                    let currentComputerScore = getState().player.computerScore;
                    currentComputerScore == 10 
                        ? (
                            dispatch(setComputerScore(1)), 
                            dispatch(setPlayerScore(0)),
                            dispatch(setComputerWinSelections([computerChoice])),
                            dispatch(setPlayerWinSelections([]))
                          ) 
                        : (dispatch(setComputerScore(currentComputerScore + 1)), dispatch(addComputerWinSelection(computerChoice)));
                    dispatch(setPlayerWin(false));
                    dispatch(setComputerWin(true));
                }   
            }
        })
    }
}

function selectComputerChoice() {
    // generate random number for computer choice
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    switch(randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        case 4:
            return "lizard";
        case 5:
            return "spock";
        default:
            console.log("error: no match for computer.")
            return randomNumber;
    }
}
