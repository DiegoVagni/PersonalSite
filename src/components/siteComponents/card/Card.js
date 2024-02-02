import { Component } from 'react'

import StyleSheet from "../../../utils/StyleSheet"

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
		this.setState({ haveStamp: window.innerWidth > 1000 && window.innerHeight > 1000 });
	}
	render() {
		let stampType;
		if (this.props.stamp == "new") {
			stampType = <NewStamp parentColor={this.props.StyleSheet.Style("Card_Background")} rot={"25deg"} />
		} else if (this.props.stamp == "cool") {
			stampType = <CoolStamp parentColor={this.props.StyleSheet.Style("Card_Background")} rot={"25deg"} />
		}

		return (<div style={StyleSheet.getLayoutStyle("Card_Outer")}>
			{(this.state.haveStamp && this.props.stamp) ? stampType : <></>}
			<div style={StyleSheet.getLayoutStyle("Card")}>
				<div style={StyleSheet.getLayoutStyle("Card_Title_Container")}>
					<p style={StyleSheet.getLayoutStyle("Title_Text")}>{this.props.title}</p>
					{this.props.subTitle && <p style={StyleSheet.getLayoutStyle("SubTitle_Text")}>{this.props.subTitle}</p>}
				</div>
				{this.props.preview? this.props.preview : <></>}
				<div style={StyleSheet.getLayoutStyle("Card_Container")}>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
}
export default Card