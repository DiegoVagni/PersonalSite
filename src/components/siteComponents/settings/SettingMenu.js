import { Component } from "react";
import LanguageSelector from "./LanguageSelector"
import Locale from "../../../utils/Locale"
import ChangeColorButton from "./ChangeColorButton";
import LicensesButton from "./LicensesButton";
import PrivacyButton from "./PrivacyButton";
import ThemeSheetSelector from "./ThemeSheetSelector";
import SettingContainer from "./SettingContainer";
import AnimationState from "./AnimationState"

import TextStyle from "../../../scss/Texts.module.scss"
import Utils from "../../../scss/Utils.module.scss"
import SettingStyle from "./Settings.module.scss"
class SettingMenu extends Component {

	render() {
		return (
			<div className={SettingStyle.SettingMenu} >

				<SettingContainer>
					<p className={`${TextStyle.NormalText} ${TextStyle.NoWrap} ${Utils.RightMargin}`}>{Locale.GetMessages("Language_Setting")}</p>
					<LanguageSelector languageChange={this.props.languageChange} />
				</SettingContainer>
				<SettingContainer>
					<p className={`${TextStyle.NormalText} ${TextStyle.NoWrap} ${Utils.RightMargin}`}>{Locale.GetMessages("Change_Theme")}</p>
					<ThemeSheetSelector refreshApp={this.props.refreshApp}/>
				</SettingContainer>
				<SettingContainer>
					<p className={`${TextStyle.NormalText} ${TextStyle.NoWrap} ${Utils.RightMargin}`}>{Locale.GetMessages("Change_Colors")}</p>
					<ChangeColorButton  root={ this.props.root} refreshApp={this.props.refreshApp} />
				</SettingContainer>
				<SettingContainer>
					<p className={`${TextStyle.NormalText} ${TextStyle.NoWrap} ${Utils.RightMargin}`}>{Locale.GetMessages("Animations")}</p>
					<AnimationState root={this.props.root} refreshApp={this.props.refreshApp} />
				</SettingContainer>
				<SettingContainer>
					<PrivacyButton root={this.props.root}/>
				</SettingContainer>
				<SettingContainer>
					<LicensesButton root={this.props.root}/>
				</SettingContainer>
		</div >);
	}
}


export default SettingMenu;
