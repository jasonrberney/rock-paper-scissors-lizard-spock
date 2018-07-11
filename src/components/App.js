import React from "react";

import GamePlayerContainer from './GamePlayer/GamePlayerContainer.jsx'
import ComputerPlayerContainer from './ComputerPlayer/ComputerPlayerContainer.jsx'
import ScoreKeeperContainer from './ScoreKeeper/ScoreKeeperContainer.jsx'
import img from "../assets/images/react_logo_512x512.png";

const App = () => {
    return (
        <div>
            <div id="gamePlayContainer">
                <div>
                    <ComputerPlayerContainer />
                </div>
                <div>
                    <img
                        className="image"
                        style={{ margin: "0.5em" }}
                        height="40"
                        width="40"
                        src={img}
                        alt="React Logo"
                    />
                </div>
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
