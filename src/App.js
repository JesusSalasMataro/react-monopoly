import React from 'react';
import Board from './board.js';
import Card from './card.js';
import Dices from './dices.js';

class App extends React.Component {
	
	constructor() {
		super();
		this.updateCard = this.updateCard.bind(this);
		this.state = {
			cardColor: 'white',
			streetName: ''
		};
	}

  	render() {
		const {cardColor, streetName} = this.state;  		
  		
    	return (
    		<div>
    				<Board updateCard={this.updateCard} />
    				<Card cardColor={cardColor} streetName={streetName} />
    				<Dices />
    		</div>      
    	);
  	}
  
  	updateCard(cardColor, streetName) {  		
  		this.setState({
  			cardColor: cardColor,
  			streetName: streetName
  		});	
  	}
}

export default App;
