import { Component } from "react";
import Locale from "../../../utils/Locale";
import NavBarButton from "./NavBarButton";
import NavBarSubMenu from "./NavBarSubMenu";
import MenuButton from "../MenuButton"
import MiniButton from "../MiniButton"
import openButton from "../../../resources/icons/openMenu.svg"
import SettingMenu from "../../siteComponents/settings/SettingMenu";
import styleSheet from "../../../utils/StyleSheet";
import KeyGenerator from "../../../utils/KeyGenerator";


class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settingsMenuOpen: false, miniWidth: false, minWidthMenu:false
		};
		this.toggleSettingMenu = this.toggleSettingMenu.bind(this);
		this.toggleMiniMenu = this.toggleMiniMenu.bind(this);
		this.updatePredicate = this.updatePredicate.bind(this)
	}

	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ miniWidth: window.innerWidth < 500, minWidthMenu: this.state.minWidthMenu && window.innerWidth<500 });
	}

	toggleSettingMenu() {
		this.setState({ settingsMenuOpen: !this.state.settingsMenuOpen, minWidthMenu:false });
	}
	toggleMiniMenu() {
		this.setState({ minWidthMenu: !this.state.minWidthMenu, settingsMenuOpen: false });
	}
	render() {

		var Navstyle = {
			display: this.props.location !== "/" ? "flex" : "none",
			animation: styleSheet.getAnimationBool() ? "fade "+ this.props.animTime + "s ease-in":""
			
		}
		if (!this.state.miniWidth) {
			return (

				<nav style={{ ...Navstyle, ...styleSheet.getLayoutstyle("NavBar") }}>
					<MenuButton to={this.props.homeButton.to} src={this.props.homeButton.src} alt={Locale.GetMessages(this.props.homeButton.local)} />
					{this.props.navButtons.map((button) => { return (<NavBarButton location={this.props.location} key={KeyGenerator.getNextKey()} to={button.to}>{Locale.GetMessages(button.local)}</NavBarButton>) })}
					<MenuButton onClick={this.toggleSettingMenu} src={this.props.settingButton.src} alt={Locale.GetMessages(this.props.settingButton.local)} />
					{this.state.settingsMenuOpen && <NavBarSubMenu trapezoid={true } root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} ><SettingMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} /></NavBarSubMenu>
					}
				</nav>
			);
		} else {
			return (
				<nav style={{ ...Navstyle, ...styleSheet.getLayoutstyle("NavBar"), ...{ width: "100%" } }}>
					<MenuButton to={this.props.homeButton.to} src={this.props.homeButton.src} alt={Locale.GetMessages(this.props.homeButton.local)} />
					<div style={{ ...{ width: "100%", minWidth:"132px" }, ...styleSheet.getLayoutstyle("Mini_Button") }}>
					<MiniButton onClick={this.toggleMiniMenu} src={openButton} alt={Locale.GetMessages(this.props.settingButton.local)} />
					{this.state.minWidthMenu && <NavBarSubMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} >{
							this.props.navButtons.map((button) => { return (<NavBarButton location={this.props.location} key={KeyGenerator.getNextKey()} to={button.to}>{Locale.GetMessages(button.local)}</NavBarButton>) }) 
					}</NavBarSubMenu>
					}
					</div>
					<MenuButton onClick={this.toggleSettingMenu} src={this.props.settingButton.src} alt={Locale.GetMessages(this.props.settingButton.local)} />
					{this.state.settingsMenuOpen && <NavBarSubMenu trapezoid={true} root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} ><SettingMenu root={this.props.root} refreshApp={this.props.refreshApp} languageChange={this.props.languageChange} /></NavBarSubMenu>
					}
				</nav>
			
			)
		}

	}
}

export default NavBar;
