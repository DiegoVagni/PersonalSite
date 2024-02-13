import { Component } from "react"
import Locale from "../../utils/Locale"
import styleSheet from "../../utils/StyleSheet"
import KeyGenerator from "../../utils/KeyGenerator"

import Button from "./Button"

import * as ReactDOM from 'react-dom';
class Modal extends Component {
	render() {
		let showModal = this.props.show ? "block" : "none"
		let showstyle = {
			display: showModal
		}

		return ReactDOM.createPortal(
			<div key={KeyGenerator.getNextKey()} style={{ ...showstyle, ...styleSheet.getLayoutstyle("Modal") }}>
				<div key={KeyGenerator.getNextKey()} style={{ ...styleSheet.getLayoutstyle("Modal_Content") }}>
					{this.props.children}
					<div key={KeyGenerator.getNextKey()}  style={styleSheet.getLayoutstyle("Buttons_Container")}></div>
					<Button  onClick={this.props.handleClose} text={Locale.GetMessages("Close")} />
					{this.props.buttons}
				</div>
			</div>,
			document.getElementById("root")
		)
	}
}
export default Modal