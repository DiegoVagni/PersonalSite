import { Component } from "react";
import LanguageSelector from "./LanguageSelector"
import Locale from "../../../utils/Locale"
import StyleSheet from "../../../utils/StyleSheet"

import ChangeColorButton from "./ChangeColorButton";
import LicensesButton from "./LicensesButton";
import ThemeSheetSelector from "./ThemeSheetSelector";
import SettingContainer from "./SettingContainer";
import KeyGenerator from "../../../utils/KeyGenerator";
class SettingMenu extends Component {

	render() {
		return (
			<div style={StyleSheet.getLayoutStyle("Setting_Menu")}>

				<SettingContainer key={KeyGenerator.getNextKey()}>
					<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{Locale.GetMessages("Language_Setting")}</p>
					<LanguageSelector languageChange={this.props.languageChange} />
				</SettingContainer>
				<SettingContainer key={KeyGenerator.getNextKey()}>
					<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{Locale.GetMessages("Change_Theme")}</p>
					<ThemeSheetSelector refreshApp={this.props.refreshApp}/>
				</SettingContainer>
				<SettingContainer key={KeyGenerator.getNextKey()}>
					<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{Locale.GetMessages("Change_Colors")}</p>
					<ChangeColorButton  root={ this.props.root} refreshApp={this.props.refreshApp} />
				</SettingContainer>
				<SettingContainer key={KeyGenerator.getNextKey()}>
					<LicensesButton root={this.props.root}/>
				</SettingContainer>
				
		</div >);
	}
}


export default SettingMenu;
