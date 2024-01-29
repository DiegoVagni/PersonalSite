import { Component } from "react";
import Cube from "../../coolAnims/cube/Cube"
class Loading extends Component {
	constructor(props) {
		super(props)
		this.state = { haveCube: false }

		this.updatePredicate = this.updatePredicate.bind(this);
	}
	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ haveCube: window.innerWidth > 800 && window.innerHeight > 800 });
	}
	render() {
		let titleStyle = {
			font: "80px 'Baskerville', serif",
			margin: "3px",
			color: "black"
		}
		let centerStyle = {
			display: "flex",
			height: "100%",
			width: "100%",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center"
		}
		return (


			<div style={centerStyle}>
				{this.state.haveCube ? (<Cube translateX={0} translateY={-75}></Cube>) : (<></>)}
				<p style={titleStyle}>LOADING</p>
			</div>
		)
	}
}
export default Loading