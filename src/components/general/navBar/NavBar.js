import { Component } from "react";
import Locale from "../../../utils/Locale";
import NavBarButton from "./NavBarButton";
import NavBarSubMenu from "./NavBarSubMenu";
import MenuButton from "../MenuButton"

import SettingMenu from "../../siteComponents/settings/SettingMenu";
import StyleSheet from "../../../utils/StyleSheet";
import KeyGenerator from "../../../utils/KeyGenerator";


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

		var NavStyle = {
			display: this.props.location !== "/" ? "flex" : "none",
			animation: "fade "+ this.props.animTime + "s ease-in"
			
		}

		return (

			<nav style={{ ...NavStyle, ...StyleSheet.getLayoutStyle("NavBar") }}>
				<MenuButton to={this.props.homeButton.to} src={this.props.homeButton.src} alt={Locale.GetMessages(this.props.homeButton.local)} />
				{this.props.navButtons.map((button) => { return (<NavBarButton location={this.props.location} key={KeyGenerator.getNextKey()}  to={button.to}>{Locale.GetMessages(button.local)}</NavBarButton>) })}
				<MenuButton onClick={this.toggleSettingMenu} src={this.props.settingButton.src} alt={Locale.GetMessages(this.props.settingButton.local)} />
				{this.state.settingsMenuOpen && <NavBarSubMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} ><SettingMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} /></NavBarSubMenu>
				}
			</nav>
		);

	}
}

export default NavBar;
