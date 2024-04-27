import { Component } from "react";
import Cube from "../../coolAnims/cube/Cube"
import StyleSheet from "../../../utils/StyleSheet"
import text from "../../../scss/Texts.module.scss"
import Flexes from "../../../scss/Flexes.module.scss"
import App from "../../../scss/App.module.scss"
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

			<div
				className={`${Flexes.FlexColumnCenter} ${App.FullParent}`}	>
				{this.state.haveCube && StyleSheet.getAnimationBool() ? (<Cube></Cube>) : (<></>)}
				<p className={text.NormalText}>LOADING</p>
			</div>
		)
	}
}
export default Loading
