import React from 'react';

import rock from '../assets/images/rock.png';
import paper from '../assets/images/paper.jpg';
import scissors from '../assets/images/scissors.jpg';
import lizard from '../assets/images/lizard.jpg';
import spock from '../assets/images/spock.jpg';

export const playerChoiceImg = playerChoice => {
    switch(playerChoice) {
        case "rock":
            return <img src={rock} />;
        case "paper":
            return <img src={paper} />;
        case "scissors":
            return <img src={scissors} />;
        case "lizard":
            return <img src={lizard} />;
        case "spock":
            return <img src={spock} />;
        default:
            console.log("error matching player choice to image")
    }
}