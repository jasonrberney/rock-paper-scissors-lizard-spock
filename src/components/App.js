import React from "react";

import HeaderBar from './HeaderBar/HeaderBar.jsx';
import PlayerTitle from './PlayerTitle/PlayerTitle.jsx';
import GamePlayerContainer from './GamePlayer/GamePlayerContainer.jsx'
import GamePlayerResultContainer from './GamePlayerResult/GamePlayerResultContainer.jsx'
import ComputerPlayerResultContainer from './ComputerPlayerResult/ComputerPlayerResultContainer.jsx'
import ScoreKeeperContainer from './ScoreKeeper/ScoreKeeperContainer.jsx'

const App = () => {
    return (
        <div>
            <div>
                <HeaderBar />
            </div>
            <div>
                <PlayerTitle />
            </div>
            <div id="resultsDiv">
                <ComputerPlayerResultContainer />
                <GamePlayerResultContainer />
            </div>
            <div id="gamePlayContainer">
                <div>
                    <GamePlayerContainer />
                </div>
            </div>
            <div>
                <ScoreKeeperContainer />
            </div>
        </div>
    );
};

export default App;
