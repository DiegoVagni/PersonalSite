import { Component } from "react"
import Locale from "../../../utils/Locale"
import TextStyle from "../../../scss/Texts.module.scss"
import FlexStyle from "../../../scss/Flexes.module.scss"
import SettingStyle from "./Settings.module.scss"

class ColorPicker extends Component {
	render() {
		return (
			<div className={FlexStyle.FlexRowBetween}>
				<p className={TextStyle.NormalText}>{Locale.GetMessages(this.props.target)}</p>
				<input
					className={SettingStyle.ColorPicker}
					type="color"
					value={this.props.value}
					data-target={this.props.target}
					onChange={this.props.change}
					onInput={this.props.change}
				/>
			</div>
		)
	}
}
export default ColorPicker
