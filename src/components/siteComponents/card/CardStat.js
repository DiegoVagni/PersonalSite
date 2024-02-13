import { Component } from "react"

import styleSheet from "../../../utils/StyleSheet"
class CardStat extends Component {
	render() {
	
		return (<div style={{ ...styleSheet.getLayoutstyle("Flex_Row_Center"), ...{margin:"10px",padding:"10px"} }}>
			<img style={{...styleSheet.getLayoutstyle("Small_Image"), ...{minWidth:"64px", minHeight:"64px"}}} src={this.props.src} alt={this.props.title}>
			</img>
			<p style={styleSheet.getLayoutstyle("Normal_Text")}>{this.props.title + ": "}</p>
			<p style={styleSheet.getLayoutstyle("Normal_Text")}>{this.props.value}</p>
		</div>)
	}
}

export default CardStat
