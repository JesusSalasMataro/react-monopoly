import React from 'react';
import Board from './board.js';
import GameController from './gameController.js';

class App extends React.Component {
	
	constructor() {
		super();
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
					<GameController cardColor={cardColor} streetName={streetName} />
    		</div>      		    
    	);
  	}
  
  	updateCard = (cardColor, streetName) => {  		
  		this.setState({
  			cardColor: cardColor,
  			streetName: streetName
  		});	
  	}
}

export default App;
