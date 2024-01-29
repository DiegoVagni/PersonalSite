import { Component } from "react"

class SettingContainer extends Component {
	
	render() {

		let settingStyle = {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			alignContent: "flex-start",
			width: "100%",
			maxHeight: "50px"

		}
		return (

			<div style={settingStyle}>
				{this.props.children}
			</div>
		)
	}
}
export default SettingContainer;