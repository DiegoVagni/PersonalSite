import { Component } from "react"
import Stamp from "../Stamp"
import Locale from "../../../../utils/Locale"
import styleSheet from "../../../../utils/StyleSheet"
class NewStamp extends Component {
	render() {
		return (<Stamp parentColor={this.props.parentColor} rot={this.props.rot} Stamp={"new"}>{Locale.GetMessages("New_Stamp_Message")} </Stamp>)
	}
}
export default NewStamp