import { Component } from "react"
import Locale from "../../../utils/Locale"
import Modal from "../../general/Modal/Modal"
import styleSheet from "../../../utils/StyleSheet"
import SmallContactInfo from "../../pagesComponents/contacts/SmallContactInfo"
import Instagram from "../../../resources/icons/instagram.svg"
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
	
		let cursorstyle = {
			cursor: this.state.cursor
		}
		return (
			<div>
				<p style={{ ...styleSheet.getLayoutstyle("Normal_Text"), ...cursorstyle }} onMouseEnter={this.activeMouse} onMouseLeave={this.deactiveMouse} onClick={this.showModal}>{Locale.GetMessages("Licenses")}</p>
				<Modal root={this.props.root } show={this.state.show} handleClose={this.hideModal} handleApply={this.Apply}>
					<div>
						<p style={styleSheet.getLayoutstyle("Normal_Text")}>{Locale.GetMessages("Home_Cube")} {Locale.GetMessages("Inspired")}: <a href={"https://codepen.io/t_afif/pen/PoJeqwN"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_CodePen")}</a></p>
						<p style={styleSheet.getLayoutstyle("Normal_Text")}>{Locale.GetMessages("Stamp")} {Locale.GetMessages("Inspired")}: <a href={"https://codepen.io/slimsmearlapp/pen/DqVqPy"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_CodePen")}</a></p>
						<p style={styleSheet.getLayoutstyle("Normal_Text")}>{Locale.GetMessages("HomeAnimation")} {Locale.GetMessages("Inspired")}: <a href={"https://codepen.io/hisamikurita/pen/oNvEjMj"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_CodePen")}</a></p>
						<p style={styleSheet.getLayoutstyle("Normal_Text")}>{Locale.GetMessages("Icons")} {Locale.GetMessages("TakenBy")}: <a href={"https://www.svgrepo.com/"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("svgrepo.com")}</a></p>
						<div style={{ ...styleSheet.getLayoutstyle("Flex_Row_Center")}}>
							<p style={{ ...styleSheet.getLayoutstyle("Normal_Text"), ...{ marginRight: "20px" } }}>{Locale.GetMessages("Icons")} {Locale.GetMessages("MadeBy")}: <a href={"https://carolsebastiano.myportfolio.com/"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("Karoll")}</a></p>
							<SmallContactInfo src={Instagram} alt={Locale.GetMessages("Instagram")} social={Locale.GetMessages("Instagram")} ><a href={"https://www.instagram.com/kerolsphoto/"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("Karoll_Insta")}</a></SmallContactInfo>
						</div>
					</div>
				</Modal>
			</div>
		)
	}
}
export default LicensesButton;