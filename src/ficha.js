import React from 'react';
import './ficha.css';

class Ficha extends React.Component {
	
	constructor(props) {
		super(props);
		this.state =
		{
			colorFicha: 'white'			
		};	
	}

	render() {
		return (
			<div className="ficha">
				<div className="colorFicha" style={{backgroundColor: this.state.colorFicha}}></div>
				<div></div>
			</div>
		);
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			colorFicha: nextProps.colorFicha
		});
	}
}

export default Ficha;