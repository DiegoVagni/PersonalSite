import { Component } from "react";
import Cube from "../coolAnims/cube/Cube"
import StyleSheet from "../../utils/StyleSheet"
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
		
	
		return (


			<div style={StyleSheet.getLayoutStyle("Center_Column_Flex")}
>
				{this.state.haveCube ? (<Cube translateX={0} translateY={-75}></Cube>) : (<></>)}
				<p style={StyleSheet.getLayoutStyle("Biggest_Text")}>LOADING</p>
			</div>
		)
	}
}
export default Loading
