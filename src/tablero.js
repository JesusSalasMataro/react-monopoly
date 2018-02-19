import React from 'react';
import './tablero.css';


class Tablero extends React.Component {
	constructor(props) {
		super(props);
		this.actualizarFicha = this.actualizarFicha.bind(this);
		this.state = {
			squares: this.loadSquares()			
		};
	}
	
	render() {
		return (
			<div className="tablero">
			{
				this.drawBoard()
			}			
			</div>
		);
	}
	
	actualizarFicha(squareNumber) {		
		const color = this.state.squares.find(s => s.order === squareNumber).color;
		this.props.actualizarFicha(color);
	}
	
	drawBoard() {
		return (					
			<table>
				<tbody>
					<tr> 			
						<td key="square-20" id="square-20" className="bigSquare">
								<span className="texto">PARKING</span>					
						</td>
						<td key="square-21" id="square-21" className="smallVerticalSquare"
							onMouseEnter={() => this.actualizarFicha(21)}>
							<div className="upperSquareContent"></div>
							<div className={['upperSquareHeader', 'streetGroupFive'].join(' ')}></div>
						</td>
						<td key="square-22" id="square-22" className="smallVerticalSquare">
							<div className="upperSquareContent"></div>
							<div className={['upperSquareHeader', 'streetGroupFive'].join(' ')}></div>					
						</td>
						<td key="square-23" id="square-23" className="smallVerticalSquare"></td>
						<td key="square-24" id="square-24" className="smallVerticalSquare">
							<div className="upperSquareContent"></div>
							<div className={['upperSquareHeader', 'streetGroupFive'].join(' ')}></div>					
						</td>
						<td key="square-25" id="square-25" className="smallVerticalSquare"></td>
						<td key="square-26" id="square-26" className="smallVerticalSquare">
							<div className="upperSquareContent"></div>
							<div className={['upperSquareHeader', 'streetGroupSix'].join(' ')}></div>					
						</td>
						<td key="square-27" id="square-27" className="smallVerticalSquare">
							<div className="upperSquareContent"></div>
							<div className={['upperSquareHeader', 'streetGroupSix'].join(' ')}></div>					
						</td>
						<td key="square-28" id="square-28" className="smallVerticalSquare"></td>
						<td key="square-29" id="square-29" className="smallVerticalSquare">
							<div className="upperSquareContent"></div>
							<div className={['upperSquareHeader', 'streetGroupSix'].join(' ')}></div>					
						</td>
						<td key="square-30" id="square-30" className="bigSquare">
							<span className="texto">IR A LA CÁRCEL</span>					
						</td>			
					</tr>
					<tr> 			
						<td key="square-19" id="square-19" className="smallHorizontalSquare"
							onMouseEnter={() => this.actualizarFicha(19)}>						
							<div className={['leftSquareHeader', 'streetGroupFour'].join(' ')}></div>
							<div className="leftSquareContent"></div>					
						</td>
						<td key="empty-line-1" id="empty-line-1" colSpan="9"></td>
						<td key="square-31" id="square-31" className="smallHorizontalSquare">
							<div className={['rightSquareHeader', 'streetGroupSeven'].join(' ')}></div>
							<div className="rightSquareContent"></div>					
						</td>
					</tr>				
					<tr> 			
						<td key="square-18" id="square-18" className="smallHorizontalSquare"></td>
						<td key="empty-line-2" id="empty-line-2" colSpan="9"></td>
						<td key="square-32" id="square-32" className="smallHorizontalSquare"></td>
					</tr>				
					<tr> 			
						<td key="square-17" id="square-17" className="smallHorizontalSquare">
							<div className={['leftSquareHeader', 'streetGroupFour'].join(' ')}></div>
							<div className="leftSquareContent"></div>					
						</td>
						<td key="empty-line-3" id="empty-line-3" colSpan="9"></td>
						<td key="square-33" id="square-33" className="smallHorizontalSquare">
							<div className={['rightSquareHeader', 'streetGroupSeven'].join(' ')}></div>
							<div className="rightSquareContent"></div>					
						</td>
					</tr>				
					<tr> 			
						<td key="square-16" id="square-16" className="smallHorizontalSquare">
							<div className={['leftSquareHeader', 'streetGroupFour'].join(' ')}></div>
							<div className="leftSquareContent"></div>					
						</td>
						<td key="empty-line-4" id="empty-line-4" colSpan="9"></td>
						<td key="square-34" id="square-34" className="smallHorizontalSquare">
							<div className={['rightSquareHeader', 'streetGroupSeven'].join(' ')}></div>
							<div className="rightSquareContent"></div>					
						</td>
					</tr>				
					<tr> 			
						<td key="square-15" id="square-15" className="smallHorizontalSquare"></td>
						<td key="empty-line-5" id="empty-line-5" colSpan="9"></td>
						<td key="square-35" id="square-35" className="smallHorizontalSquare"></td>
					</tr>				 			
					<tr>
						<td key="square-14" id="square-14" className="smallHorizontalSquare"
							onMouseEnter={() => this.actualizarFicha(14)}>
							<div className={['leftSquareHeader', 'streetGroupThree'].join(' ')}></div>
							<div className="leftSquareContent"></div>					
						</td>
						<td key="empty-line-6" id="empty-line-6" colSpan="9"></td>
						<td key="square-36" id="square-36" className="smallHorizontalSquare">
							<div className={['rightSquareHeader', 'streetGroupEight'].join(' ')}></div>
							<div className="rightSquareContent"></div>					
						</td>
					</tr>				
					<tr> 			
						<td key="square-13" id="square-13" className="smallHorizontalSquare">
							<div className={['leftSquareHeader', 'streetGroupThree'].join(' ')}></div>
							<div className="leftSquareContent"></div>					
						</td>
						<td key="empty-line-7" id="empty-line-7" colSpan="9"></td>
						<td key="square-37" id="square-37" className="smallHorizontalSquare">
							<div className={['rightSquareHeader', 'streetGroupEight'].join(' ')}></div>
							<div className="rightSquareContent"></div>					
						</td>
					</tr>				
					<tr> 			
						<td key="square-12" id="square-12" className="smallHorizontalSquare"></td>
						<td key="empty-line-8" id="empty-line-8" colSpan="9"></td>
						<td key="square-38" id="square-38" className="smallHorizontalSquare"></td>
					</tr>				
					<tr> 			
						<td key="square-11" id="square-11" className="smallHorizontalSquare">
							<div className={['leftSquareHeader', 'streetGroupThree'].join(' ')}></div>
							<div className="leftSquareContent"></div>					
						</td>
						<td key="empty-line-8" id="empty-line-9" colSpan="9"></td>
						<td key="square-39" id="square-39" className="smallHorizontalSquare">
							<div className={['rightSquareHeader', 'streetGroupEight'].join(' ')}></div>
							<div className="rightSquareContent"></div>					
						</td>
					</tr>				
					<tr> 			
						<td key="square-10" className="bigSquare">
							<span className="texto">CÁRCEL</span>					
						</td>
						<td key="square-9" className="smallVerticalSquare">
							<div className={['downSquareHeader', 'streetGroupTwo'].join(' ')}></div>
							<div className="downSquareContent"></div>				
						</td>
						<td key="square-8" className="smallVerticalSquare">
							<div className={['downSquareHeader', 'streetGroupTwo'].join(' ')}></div>
							<div className="downSquareContent"></div>					
						</td>
						<td key="square-7" className="smallVerticalSquare"></td>
						<td key="square-6" className="smallVerticalSquare">
							<div className={['downSquareHeader', 'streetGroupTwo'].join(' ')}></div>
							<div className="downSquareContent"></div>					
						</td>
						<td key="square-5" className="smallVerticalSquare"></td>
						<td key="square-4" className="smallVerticalSquare">
							<div className={['downSquareHeader', 'streetGroupOne'].join(' ')}></div>
							<div className="downSquareContent"></div>				
						</td>
						<td key="square-3" className="smallVerticalSquare"></td>
						<td key="square-2" className="smallVerticalSquare">
							<div className={['downSquareHeader', 'streetGroupOne'].join(' ')}></div>
							<div className="downSquareContent"></div>					
						</td>
						<td key="square-1" className="smallVerticalSquare">
							<div className={['downSquareHeader', 'streetGroupOne'].join(' ')}></div>
							<div className="downSquareContent"></div>					
						</td>
						<td key="square-0" className="bigSquare">
							<p className="texto">SALIDA</p>
							<p className="texto">Cobras 200</p>
						</td>			
					</tr>
				</tbody>																														
			</table>
		);	
	}

	loadSquares() {
		return [
			{
				name: 'start',
				position: 'bottom',
				size: 'big',
				order: 0,
				color: 'white'
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 1,
				color: 'gray'
			},			
			{
				name: 'street 2',
				position: 'bottom',
				size: 'small',
				order: 2,
				color: 'gray'
			},
			{
				name: 'street 3',
				position: 'bottom',
				size: 'small',
				order: 3,
				color: 'white'
			},
			{
				name: 'street 4',
				position: 'bottom',
				size: 'small',
				order: 4,
				color: 'gray'
			},
			{
				name: 'street 5',
				position: 'bottom',
				size: 'small',
				order: 5,
				color: 'white'
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 6,
				color: 'violet'
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 7,
				color: 'white'
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 8,
				color: 'violet'
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 9,
				color: 'violet'
			},
			{
				name: 'prison',
				position: 'bottom',
				size: 'big',
				order: 10,
				color: 'white'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 11,
				color: 'brown'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 12,
				color: 'white'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 13,
				color: 'brown'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 14,
				color: 'brown'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 15,
				color: 'white'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 16,
				color: 'orange'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 17,
				color: 'orange'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 18,
				color: 'white'
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 19,
				color: 'orange'
			},
			{			
				name: 'street 3',
				position: 'up',
				size: 'big',
				order: 20,
				color: 'white'
			},
			{			
				name: 'street 3',
				position: 'up',
				size: 'small',
				order: 21,
				color: 'red'
			}										
		];
	}
}

export default Tablero;