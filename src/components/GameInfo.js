import React from "react";
import './../App.css';

const GameInfo = (props) => {
    return (
        <div id="game-details">
            <div id="description">
                <h1>
                    Fate Zero Memory Game!
                </h1>
                <h2>
                    Click as many distinct images in a row as you can!
                </h2>
            </div>
            <div id="score">
                <h2>
                    Score: {props.score}
                </h2>
                <h2>
                    Best score: {props.bestScore}
                </h2>
            </div>
        </div>
    )
}

export default GameInfo;