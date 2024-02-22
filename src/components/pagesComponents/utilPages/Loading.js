import { Component } from "react";
import Cube from "../coolAnims/cube/Cube"
import styleSheet from "../../utils/StyleSheet"
import "../../scss/Texts.scss"
import "../../scss/App.scss"
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


			<div className={["FlexColumnCenter","FullParent"]}
			>
				{this.state.haveCube && styleSheet.getAnimationBool() ? (<Cube translateX={0} translateY={-50}></Cube>) : (<></>)}
				<p className={"BiggestText" }>LOADING</p>
			</div>
		)
	}
}
export default Loading
