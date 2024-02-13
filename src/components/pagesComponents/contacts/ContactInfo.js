import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet" 
import "../../../anim.scss"
class ContactInfo extends Component {
	render() {
		let anim = {
			animation:styleSheet.getAnimationBool() ? "fade "+this.props.animTime +"s ease-in":""
		}


		return (
			<div style={{ ...styleSheet.getLayoutstyle("Contact_Info"), ...anim }}>
				<img style={styleSheet.getLayoutstyle("Small_Image")} src={this.props.src} alt={this.props.title} />
				<p style={styleSheet.getLayoutstyle("Title_Text")}>{this.props.social}:</p>
				{this.props.children }
			</div>
			)
	}
}
export default ContactInfo