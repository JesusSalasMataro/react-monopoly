import React from 'react';
import './dices.css';
import imgDices from './images/dices.gif';

class Dices extends React.Component {

	render() {
		return (
			<div>
				<img className="divDices" src={imgDices} alt="" />
			</div>
		);
	}
}

export default Dices;