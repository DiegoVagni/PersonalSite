import { Component } from "react";
import Page from "./Page";
import ContactInfo from "../components/contactInfo/contactInfo"
import Locale from "../utils/Locale";
import Instagram from "../resources/icons/instagram.svg"
import Linkedin from "../resources/icons/linkedin.svg"
import Mail from "../resources/icons/mail.svg"
class Contacts extends Component {
	render() {
		let divStyle = { display: "flex", flexWrap: "wrap", width: "100%", height: "100%", flexDirection: "row", justifyContent: "space-around" }
		let textStyle = {
			font: "20px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),

		}
		return (
			<Page StyleSheet={this.props.StyleSheet}>
				<div style={divStyle }>
					<ContactInfo StyleSheet={this.props.StyleSheet} src={Mail} alt={Locale.GetMessages("Mail")} social={Locale.GetMessages("Mail")} ><p style={textStyle}>DiegoVagni.dv@gmail.com</p></ContactInfo>
					<ContactInfo StyleSheet={this.props.StyleSheet} src={Instagram} alt={Locale.GetMessages("Instagram")} social={Locale.GetMessages("Instagram")} ><p style={textStyle}>coming soon</p></ContactInfo>
				<ContactInfo StyleSheet={this.props.StyleSheet} src={Linkedin} alt={Locale.GetMessages("Linkedin")} social={Locale.GetMessages("Linkedin")} ><p style={textStyle}>coming soon</p></ContactInfo>

				</div>
			</Page>
		);
	}
}
export default Contacts;
