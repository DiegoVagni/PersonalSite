import { Component } from "react";
import ContactInfo from "../components/pagesComponents/contacts/ContactInfo"
import Locale from "../utils/Locale";
import Instagram from "../resources/icons/instagram.svg"
import Linkedin from "../resources/icons/linkedin.svg"
import Mail from "../resources/icons/mail.svg"
import StyleSheet from "../utils/StyleSheet";
class Contacts extends Component {
	render() {
	
		return (

			<div style={StyleSheet.getLayoutStyle("Contact_Container")}>
				<ContactInfo src={Mail} alt={Locale.GetMessages("Mail")} social={Locale.GetMessages("Mail")} ><p style={StyleSheet.getLayoutStyle("Normal_Text")}>DiegoVagni.dv@gmail.com</p></ContactInfo>
				<ContactInfo src={Instagram} alt={Locale.GetMessages("Instagram")} social={Locale.GetMessages("Instagram")} ><p style={StyleSheet.getLayoutStyle("Normal_Text")}>coming soon</p></ContactInfo>
				<ContactInfo src={Linkedin} alt={Locale.GetMessages("Linkedin")} social={Locale.GetMessages("Linkedin")} ><p style={StyleSheet.getLayoutStyle("Normal_Text")}>coming soon</p></ContactInfo>
			</div>
	
		);
	}
}
export default Contacts;
