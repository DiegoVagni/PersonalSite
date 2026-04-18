import { Component } from 'react'
import Locale from "../../../utils/Locale"
import TextStyles from "../../../scss/Texts.module.scss"
import Style from "./AboutTimeline.module.scss"

class AboutTimelineItem extends Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
		this.toggle = this.toggle.bind(this)
	}
	toggle() {
		this.setState({ open: !this.state.open })
	}
	render() {
		const { title, side } = this.props
		const sideClass = side === "left" ? Style.Left : Style.Right
		const openClass = this.state.open ? Style.Open : ""
		return (
			<div className={`${Style.Item} ${sideClass} ${openClass}`}>
				<div className={Style.Dot}></div>
				<div className={Style.Side}>
					<div className={Style.Branch} onClick={this.toggle}>
						<div className={Style.Connector}></div>
						<div className={Style.Title}>{Locale.GetMessages(title)}</div>
					</div>
					<div className={Style.Card}>
						<p className={`${TextStyles.NormalText} ${Style.CardText}`}>
							{Locale.GetMessages(title + "_Description")}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

class AboutTimeline extends Component {
	render() {
		const events = this.props.events || []
		return (
			<div className={Style.Timeline}>
				<div className={Style.Track}>
					<div className={Style.Spine}></div>
					{events.map((title, i) => (
						<AboutTimelineItem
							key={title}
							title={title}
							side={i % 2 === 0 ? "right" : "left"}
						/>
					))}
				</div>
				<div className={Style.Base}>
					<span className={Style.BaseText}>{Locale.GetMessages("Still_Working")}</span>
				</div>
			</div>
		)
	}
}

export default AboutTimeline
