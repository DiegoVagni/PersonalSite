import { Component } from "react"
import KeyGenerator from "../../utils/KeyGenerator"

import styleSheet from "../../utils/StyleSheet"
class Button extends Component {
	render(){
		return (
			<button key={KeyGenerator.getNextKey()} style={styleSheet.getLayoutstyle("Button")} type="button" onClick={this.props.onClick}>
				<p key={KeyGenerator.getNextKey()} style={{ ...styleSheet.getLayoutstyle("Text"), color: styleSheet.style("Button_Text_Color") }}>{this.props.text}</p>
			</button>
		)
}
}
export default Button