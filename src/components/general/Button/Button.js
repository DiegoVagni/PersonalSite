import { Component } from "react"
import KeyGenerator from "../../../utils/KeyGenerator"
import TextsStyle from "../../../scss/Texts.module.scss"
import ButtonStyle from "./Button.module.scss"
class Button extends Component {
	render(){
		return (
			<button key={KeyGenerator.getNextKey()} className={ButtonStyle.Button} type="button" onClick={this.props.onClick}>
				<p key={KeyGenerator.getNextKey()} className={TextsStyle.ButtonText}>{this.props.text}</p>
			</button>
		)
}
}
export default Button