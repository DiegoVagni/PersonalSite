import { Component } from "react"
import Locale from "../../../utils/Locale"
import styleSheet from "../../../utils/StyleSheet"
import TextStyle from "../../../scss/Texts.module.scss"
import FlexStyle from "../../../scss/Flexes.module.scss"
import SettingStyle from "./Settings.module.scss"
import KeyGenerator from "../../../utils/KeyGenerator"

class ColorPicker extends Component {
	change(e) {
		console.log("onchange" + e.target.value);
	}
	input(e) {
		console.log("onInput"+e.target.value );
	}
	render() {
	
		return (
			<div key={KeyGenerator.getNextKey()} className={FlexStyle.FlexRowBetween}>
				<p key={KeyGenerator.getNextKey()} className={TextStyle.NormalText}>{Locale.GetMessages(this.props.target)}</p>
				<input className={SettingStyle.ColorPicker} key={KeyGenerator.getNextKey()} onChange={this.props.change} type="color" value={this.props.value} target={this.props.target} />
			</div>
		)
	}
}
export default ColorPicker