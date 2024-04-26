import { Component } from "react"
import ImageStyle from "../../../scss/Images.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import FlexStyle from "../../../scss/Flexes.module.scss"
class SmallContactInfo extends Component {
	render() {


		return (
			<div className={FlexStyle.FlexRowStart }>
				<img className={ImageStyle.SmallerImage} src={this.props.src} alt={this.props.alt} />
				<p className={TextStyle.NormalText}>{this.props.social}:</p>
				{this.props.children }
			</div>
			)
	}
}
export default SmallContactInfo