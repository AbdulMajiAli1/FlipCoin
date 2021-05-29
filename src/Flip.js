import React, { Component } from 'react';
import Coin from './Coin';
import logo from './logo.svg';
import { choice } from './Helpers';

class Flip extends Component {
	static defaultProps = {
		coins: [
			{ side: "heads", url: "https://tinyurl.com/react-coin-heads-jpg" },
			{ side: "tails", url: `${logo}`}
		]
	};
	constructor(props) {
		super(props);
		this.state = { 
			curFilp: null,
			nFilp: 0,
			hFilp: 0,
			tFilp: 0,
		};
		this.clickhandler = this.clickhandler.bind(this);
	}

	flipCoin() {
		const newFlip = choice(this.props.coins);
		this.setState(st => {
			return {
				curFilp: newFlip,
				nFilp: st.nFilp + 1,
				hFilp : st.hFilp + (newFlip.side === "heads"? 1 : 0),
				tFilp : st.tFilp + (newFlip.side === "tails"? 1 : 0),
			}
		}
		);
	}

	clickhandler(e) {
		this.flipCoin();
	}
	render() {
		return (
			<div>
				<div>Let's Flip a coin</div>
				{this.state.curFilp && <Coin info={this.state.curFilp} />}
				<button onClick={this.clickhandler}>flip me!</button>
				<p>Out of {this.state.nFilp} flips, there have been {this.state.hFilp} heads and {this.state.tFilp} tails</p>
			</div>
		);
	}
}
export default Flip;