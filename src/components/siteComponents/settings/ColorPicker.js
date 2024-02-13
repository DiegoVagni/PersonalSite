import { Component } from "react"
import Locale from "../../../utils/Locale"
import styleSheet from "../../../utils/StyleSheet"
import KeyGenerator from "../../../utils/KeyGenerator"

class ColorPicker extends Component {
	
	render() {
	
		return (
			<div key={KeyGenerator.getNextKey()} style={styleSheet.getLayoutstyle("ColorPicker")}>
				<p key={KeyGenerator.getNextKey()}  style={styleSheet.getLayoutstyle("Normal_Text")}>{Locale.GetMessages(this.props.target)}</p>
				<input key={KeyGenerator.getNextKey()}  onChange={this.props.change} type="color" value={this.props.value} target={this.props.target} />
			</div>
		)
	}
}
export default ColorPicker