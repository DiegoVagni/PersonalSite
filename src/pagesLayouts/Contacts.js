import { Component } from "react";
import ContactInfo from "../components/pagesComponents/contacts/ContactInfo"
import Locale from "../utils/Locale";
import Instagram from "../resources/icons/instagram.svg"
import Linkedin from "../resources/icons/linkedin.svg"
import Mail from "../resources/icons/mail.svg"
import Git from "../resources/icons/gitHub.svg"
import ContainerStyle from "../scss/Containers.module.scss"
import TextStyle from "../scss/Texts.module.scss"
import FlexStyle from "../scss/Flexes.module.scss"
class Contacts extends Component {
	render() {

		return (

			<div className={`${FlexStyle.FlexRowCenter} ${ContainerStyle.ContactContainer}`}>
				<ContactInfo src={Mail} alt={Locale.GetMessages("Mail")} social={Locale.GetMessages("Mail")} ><p className={TextStyle.NormalText}>DiegoVagni.dv@gmail.com</p></ContactInfo>
				<ContactInfo src={Instagram} alt={Locale.GetMessages("Instagram")} social={Locale.GetMessages("Instagram")} ><p className={TextStyle.NormalText}>coming soon</p></ContactInfo>
				<ContactInfo src={Linkedin} alt={Locale.GetMessages("Linkedin")} social={Locale.GetMessages("Linkedin")} ><p className={TextStyle.NormalText}>coming soon</p></ContactInfo>
				<ContactInfo src={Git} alt={Locale.GetMessages("GitHub")} social={Locale.GetMessages("GitHub")} ><p className={TextStyle.NormalText}><a className={TextStyle.HiddenLink} href={"https://github.com/DiegoVagni"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("GitHub")}</a></p></ContactInfo>
			</div>

		);
	}
}
export default Contacts;
