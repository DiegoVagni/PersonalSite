import { Component } from 'react'
import Locale from "../../../utils/Locale"
import StyleSheet from "../../../utils/StyleSheet"
import Card from "../../siteComponents/card/Card"

class AboutMeCard extends Component {

	render() {
		return (
			<Card minHeight={true } title={this.props.title}>
					<p style={StyleSheet.getLayoutStyle("Parag_Text")}>{Locale.GetMessages(this.props.title + "_Description")}</p>
			</Card>
			)
	}
}
export default AboutMeCard