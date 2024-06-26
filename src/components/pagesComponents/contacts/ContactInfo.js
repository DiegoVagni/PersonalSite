import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet" 
import AnimStyle from "../../../scss/Anim.module.scss"
import ImageStyle from "../../../scss/Images.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import AppStyle from "../../../scss/App.module.scss"
class ContactInfo extends Component {
	render() {
		

		let fadeSec = StyleSheet.getAnimationBool() ? AnimStyle.Fade2Sec : "";
		return (
			<div className={`${AppStyle.FlexRowCenter} ${fadeSec}`}>
				<img className={ImageStyle.MediumImage} src={this.props.src} alt={this.props.alt} />
				<p className={TextStyle.TitleText}>{this.props.social}:</p>
				{this.props.children }
			</div>
			)
	}
}
export default ContactInfo