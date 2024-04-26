import { Component } from "react"
import CardStyle from "./Card.module.scss"
import ContainerStyle from "../../../scss/Flexes.module.scss"
import ImageStyle from "../../../scss/Images.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"

class CardStat extends Component {
	render() {

		return (<div className={`${CardStyle.MP} ${ContainerStyle.FlexRowCenter}`}>
			<img className={ImageStyle.SmallImage} src={this.props.src} alt={this.props.title}>
			</img>
			<p className={TextStyle.NormalText}>{this.props.title + ": "}</p>
			<p className={TextStyle.NormalText}>{this.props.value}</p>
		</div>)
	}
}

export default CardStat
