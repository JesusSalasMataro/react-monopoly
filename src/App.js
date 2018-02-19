import React from 'react';
import Tablero from './tablero.js';
import Ficha from './ficha.js';

class App extends React.Component {
	
	constructor() {
		super();
		this.actualizarFicha = this.actualizarFicha.bind(this);
		this.state = {
			colorFicha: 'white'		
		};
	}

  	render() {
    	return (
    		<div>
    				<Tablero actualizarFicha={this.actualizarFicha} />
    				<Ficha colorFicha={this.state.colorFicha} />
    		</div>      
    	);
  	}
  
  	actualizarFicha(colorFicha) {
  		this.setState({
  			colorFicha: colorFicha
  		});	
  	}
}

export default App;
