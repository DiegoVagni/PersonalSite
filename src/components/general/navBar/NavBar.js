import { Component } from "react";
import Locale from "../../../utils/Locale";
import NavBarButton from "./NavBarButton";
import NavBarSubMenu from "./NavBarSubMenu";
import MenuButton from "./MenuButton"
import MiniButton from "./MiniButton"
import openButton from "../../../resources/icons/openMenu.svg"
import SettingMenu from "../../siteComponents/settings/SettingMenu";
import StyleSheet from "../../../utils/StyleSheet";
import KeyGenerator from "../../../utils/KeyGenerator";

import NavBarStyle from "./Navbar.module.scss"
import FlexStyle from "../../../scss/Flexes.module.scss"
import AnimStyle from "../../../scss/Anim.module.scss"

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settingsMenuOpen: false, miniWidth: false, minWidthMenu: false
		};
		this.toggleSettingMenu = this.toggleSettingMenu.bind(this);
		this.toggleMiniMenu = this.toggleMiniMenu.bind(this);
		this.updatePredicate = this.updatePredicate.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
	}

	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ miniWidth: window.innerWidth < 500, minWidthMenu: this.state.minWidthMenu && window.innerWidth < 500 });
	}

	toggleSettingMenu() {
		this.setState({ settingsMenuOpen: !this.state.settingsMenuOpen, minWidthMenu: false });
	}
	toggleMiniMenu() {
		this.setState({ minWidthMenu: !this.state.minWidthMenu, settingsMenuOpen: false });
	}
	closeMenu() {
		this.setState({ minWidthMenu: false, settingsMenuOpen: false });
	}
	render() {
		if (this.props.location == "/") {
			return (<></>)
		}
		if (!this.state.miniWidth) {
			return (
				<nav className={`${NavBarStyle.NavBar} ${NavBarStyle.NavBarSeparator} ${FlexStyle.FlexRowCenter} ${StyleSheet.getAnimationBool() ? AnimStyle.FadeAnim2Sec : ""}`}>
			<MenuButton to={this.props.homeButton.to} src={this.props.homeButton.src} alt={Locale.GetMessages(this.props.homeButton.local)} />
			{this.props.navButtons.map((button) => { return (<NavBarButton location={this.props.location} key={KeyGenerator.getNextKey()} to={button.to}>{Locale.GetMessages(button.local)}</NavBarButton>) })}
					<MenuButton onClick={this.toggleSettingMenu} src={this.props.settingButton.src} alt={Locale.GetMessages(this.props.settingButton.local)} />
					{this.state.settingsMenuOpen && <NavBarSubMenu zindex={true} trapezoid={true} root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} ><SettingMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} /></NavBarSubMenu>
			}
		</nav>
			);
	} else {
	return (
		<nav className={`${NavBarStyle.NavBar} ${NavBarStyle.NavBarSeparator} ${FlexStyle.FlexRowCenter} ${StyleSheet.getAnimationBool() ? AnimStyle.FadeAnim2Sec : ""}`}>
			<MenuButton to={this.props.homeButton.to} src={this.props.homeButton.src} alt={Locale.GetMessages(this.props.homeButton.local)} />
			<div className={`${NavBarStyle.MiniButton} ${NavBarStyle.MiniMenu} ${FlexStyle.FlexColumnCenterTop}`}>
				<MiniButton onClick={this.toggleMiniMenu} src={openButton} alt={Locale.GetMessages(this.props.settingButton.local)} />
				{this.state.minWidthMenu && <NavBarSubMenu zindex={false} root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} >{
					this.props.navButtons.map((button) => { return (<NavBarButton location={this.props.location} key={KeyGenerator.getNextKey()} to={button.to} onClick={this.closeMenu}>{Locale.GetMessages(button.local)}</NavBarButton>) })
				}</NavBarSubMenu>
				}
			</div>
			<MenuButton onClick={this.toggleSettingMenu} src={this.props.settingButton.src} alt={Locale.GetMessages(this.props.settingButton.local)} />
			{this.state.settingsMenuOpen && <NavBarSubMenu zindex={true} trapezoid={true} root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} ><SettingMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} /></NavBarSubMenu>
			}
		</nav>

	)
}

	}
}

export default NavBar;
