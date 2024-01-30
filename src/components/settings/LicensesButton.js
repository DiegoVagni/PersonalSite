import { Component } from "react"
import Locale from "../../utils/Locale"
import Modal from "../general/Modal"

class LicensesButton extends Component {
	constructor(props) {
		super(props)
		this.state = { show: false, cursor: "default" }
		this.hideModal = this.hideModal.bind(this);
		this.showModal = this.showModal.bind(this);

			this.activeMouse = this.activeMouse.bind(this);
			this.deactiveMouse = this.deactiveMouse.bind(this);
		}

		activeMouse() {
			this.setState({ cursor: "pointer" });
		}
		deactiveMouse() {
			this.setState({ cursor: "default" });
		}
	hideModal() {
		this.setState({ show: false })
	}
	showModal() {
		this.setState({ show: true })
	}
	
	render() {
	
		let pStyle = {
			font: "15px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textAlign: "start",
			
		}
		let cursorStyle = {
			font: "15px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textAlign: "start", cursor: this.state.cursor}
		return (
			<div>
				<p style={pStyle, cursorStyle} onMouseEnter={this.activeMouse} onMouseLeave={this.deactiveMouse} onClick={this.showModal}>{Locale.GetMessages("Licenses")}</p>
				<Modal root={this.props.root } show={this.state.show} StyleSheet={this.props.StyleSheet} handleClose={this.hideModal} handleApply={this.Apply}>
					<div>
						<p style={pStyle}>{Locale.GetMessages("Home_Cube")} {Locale.GetMessages("Inspired")}: <a href={"https://codepen.io/t_afif/pen/PoJeqwN"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_CodePen")}</a></p>
						<p style={pStyle}>{Locale.GetMessages("Stamp")} {Locale.GetMessages("Inspired")}: <a href={"https://codepen.io/slimsmearlapp/pen/DqVqPy"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_CodePen")}</a></p>
						<p style={pStyle}>{Locale.GetMessages("HomeAnimation")} {Locale.GetMessages("Inspired")}: <a href={"https://codepen.io/hisamikurita/pen/oNvEjMj"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_CodePen")}</a></p>
						<p style={pStyle}>{Locale.GetMessages("Icons")} {Locale.GetMessages("TakenBy")}: <a href={"https://www.svgrepo.com/"} target={"_blank"} rel={ "noreferrer"}>{Locale.GetMessages("svgrepo.com")}</a></p>
					</div>
				</Modal>
			</div>
		)
	}
}
export default LicensesButton;