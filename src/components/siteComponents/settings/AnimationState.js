import {Component} from "react"
import StyleSheet from "../../../utils/StyleSheet"
class AnimationState extends Component{
	constructor(props) {
		super(props);
		this.ChangeAnimationState = this.ChangeAnimationState.bind(this)
	}
	ChangeAnimationState(){
	 localStorage["animations"] = !StyleSheet.animation
	 StyleSheet.animation = !StyleSheet.animation
	 this.props.refreshApp();
	}
render(){
	return(<input type="checkbox" checked={StyleSheet.animation} onChange={this.ChangeAnimationState}></input>)
	}
}
export default AnimationState