import {Component} from "react"
import styleSheet from "../../../utils/StyleSheet"
class AnimationState extends Component{
	constructor(props) {
		super(props);
		this.ChangeAnimationState = this.ChangeAnimationState.bind(this)
	}
	ChangeAnimationState() {
		styleSheet.toggleAnimations();
	 this.props.refreshApp();
	}
	render() {

		return (<input type="checkbox" checked={styleSheet.getAnimationBool()} onChange={this.ChangeAnimationState}></input>)
	}
}
export default AnimationState