import React from 'react';
import './card.css';

class Card extends React.Component {
	
	constructor(props) {
		super(props);
		this.state =
		{
			cardColor: 'white',
			streetName: ''	
		};	
	}

	render() {
		return (
			<div className="card">
				<div className="cardColor" style={{backgroundColor: this.state.cardColor}}></div>
				<div>{this.state.streetName}</div>
			</div>
		);
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			cardColor: nextProps.cardColor,
			streetName: nextProps.streetName
		});
	}
}

export default Card;