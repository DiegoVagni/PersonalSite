import { Component } from 'react'
import Locale from "../../../utils/Locale"
import styleSheet from "../../../utils/StyleSheet"
import Card from "../../siteComponents/card/Card"

class AboutMeCard extends Component {

	render() {
		return (
			<Card minHeight={true } title={this.props.title}>
					<p style={styleSheet.getLayoutstyle("Parag_Text")}>{Locale.GetMessages(this.props.title + "_Description")}</p>
			</Card>
			)
	}
}
export default AboutMeCard