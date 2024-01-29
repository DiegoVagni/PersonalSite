import { Component } from "react";
import ProjectCard from "../components/projectPage/ProjectCard";
import TesiPreview from "../components/tesiPreview/TesiPreview"

import Page from "./Page";
import Locale from "../utils/Locale"
import Css from "../resources/icons/css.svg"
import Javascript from "../resources/icons/javascript.svg"
import Html from "../resources/icons/html.svg"
import React from "../resources/icons/react.svg"
import CSharp from "../resources/icons/c_sharp.svg"
import Python from "../resources/icons/python.svg"
import Unity from "../resources/icons/unity.svg"

import Twitch from "../resources/images/twitch.png"
import LastRun from "../resources/images/lastRun.png"
import LudoGame from "../resources/images/ludoGame.png"
import ComFram from "../resources/images/ComFram.png"
import SmashWorlds from "../resources/images/smashWorlds.jpg"
class Projects extends Component {
	render() {
		let divStyle = {
			height: "100%",
			width: "100%",
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			justifyItems: "center",
			flexDirection: "column",
			overflowY: "auto"
		}
		let twitchStats = <img style={{
			width: "100%", height: "100%",
			borderRadius: "10%"
		}} src={Twitch} alt={Locale.GetMessages("TwitchStats")}></img >

		let lastRun = <img style={{
			width: "100%", height: "100%",
			borderRadius: "10%"
		}} src={LastRun} alt={Locale.GetMessages("LastRun")}></img >

		let ludoGame = <img style={{
			width: "100%", height: "100%",
			borderRadius: "10%"
		}} src={LudoGame} alt={Locale.GetMessages("LudoGame")}></img >
		let comFram = <img style={{
			width: "100%", height: "80%",
			borderRadius: "10%"
		}} src={ComFram} alt={Locale.GetMessages("LudoGame")}></img >
		let smashworlds = <img style={{
			width: "100%", height: "80%",
			borderRadius: "10%"
		}} src={SmashWorlds} alt={Locale.GetMessages("SmashWorlds")}></img >
		return (
			<Page StyleSheet={this.props.StyleSheet}>
				<div style={divStyle}>
					<ProjectCard title={"Site"} tech={[[Css, Locale.GetMessages("Css")], [Javascript, Locale.GetMessages("Javascript")], [Html, Locale.GetMessages("Html")], [React, Locale.GetMessages("React")]]} StyleSheet={this.props.StyleSheet} stamp="new" stampRot={"30deg"} GitHub={"Coming Soon"} to={"/"}
						preview={(<iframe
							title={this.props.title}
							style={{
								width: "100%", height: "100%",
								borderRadius: "10%"
							}}
							src="/"
						>
							{" "}
						</iframe>)}
					>
					</ProjectCard>
					<ProjectCard title={"Comunication_Framework"} tech={[[CSharp, Locale.GetMessages("CSharp")]]} StyleSheet={this.props.StyleSheet} stamp={"cool"} stampRot={"30deg"} GitHub={"Coming soon"} to={"/"} preview={comFram }
					>
					</ProjectCard>
					<ProjectCard title={"SmashWorld"} tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]} StyleSheet={this.props.StyleSheet} GitHub={Locale.GetMessages("Private")} to={'https://smashworld.io/'}
						preview={smashworlds}>
					</ProjectCard>
					<ProjectCard title={"Tesi"} tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]} StyleSheet={this.props.StyleSheet} stamp={"cool"} stampRot={"30deg"} GitHub={Locale.GetMessages("Private")} to={'https://supsi.ch'} preview={<TesiPreview StyleSheet={this.props.StyleSheet}></TesiPreview>}
					>
					</ProjectCard>
					<ProjectCard title={"LudoGame"} tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]} StyleSheet={this.props.StyleSheet} GitHub={<a style={{ textDecoration: "none" }} href={"https://github.com/DiegoVagni/ludogame"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_Repo")}</a>} to={"/"} preview={ludoGame}
					>
					</ProjectCard>
					<ProjectCard title={"LastRun"} tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]} StyleSheet={this.props.StyleSheet} GitHub={Locale.GetMessages("Private")} to={'https://supsi.ch'} preview={lastRun} >

					</ProjectCard>
					<ProjectCard title={"TwitchStats"} tech={[[Python, Locale.GetMessages("Python")]]} StyleSheet={this.props.StyleSheet} GitHub={Locale.GetMessages("Private")} to={'https://supsi.ch'}
						preview={twitchStats}
					>
					</ProjectCard>
				</div>
			</Page>
		);
	}
}
export default Projects;
