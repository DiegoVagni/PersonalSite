import { Component } from 'react'

import styleSheet from "../../../utils/StyleSheet"
import Locale from "../../../utils/Locale"

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
			stampType = <NewStamp parentColor={styleSheet.style("Card_Background")} rot={"25deg"} />
		} else if (this.props.stamp == "cool") {
			stampType = <CoolStamp parentColor={styleSheet.style("Card_Background")} rot={"25deg"} />
		}

		return (<div style={this.props.minHeight ? styleSheet.getLayoutstyle("Card_Outer_Min") : styleSheet.getLayoutstyle("Card_Outer")}>
			{(this.state.haveStamp && this.props.stamp) ? stampType : <></>}
			<div style={styleSheet.getLayoutstyle("Card")}>
				<div style={styleSheet.getLayoutstyle("Card_Title_Container")}>
					<p style={styleSheet.getLayoutstyle("Title_Text")}>{Locale.GetMessages(this.props.title)}</p>
					{this.props.subTitle && <p style={styleSheet.getLayoutstyle("SubTitle_Text")}>{this.props.subTitle}</p>}
				</div>
				{this.props.preview ? this.props.preview : <></>}
				<div style={styleSheet.getLayoutstyle("Card_Container")}>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
}
export default Card