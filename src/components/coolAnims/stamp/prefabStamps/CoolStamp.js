import { Component } from "react"
import Stamp from "../Stamp"
import Locale from "../../../../utils/Locale"
import styleSheet from "../../../../utils/StyleSheet"
class CoolStamp extends Component {
	render() {
		return (<Stamp parentColor={this.props.parentColor} rot={this.props.rot} Stamp={"cool"}>{Locale.GetMessages("Cool_Stamp_Message")} </Stamp>)
	}
}
export default CoolStamp