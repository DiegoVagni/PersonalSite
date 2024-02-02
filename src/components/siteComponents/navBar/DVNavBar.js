import { Component } from "react"
import NavBar from "../../general/navBar/NavBar"
import setting from "../../../resources/icons/settings.svg"
import home from "../../../resources/icons/home.svg"
class DVNavBar extends Component {
	render() {
		return (
			<NavBar
				location={this.props.location}
				animTime={2}
				homeButton={{ src: home, to: "/", local: "Navbar_Home" }}
				navButtons={[{ to: "/projects", local: "Navbar_projects" }, { to: "/about", local: "Navbar_about" }, { to: "/skills", local: "Navbar_cv" }, { to: "/contacts", local: "Navbar_contact" }]}
				settingButton={{ src: setting, local: "Setting_ToolTip" }}
			/>
		)
	}

}
export default DVNavBar