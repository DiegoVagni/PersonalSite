import { Component } from "react"
import Locale from "../../../utils/Locale"
import * as ReactDOM from 'react-dom';
class Modal extends Component {
	render() {
		let showModal = this.props.show ? "block" : "none"
		let ModalColor = this.props.StyleSheet.Style("Modal_Color")
		let ModalBorderColor = this.props.StyleSheet.Style("Modal_Border")
		let showStyle = {
			display: showModal
		}
		let ModalStyle = {
			position: "fixed",
			width: "40%",
			padding: "20px",
			borderRadius: "10px",
			left: "30%",
			bottom: "20%",
			border: "2px solid " + ModalBorderColor,
			backgroundColor: ModalColor,
			overflowY: "auto",
			pverflowX: "none"
		}
		let pStyle = {
			font: "15px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Button_Text_Color"),
			textAlign: "start",

		}
		let ButtonStyle = {
			backgroundColor: this.props.StyleSheet.Style("Button_Color"),
			borderRadius: "5px",
			margin:"5px"
		}
		return ReactDOM.createPortal(
			<div style={showStyle}>
				<section style={ModalStyle}>
					{this.props.children}
					<button style={ButtonStyle} type="button" onClick={this.props.handleClose}>
						<p style={pStyle}>{Locale.GetMessages("Close")}</p>
					</button>
					{this.props.apply ?
						(<button style={ButtonStyle} type="button" onClick={this.props.handleApply}>
							<p style={ pStyle}>{Locale.GetMessages("Apply")}</p>
						</button>)
						:
						(<></>)
					}
				</section>
			</div>,
			document.getElementById("root")
		)
	}
}
export default Modal