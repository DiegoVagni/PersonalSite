import { Component } from "react"
import ImageStyle from "../../../scss/Images.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import AppStyle from "../../../scss/App.module.scss"
class SmallContactInfo extends Component {
	render() {


		return (
			<div className={AppStyle.FlexRowCenter }>
				<img className={AppStyle.SmallerImage} src={this.props.src} alt={this.props.alt} />
				<p className={TextStyle.NormalText}>{this.props.social}:</p>
				{this.props.children }
			</div>
			)
	}
}
export default SmallContactInfo