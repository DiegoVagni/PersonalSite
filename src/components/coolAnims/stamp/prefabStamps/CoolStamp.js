import { Component } from "react"
import Stamp from "../Stamp"
import Locale from "../../../../utils/Locale"
import styleSheet from "../../../../utils/StyleSheet"
class CoolStamp extends Component {
	render() {
		return (<Stamp parentColor={this.props.parentColor} rot={this.props.rot} color={styleSheet.style("Cool_Stamp")} borderColor={styleSheet.style("Cool_Stamp_BorderColor")}>{Locale.GetMessages("Cool_Stamp_Message")} </Stamp>)
	}
}
export default CoolStamp