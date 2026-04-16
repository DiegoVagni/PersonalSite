import { Component } from "react"
import TextsStyle from "../../../scss/Texts.module.scss"
import ButtonStyle from "./Button.module.scss"
class Button extends Component {
	render(){
		return (
			<button className={ButtonStyle.Button} type="button" onClick={this.props.onClick}>
				<p className={TextsStyle.ButtonText}>{this.props.text}</p>
			</button>
		)
}
}
export default Button
