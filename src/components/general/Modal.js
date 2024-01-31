import { Component } from "react"
import Locale from "../../utils/Locale"
import StyleSheet from "../../utils/StyleSheet"

import Button from "./Button"

import * as ReactDOM from 'react-dom';
class Modal extends Component {
	render() {
		let showModal = this.props.show ? "block" : "none"
		let showStyle = {
			display: showModal
		}
		

		return ReactDOM.createPortal(
			<div style={{ ...showStyle, ...StyleSheet.getLayoutStyle("Modal") }}>
				<div style={{ ...StyleSheet.getLayoutStyle("Modal_Content") } }>
					{this.props.children}
					<div style={StyleSheet.getLayoutStyle("Buttons_Container")}></div>
					<Button onClick={this.props.handleClose} text={Locale.GetMessages("Close")} />
					{this.props.buttons}
				</div>
			</div>,
			document.getElementById("root")
		)
	}
}
export default Modal