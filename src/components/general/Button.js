import { Component } from "react"
import KeyGenerator from "../../utils/KeyGenerator"

import StyleSheet from "../../utils/StyleSheet"
class Button extends Component {
	render(){
		return (
			<button key={KeyGenerator.getNextKey()} style={StyleSheet.getLayoutStyle("Button")} type="button" onClick={this.props.onClick}>
				<p style={{ ...StyleSheet.getLayoutStyle("Text"), color: StyleSheet.Style("Button_Text_Color") }}>{this.props.text}</p>
			</button>
		)
}
}
export default Button