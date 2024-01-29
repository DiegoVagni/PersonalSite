import { Component } from "react";
import Locale from "../../utils/Locale";
import NavBarButton from "./NavBarButton";
import NavBarSubMenu from "./NavBarSubMenu";
import { useLocation } from "react-router-dom";
import MenuButton from "../basics/menuButton/MenuButton"
import setting from "../../resources/icons/settings.svg"
import home from "../../resources/icons/home.svg"
import SettingMenu from "../settings/SettingMenu";

function withLocation(Component) {

	return function WrappedComponent(props) {
		let location = useLocation().pathname
		return <Component {...props} location={location} />;
	}
}

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settingsMenuOpen: false,
		};
		this.toggleSettingMenu = this.toggleSettingMenu.bind(this);
	}
	toggleSettingMenu() {
		this.setState({ settingsMenuOpen: !this.state.settingsMenuOpen });
	}
	render() {
		let navBarColor = this.props.StyleSheet.Style("Navbar_Color");

		var NavStyle = {
			top: "0px",
			backgroundColor: navBarColor,
			position: "fixed",
			flexDirection: "row",
			width: "100%",
			height: "10%",
			alignItems: "flex-start",
			maxHeight: "50px",
			minHeight: "50px",
			display: this.props.location !== "/" ? "flex" : "none",
			zIndex: "10",
			animation: "fade 2s ease-in"
		}

		if (this.props.location == "/") {
			return null;
		}
		return (

			<nav style={NavStyle}>

				<MenuButton to={"/"} src={home} StyleSheet={this.props.StyleSheet} alt={Locale.GetMessages("Navbar_home")} />
				<NavBarButton StyleSheet={this.props.StyleSheet} location={this.props.location} to={"/projects"}>{Locale.GetMessages("Navbar_projects")}</NavBarButton>
				<NavBarButton StyleSheet={this.props.StyleSheet} location={this.props.location} to={"/about"}>{Locale.GetMessages("Navbar_about")}</NavBarButton>
				<NavBarButton StyleSheet={this.props.StyleSheet} location={this.props.location} to={"/skills"}>{Locale.GetMessages("Navbar_cv")}</NavBarButton>
				<NavBarButton StyleSheet={this.props.StyleSheet} location={this.props.location} to={"/contacts"}>{Locale.GetMessages("Navbar_contact")}</NavBarButton>
				<MenuButton src={setting} onClick={this.toggleSettingMenu} StyleSheet={this.props.StyleSheet} alt={Locale.GetMessages("Setting_ToolTip")} />

				{this.state.settingsMenuOpen && <NavBarSubMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} navBarColor={navBarColor} StyleSheet={this.props.StyleSheet} ><SettingMenu root={this.props.root} navBarColor={navBarColor} refreshApp={this.props.refreshApp} StyleSheet={this.props.StyleSheet} languageChange={this.props.languageChange} /></NavBarSubMenu>
				}
			</nav>
		);

	}
}

export default withLocation(NavBar);
