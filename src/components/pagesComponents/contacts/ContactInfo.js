import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet" 
import "../../../anim.scss"
class ContactInfo extends Component {
	render() {
		let anim = {
			animation:"fade "+this.props.animTime +"s ease-in"
		}


		return (
			<div style={{ ...StyleSheet.getLayoutStyle("Contact_Info"), ...anim }}>
				<img style={StyleSheet.getLayoutStyle("Small_Image")} src={this.props.src} alt={this.props.title} />
				<p style={StyleSheet.getLayoutStyle("Title_Text")}>{this.props.social}:</p>
				{this.props.children }
			</div>
			)
	}
}
export default ContactInfo