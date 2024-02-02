import { Component } from "react"

import StyleSheet from "../../../utils/StyleSheet"
class CardStat extends Component {
	render() {
	
		return (<div style={StyleSheet.getLayoutStyle("Flex_Row_Center_Container")}>
			<img style={StyleSheet.getLayoutStyle("Small_Image")} src={this.props.src} alt={this.props.title}>
			</img>
			<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{this.props.title + ": "}</p>
			<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{this.props.value }</p>
		</div>)
	}
}

export default CardStat
