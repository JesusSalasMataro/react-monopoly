import React from 'react';
import Card from './card.js';
import Dices from './dices.js';
import './gameController.css';

class GameController extends React.Component {

    render() {
        return (
            <div id="containerGameController">
                <Card cardColor={this.props.cardColor} streetName={this.props.streetName} />
                <Dices />
            </div>
        );
    }
}

export default GameController;