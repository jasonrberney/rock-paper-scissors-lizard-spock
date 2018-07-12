import React, { Component } from 'react';

export default function PlayerTitle() {
    return (
        <div id="playerTitleDiv">
            <div id="computerTitleText" className="playerTitleText">
                COMPUTER
            </div>
            <div id="playerTitleText" className="playerTitleText">
                YOUR PICK!
            </div>
        </div>
    )
};