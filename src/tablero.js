import React from 'react';

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
					this.state.squares.map((square) =>
						this.getHtmlSquare(square)
					)
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