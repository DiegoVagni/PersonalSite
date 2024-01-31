import { Component } from "react"
import Stamp from "../Stamp"
import Locale from "../../../../utils/Locale"
import StyleSheet from "../../../../utils/StyleSheet"
class CoolStamp extends Component {
	render() {
		return (<Stamp parentColor={this.props.parentColor} rot={this.props.rot} color={StyleSheet.Style("Cool_Stamp")} borderColor={StyleSheet.Style("Cool_Stamp_BorderColor")}>{Locale.GetMessages("Cool_Stamp_Message")} </Stamp>)
	}
}
export default CoolStamp