import React from 'react';
import './card.css';
import imgSuerte from './images/suerte.jpg';
import imgImpuestos from './images/impuestos.jpg';
import imgInfraestructuras from './images/infraestructuras.jpg';
import imgSalida from './images/salida.jpg';
import imgCarcel from './images/carcel.jpg';
import imgParking from './images/parking.jpg';
import imgIrCarcel from './images/ir_carcel.jpg';

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
		const {cardColor, streetName} = this.state;
		let imageName;
		
		if (streetName === 'Suerte') {
			imageName = imgSuerte;		
		}
		else if (streetName === 'Impuestos') {
			imageName = imgImpuestos;		
		}
		else if (streetName.startsWith('Metro') ||
					streetName.startsWith('Aeropuerto') ||
					streetName.startsWith('Central')	||
					streetName.startsWith('Puerto')) {
			imageName = imgInfraestructuras;
		}
		else if (streetName === 'Salida') {
			imageName = imgSalida;		
		}
		else if (streetName === 'Cárcel') {
			imageName = imgCarcel;
		}
		else if (streetName === 'Parking') {
			imageName = imgParking;		
		}
		else if (streetName === 'Ir a la cárcel') {
			imageName = imgIrCarcel;		
		}
		
		return (
			<div className="card">
				<div><h4>Ficha</h4></div>
				<div className="cardColor" style={{backgroundColor: cardColor}}></div>
				<div className="cardName"><span>{streetName}</span></div>
				<br/>
				<div>
					<img src={imageName} alt=""/>				
				</div>
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