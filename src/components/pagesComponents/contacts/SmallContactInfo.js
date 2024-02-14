import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet" 
import "../../../anim.scss"
class SmallContactInfo extends Component {
	render() {


		return (
			<div style={{ ...styleSheet.getLayoutstyle("Contact_Info")}}>
				<img style={{ width: "24px", height: "24px" }} src={this.props.src} alt={this.props.alt} />
				<p style={styleSheet.getLayoutstyle("Normal_Text")}>{this.props.social}:</p>
				{this.props.children }
			</div>
			)
	}
}
export default SmallContactInfo