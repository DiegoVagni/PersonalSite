import { Component } from "react";
import LanguageSelector from "./LanguageSelector"
import Locale from "../../utils/Locale"
import ChangeColorButton from "./ChangeColorButton";
import LicensesButton from "./LicensesButton";
import ThemeSheetSelector from "./ThemeSheetSelector";
import SettingContainer from "./SettingContainer";
class SettingMenu extends Component {

	render() {

		let borderColor = this.props.StyleSheet.Style("Navbar_Button_Border_Color");
		let divStyle = {
			width: "auto",
			height: "auto",
			minHeight:"100px",
			minWidth: "200px",
			maxWidth: "1000px",
			MaxHeight: "100%",
			backgroundColor: this.props.navBarColor,
			overflowX: "none",
			overflowY: "auto",
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			justifyItems: "top",
			position: "absolute",
			right: "0px",
			top: "130%",
			padding: "5px",
			borderRadius: "10px 7px 10px 10px",
			borderBottom: "2px solid " + borderColor,
			borderLeft: "2px solid " + borderColor,
			borderRight: "1px solid " + borderColor
		}

		let textStyle = {
			font: "15px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textAlign: "start"
		}


		return (
			<div style={divStyle}>
				
				<SettingContainer>
					<p style={textStyle}>{Locale.GetMessages("Language_Setting")}</p>
					<LanguageSelector languageChange={this.props.languageChange} />
				</SettingContainer>
				<SettingContainer>
					<p style={textStyle}>{Locale.GetMessages("Change_Theme")}</p>
					<ThemeSheetSelector refreshApp={this.props.refreshApp} StyleSheet={this.props.StyleSheet} />
				</SettingContainer>
				<SettingContainer>
					<p style={textStyle}>{Locale.GetMessages("Change_Colors")}</p>
					<ChangeColorButton StyleSheet={this.props.StyleSheet } root={ this.props.root} refreshApp={this.props.refreshApp} StyleSheet={this.props.StyleSheet} />
				</SettingContainer>
				<SettingContainer>
					
					<LicensesButton root={this.props.root} StyleSheet={this.props.StyleSheet} />
				</SettingContainer>
				
		</div >);
	}
}


export default SettingMenu;
