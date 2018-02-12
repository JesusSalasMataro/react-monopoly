import React from 'react';
import './tablero.css';


class Tablero extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: this.loadSquares()
		};
	}
	
	render() {
		return (
			<div>
			{
				this.drawBoard()
			}			
			</div>
		);
	}

	getHtmlSquare(square) {
		let className = 'bottomSquare';

		if (square.size === 'big') {

		}

		return <div className="square"></div>;
	}
	
	drawBoard() {
		return (
			<div>
				<div> 			
					<div key="square-20" id="square-20" className="bigSquare"></div>
					<div key="square-21" id="square-21" className="smallVerticalSquare"></div>
					<div key="square-22" id="square-22" className="smallVerticalSquare"></div>
					<div key="square-23" id="square-23" className="smallVerticalSquare"></div>
					<div key="square-24" id="square-24" className="smallVerticalSquare"></div>
					<div key="square-25" id="square-25" className="smallVerticalSquare"></div>
					<div key="square-26" id="square-26" className="smallVerticalSquare"></div>
					<div key="square-27" id="square-27" className="smallVerticalSquare"></div>
					<div key="square-28" id="square-28" className="smallVerticalSquare"></div>
					<div key="square-29" id="square-29" className="smallVerticalSquare"></div>
					<div key="square-30" id="square-30" className="bigSquare"></div>			
				</div>
				<br/>
				<div> 			
					<div key="square-19" id="square-19" className="smallHorizontalSquare"></div>
					<div key="empty-line-1" id="empty-line-1" className="emptyLine"></div>
					<div key="square-31" id="square-31" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-18" id="square-18" className="smallHorizontalSquare"></div>
					<div key="empty-line-2" id="empty-line-2" className="emptyLine"></div>
					<div key="square-32" id="square-32" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-17" id="square-17" className="smallHorizontalSquare"></div>
					<div key="empty-line-3" id="empty-line-3" className="emptyLine"></div>
					<div key="square-33" id="square-33" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-16" id="square-16" className="smallHorizontalSquare"></div>
					<div key="empty-line-4" id="empty-line-4" className="emptyLine"></div>
					<div key="square-34" id="square-34" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-15" id="square-15" className="smallHorizontalSquare"></div>
					<div key="empty-line-5" id="empty-line-5" className="emptyLine"></div>
					<div key="square-35" id="square-35" className="smallHorizontalSquare"></div>
				</div>
				<br/> 			
				<div>
					<div key="square-14" id="square-14" className="smallHorizontalSquare"></div>
					<div key="empty-line-6" id="empty-line-6" className="emptyLine"></div>
					<div key="square-36" id="square-36" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-13" id="square-13" className="smallHorizontalSquare"></div>
					<div key="empty-line-7" id="empty-line-7" className="emptyLine"></div>
					<div key="square-37" id="square-37" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-12" id="square-12" className="smallHorizontalSquare"></div>
					<div key="empty-line-8" id="empty-line-8" className="emptyLine"></div>
					<div key="square-38" id="square-38" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-11" id="square-11" className="smallHorizontalSquare"></div>
					<div key="empty-line-8" id="empty-line-9" className="emptyLine"></div>
					<div key="square-39" id="square-39" className="smallHorizontalSquare"></div>
				</div>
				<br/>
				<div> 			
					<div key="square-10" className="bigSquare"></div>
					<div key="square-9" className="smallVerticalSquare"></div>
					<div key="square-8" className="smallVerticalSquare"></div>
					<div key="square-7" className="smallVerticalSquare"></div>
					<div key="square-6" className="smallVerticalSquare"></div>
					<div key="square-5" className="smallVerticalSquare"></div>
					<div key="square-4" className="smallVerticalSquare"></div>
					<div key="square-3" className="smallVerticalSquare"></div>
					<div key="square-2" className="smallVerticalSquare"></div>
					<div key="square-1" className="smallVerticalSquare"></div>
					<div key="square-0" className="bigSquare"></div>			
				</div>																														
			</div>
		);	
	}

	loadSquares() {
		return [
			{
				name: 'start',
				position: 'bottom',
				size: 'big',
				order: 1
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 2
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 3
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 4
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 5
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 6
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 7
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 8
			},
			{
				name: 'street 1',
				position: 'bottom',
				size: 'small',
				order: 9
			},
			{
				name: 'prison',
				position: 'bottom',
				size: 'big',
				order: 10
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 11
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 12
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 13
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 14
			},
			{
				name: 'street 2',
				position: 'left',
				size: 'small',
				order: 15
			}						
		];
	}
}

export default Tablero;