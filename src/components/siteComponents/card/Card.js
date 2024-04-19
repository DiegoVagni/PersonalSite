import { Component } from 'react'

import styleSheet from "../../../utils/StyleSheet"
import Locale from "../../../utils/Locale"
import CardStyle from "./Card.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import FlexStyle from "../../../scss/Flexes.module.scss"
import NewStamp from "../../coolAnims/stamp/prefabStamps/NewStamp"
import CoolStamp from "../../coolAnims/stamp/prefabStamps/CoolStamp"

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { haveStamp: false }
		this.updatePredicate = this.updatePredicate.bind(this)
	}
	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ haveStamp: window.innerWidth > 600});
	}
	render() {
		let stampType;
		if (this.props.stamp == "new") {
			stampType = <NewStamp parentColor={styleSheet.style("Card_Background")} rot={this.props.stampRot} />
		} else if (this.props.stamp == "cool") {
			stampType = <CoolStamp parentColor={styleSheet.style("Card_Background")} rot={this.props.stampRot} />
		}

		return (<div className={`${CardStyle.CardOuter}`}>
			{(this.state.haveStamp && this.props.stamp) ? stampType : <></>}
			<div className={`${CardStyle.Card} ${FlexStyle.FlexColumnCenterTop}`}>
				<div className={CardStyle.CardTitleContainer}>
					<p className={TextStyle.TitleText}>{Locale.GetMessages(this.props.title)}</p>
					{this.props.subTitle && <p className={TextStyle.SubTitleText }>{this.props.subTitle}</p>}
				</div>
				{this.props.preview ? this.props.preview : <></>}
				<div className={CardStyle.CardContainer}>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
}
export default Card