import { Component } from "react"
import Locale from "../../../utils/Locale"
import StyleSheet from "../../../utils/StyleSheet"
import KeyGenerator from "../../../utils/KeyGenerator"

class ColorPicker extends Component {
	
	render() {
	
		return (
			<div key={KeyGenerator.getNextKey()} style={StyleSheet.getLayoutStyle("ColorPicker")}>
				<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{Locale.GetMessages(this.props.target)}</p>
				<input onChange={this.props.change} type="color" value={this.props.value} target={ this.props.target} />
			</div>
		)
	}
}
export default ColorPicker