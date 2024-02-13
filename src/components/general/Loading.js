import { Component } from "react";
import Cube from "../coolAnims/cube/Cube"
import styleSheet from "../../utils/StyleSheet"
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


			<div style={{ ...styleSheet.getLayoutstyle("Flex_Column_Center"), ...styleSheet.getLayoutstyle("Full_Parent"), ...{ justifyContent:"center" } }}
			>
				{this.state.haveCube && styleSheet.getAnimationBool() ? (<Cube translateX={0} translateY={-50}></Cube>) : (<></>)}
				<p style={styleSheet.getLayoutstyle("Biggest_Text")}>LOADING</p>
			</div>
		)
	}
}
export default Loading
