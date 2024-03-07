import { Component } from "react"
import Locale from "../../../utils/Locale"
import KeyGenerator from "../../../utils/KeyGenerator"
import ModalStyle from "./Modal.module.scss"
import Button from "../Button/Button"

import * as ReactDOM from 'react-dom';
class Modal extends Component {
	render() {
		let modalClass = this.props.show ? ModalStyle.Show : ModalStyle.Hide;

		return ReactDOM.createPortal(
			<div key={KeyGenerator.getNextKey()} className={`${ModalStyle.Modal} ${modalClass}`}>
				<div key={KeyGenerator.getNextKey()} className={ModalStyle.ModalContent}>
					{this.props.children}
					<div key={KeyGenerator.getNextKey()} className={ModalStyle.ModalContent}></div>
					<Button  onClick={this.props.handleClose} text={Locale.GetMessages("Close")} />
					{this.props.buttons}
				</div>
			</div>,
			document.getElementById("root")
		)
	}
}
export default Modal