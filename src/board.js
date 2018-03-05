import React from 'react';
import './board.css';
import Square from './square.js';
import imgMonopoly from './images/monopoly.jpg';


class Board extends React.Component {
	constructor(props) {
		super(props);
		this.updateCard = this.updateCard.bind(this);
		this.state = {
			squares: this.loadSquares()			
		};
	}
	
	render() {
		return (
			<div className="board">
			{
				this.drawBoard()
			}			
			</div>
		);
	}
	
	updateCard(squareNumber) {			
		const square = this.state.squares.find(s => s.order === squareNumber);
		this.props.updateCard(square.color, square.name);
	}
	
	drawBoard() {
		return (					
			<table>
				<tbody>
					<tr>
						<td colspan="11">
							<table>
								<tbody>
									<tr>			
										<Square name="Parking" order={20} position="up" color="white" size="big" updateCard={this.updateCard} />
										<Square order={21} position="up" color="red" size="small" updateCard={this.updateCard} />
										<Square order={22} position="up" color="red" size="small" updateCard={this.updateCard} />
										<Square order={23} position="up" color="white" size="small" updateCard={this.updateCard} />
										<Square order={24} position="up" color="red" size="small" updateCard={this.updateCard} />
										<Square order={25} position="up" color="white" size="small" updateCard={this.updateCard} />
										<Square order={26} position="up" color="yellow" size="small" updateCard={this.updateCard} />
										<Square order={27} position="up" color="yellow" size="small" updateCard={this.updateCard} />
										<Square order={28} position="up" color="white" size="small" updateCard={this.updateCard} />
										<Square order={29} position="up" color="yellow" size="small" updateCard={this.updateCard} />
										<Square name="Ir a la cárcel" order={30} position="up" color="white" size="big" updateCard={this.updateCard} />
									</tr>
								</tbody>
							</table>			
						</td>									
					</tr>
					<tr>
						<td>
							<table>
								<tbody>
									<tr>
										<Square order={19} position="left" color="orange" size="small" updateCard={this.updateCard} />										
									</tr>
									<tr>
										<Square order={18} position="left" color="white" size="small" updateCard={this.updateCard} />													
									</tr>
									<tr>
										<Square order={17} position="left" color="orange" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={16} position="left" color="orange" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={15} position="left" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={14} position="left" color="brown" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={13} position="left" color="brown" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={12} position="left" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={11} position="left" color="brown" size="small" updateCard={this.updateCard} />
									</tr>																																																																																									
								</tbody>
							</table>						
						</td>
						<td colspan="9" className="boardCenter">
							<img src={imgMonopoly} alt=""/>
						</td>
						<td>
							<table>
								<tbody>
									<tr>
										<Square order={31} position="right" color="green" size="small" updateCard={this.updateCard} />										
									</tr>
									<tr>
										<Square order={32} position="right" color="white" size="small" updateCard={this.updateCard} />													
									</tr>
									<tr>
										<Square order={33} position="right" color="green" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={34} position="right" color="green" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={35} position="right" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={36} position="right" color="blue" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={37} position="right" color="blue" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={38} position="right" color="white" size="small" updateCard={this.updateCard} />
									</tr>
									<tr>
										<Square order={39} position="right" color="blue" size="small" updateCard={this.updateCard} />
									</tr>									
								</tbody>
							</table>						
						</td>
					</tr>		
					<tr>
						<td colspan="11">
							<table>
								<tbody>
									<tr>			
										<Square name="Cárcel" order={10} position="down" color="white" size="big" updateCard={this.updateCard} />						
										<Square order={9} position="down" color="violet" size="small" updateCard={this.updateCard} />
										<Square order={8} position="down" color="violet" size="small" updateCard={this.updateCard} />
										<Square order={7} position="down" color="white" size="small" updateCard={this.updateCard} />
										<Square order={6} position="down" color="violet" size="small" updateCard={this.updateCard} />
										<Square order={5} position="down" color="white" size="small" updateCard={this.updateCard} />
										<Square order={4} position="down" color="gray" size="small" updateCard={this.updateCard} />
										<Square order={3} position="down" color="white" size="small" updateCard={this.updateCard} />
										<Square order={2} position="down" color="gray" size="small" updateCard={this.updateCard} />
										<Square order={1} position="down" color="gray" size="small" updateCard={this.updateCard} />
										<Square name="Salida" order={0} position="down" color="white" size="big" updateCard={this.updateCard} />
									</tr>
								</tbody>
							</table>			
						</td>						
					</tr>
				</tbody>																														
			</table>
		);	
	}

	loadSquares() {
		return [
			{
				name: 'Salida',
				position: 'bottom',
				size: 'big',
				order: 0,
				color: 'white'
			},
			{
				name: 'Calle de Poniente',
				position: 'bottom',
				size: 'small',
				order: 1,
				color: 'gray'
			},			
			{
				name: 'Calle de Ferrer Bassa',
				position: 'bottom',
				size: 'small',
				order: 2,
				color: 'gray'
			},
			{
				name: 'Suerte',
				position: 'bottom',
				size: 'small',
				order: 3,
				color: 'white'
			},
			{
				name: 'Calle del Gregal',
				position: 'bottom',
				size: 'small',
				order: 4,
				color: 'gray'
			},
			{
				name: 'Central de Autobuses',
				position: 'bottom',
				size: 'small',
				order: 5,
				color: 'white'
			},
			{
				name: 'Calle Tánger',
				position: 'bottom',
				size: 'small',
				order: 6,
				color: 'violet'
			},
			{
				name: 'Impuestos',
				position: 'bottom',
				size: 'small',
				order: 7,
				color: 'white'
			},
			{
				name: 'Calle Badajoz',
				position: 'bottom',
				size: 'small',
				order: 8,
				color: 'violet'
			},
			{
				name: 'Calle Bolivia',
				position: 'bottom',
				size: 'small',
				order: 9,
				color: 'violet'
			},
			{
				name: 'Cárcel',
				position: 'bottom',
				size: 'big',
				order: 10,
				color: 'white'
			},
			{
				name: 'Calle Sicilia',
				position: 'left',
				size: 'small',
				order: 11,
				color: 'brown'
			},
			{
				name: 'Suerte',
				position: 'left',
				size: 'small',
				order: 12,
				color: 'white'
			},
			{
				name: 'Calle Nápoles',
				position: 'left',
				size: 'small',
				order: 13,
				color: 'brown'
			},
			{
				name: 'Calle Casp',
				position: 'left',
				size: 'small',
				order: 14,
				color: 'brown'
			},
			{
				name: 'Metro de Barcelona',
				position: 'left',
				size: 'small',
				order: 15,
				color: 'white'
			},
			{
				name: 'Travesera de les Corts',
				position: 'left',
				size: 'small',
				order: 16,
				color: 'orange'
			},
			{
				name: 'Avenida Josep Tarradelles',
				position: 'left',
				size: 'small',
				order: 17,
				color: 'orange'
			},
			{
				name: 'Impuestos',
				position: 'left',
				size: 'small',
				order: 18,
				color: 'white'
			},
			{
				name: 'Calle Berlín',
				position: 'left',
				size: 'small',
				order: 19,
				color: 'orange'
			},
			{			
				name: 'Parking',
				position: 'up',
				size: 'big',
				order: 20,
				color: 'white'
			},
			{			
				name: 'Calle Numancia',
				position: 'up',
				size: 'small',
				order: 21,
				color: 'red'
			},
			{			
				name: 'Calle Córcega',
				position: 'up',
				size: 'small',
				order: 22,
				color: 'red'
			},
			{			
				name: 'Suerte',
				position: 'up',
				size: 'small',
				order: 23,
				color: 'white'
			},
			{			
				name: 'Calle Aribau',
				position: 'up',
				size: 'small',
				order: 24,
				color: 'red'
			},
			{			
				name: 'Puerto de Barcelona',
				position: 'up',
				size: 'small',
				order: 25,
				color: 'white'
			},
			{			
				name: 'Calle Consejo de Ciento',
				position: 'up',
				size: 'small',
				order: 26,
				color: 'yellow'
			},
			{			
				name: 'Calle Diputación',
				position: 'up',
				size: 'small',
				order: 27,
				color: 'yellow'
			},
			{			
				name: 'Impuestos',
				position: 'up',
				size: 'small',
				order: 28,
				color: 'white'
			},
			{			
				name: 'Calle Aragón',
				position: 'up',
				size: 'small',
				order: 29,
				color: 'yellow'
			},
			{			
				name: 'Ir a la cárcel',
				position: 'up',
				size: 'big',
				order: 30,
				color: 'white'
			},
			{			
				name: 'Avenida de Pedralbes',
				position: 'right',
				size: 'small',
				order: 31,
				color: 'green'
			},
			{			
				name: 'Suerte',
				position: 'right',
				size: 'small',
				order: 32,
				color: 'white'
			},
			{			
				name: 'Paseo de la Bonanova',
				position: 'right',
				size: 'small',
				order: 33,
				color: 'green'
			},
			{			
				name: 'Vía Augusta',
				position: 'right',
				size: 'small',
				order: 34,
				color: 'green'
			},
			{			
				name: 'Aeropuerto',
				position: 'right',
				size: 'small',
				order: 35,
				color: 'white'
			},
			{			
				name: 'Las Ramblas',
				position: 'right',
				size: 'small',
				order: 36,
				color: 'blue'
			},
			{			
				name: 'Gran Vía',
				position: 'right',
				size: 'small',
				order: 37,
				color: 'blue'
			},
			{			
				name: 'Impuestos',
				position: 'right',
				size: 'small',
				order: 38,
				color: 'white'
			},
			{			
				name: 'Paseo de Gracia',
				position: 'right',
				size: 'small',
				order: 39,
				color: 'blue'
			}
		];
	}
}

export default Board;