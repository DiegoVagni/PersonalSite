import { Component } from "react";
import Page from "./Page"
import Locale from "../utils/Locale"
import CompetenceBarContainer from "../components/competenceBar/CompetenceBarContainer";
import SoftSkill from "../components/competenceBar/SoftSkill";

import CSharp from "../resources/icons/c_sharp.svg"
import Java from "../resources/icons/java.svg"
import Javascript from "../resources/icons/javascript.svg"
import CPlus from "../resources/icons/cPlus.svg"
import Python from "../resources/icons/python.svg"
import C from "../resources/icons/c.svg"
import PHP from "../resources/icons/php.svg"
import Html from "../resources/icons/html.svg"
import Css from "../resources/icons/css.svg"
import Latex from "../resources/icons/latex.svg"
import React from "../resources/icons/react.svg"
import Spring from "../resources/icons/spring.svg"
import Unity from "../resources/icons/unity.svg"
import NodeJS from "../resources/icons/nodejs.svg"
import Italian from "../resources/icons/italianFlag.svg"
import English from "../resources/icons/ukFlag.svg"
import Hardware from "../resources/icons/hardware.svg"
import SoftwareDesign from "../resources/icons/softwareDesign.svg"
import GraphicDesign from "../resources/icons/graphicDesign.svg"
import SystemMenagment from "../resources/icons/sysmen.svg"
import GitHub from "../resources/icons/gitHub.svg"
import Empaty from "../resources/icons/empathy.svg"
import Consciousness from "../resources/icons/counsciousness.svg"
import TeamWork from "../resources/icons/teamwork.svg"
import Flexible from "../resources/icons/flexible.svg"
import FastLearner from "../resources/icons/fastLearner.svg"
import AIPrompting from "../resources/icons/aiPrompting.svg"
import "../anim.scss"
class CV extends Component {
	downloadCVITA() {
		
	}
	render() {

		let maxCompetence = 10
		let containersStyle = {
			width: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-start",
			flexDirection: "row",
			flexFlow: "row wrap"
		}
		let sectionStyle = {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			margin:"15px"

		}
		let fullPageStyle = {
			height: "auto",
			width: "100%",
			display: "flex",
		
			animation: "fade " + 0.8 + "s linear",
			overflow: "auto",
			
		}
		let textStyle = {
			font: "20px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			
		}
		let downloadStyle = {
			font: "15px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textDecoration:"none"
		}
		let titleStyle = {
			font: "30px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color")
		}
		let outerDivStyle = {
			height: "100%",
			width: "80%",
			display: "flex",
			flexDirection: "column"
		}
		return (
			<Page StyleSheet={this.props.StyleSheet}>
				<div style={fullPageStyle}>
					<div style={outerDivStyle } >
						<p style={titleStyle }>
							{Locale.GetMessages("Hard_Skills")}
						</p>
						<div style={sectionStyle}>
							<p style={textStyle}>
								{Locale.GetMessages("Programming_Languages")}
							</p>
							<div style={containersStyle}>
								<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1} src={CSharp} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("CSharp")}></CompetenceBarContainer>
								<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.3} src={C} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("C")}></CompetenceBarContainer>
								<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.6} src={Javascript} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Javascript")}></CompetenceBarContainer>
								<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.9} src={Java} maxCompetence={maxCompetence} competenceLevel={7} competence={Locale.GetMessages("Java")}></CompetenceBarContainer>
								<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={2.2} src={CPlus} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("CPlus")}></CompetenceBarContainer>
								<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={2.5} src={Python} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("Python")}></CompetenceBarContainer>
								<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={2.8} src={PHP} maxCompetence={maxCompetence} competenceLevel={4} competence={Locale.GetMessages("PHP")}></CompetenceBarContainer>
							</div>
						</div>
						<div>
							<div style={sectionStyle}>
								<p style={textStyle}>
									{Locale.GetMessages("Markup_Languages")}
								</p>
								<div style={containersStyle}>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1} src={Html} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("Html")}></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.3} src={Css} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Css")}></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.6} src={Latex} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Latex")}></CompetenceBarContainer>
								</div>
							</div>
						</div>
						<div>
							<div style={sectionStyle}>
								<p style={textStyle}>
									{Locale.GetMessages("Frameworks")}
								</p>
								<div style={containersStyle}>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1} src={Unity} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("Unity")}></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.3} src={React} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("React")}></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.6} src={NodeJS} maxCompetence={maxCompetence} competenceLevel={9} competence={Locale.GetMessages("NodeJS")}></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.9} src={Spring} maxCompetence={maxCompetence} competenceLevel={7} competence={Locale.GetMessages("Spring")}></CompetenceBarContainer>
								</div>
							</div>
						</div>
						<div>
							<div style={sectionStyle}>
								<p style={textStyle}>
									{Locale.GetMessages("Languages")}
								</p>
								<div style={containersStyle}>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1} src={Italian} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("Italian")} text={Locale.GetMessages("MotherTongue")} ></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.3} src={English} maxCompetence={maxCompetence} competenceLevel={9} competence={Locale.GetMessages("English")} text={"C1"} ></CompetenceBarContainer>

								</div>
							</div>
						</div>
						<div>
							<div style={sectionStyle}>
								<p style={textStyle}>
									{Locale.GetMessages("Varius")}
								</p>
								<div style={containersStyle}>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1} src={SoftwareDesign} maxCompetence={maxCompetence} competenceLevel={9} competence={Locale.GetMessages("Software_Design")} ></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.3} src={Hardware} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Hardware")} ></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.6} src={GitHub} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("GitHub")} ></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={1.9} src={SystemMenagment} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("System_menagment")} ></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={2.2} src={AIPrompting} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("AIPrompting")} ></CompetenceBarContainer>
									<CompetenceBarContainer StyleSheet={this.props.StyleSheet} animTime={2.5} src={GraphicDesign} maxCompetence={maxCompetence} competenceLevel={3} competence={Locale.GetMessages("Graphic_Design")} ></CompetenceBarContainer>
								</div>
							</div>
						</div>
						<div >
							<p style={titleStyle}>
								{Locale.GetMessages("Soft_Skills")}
							</p>
							<div style={sectionStyle}>
								<div style={containersStyle}>
									<SoftSkill StyleSheet={this.props.StyleSheet} animTime={1} src={Empaty} competence={Locale.GetMessages("Empaty")}></SoftSkill>
									<SoftSkill StyleSheet={this.props.StyleSheet}  animTime={1.3} src={Consciousness} competence={Locale.GetMessages("Consciousness")}></SoftSkill>
									<SoftSkill StyleSheet={this.props.StyleSheet} animTime={1.6} src={TeamWork} competence={Locale.GetMessages("TeamWork")}></SoftSkill>
									<SoftSkill StyleSheet={this.props.StyleSheet}  animTime={1.9} src={Flexible} competence={Locale.GetMessages("Flexible")}></SoftSkill>
									<SoftSkill StyleSheet={this.props.StyleSheet}  animTime={2.2} src={FastLearner} competence={Locale.GetMessages("FastLearner")}></SoftSkill>
								</div>
							</div>
						</div>
						<div >
							<p style={titleStyle}>
								{Locale.GetMessages("DownloadCV")}
							</p>
							<div style={sectionStyle}>
								<div style={containersStyle}>
									<div >
										<a style={downloadStyle}
											//this will save the file as "your_cv.pdf"
											download="Diego_Vagni_CV_ITA.pdf"
											//put the path of your pdf file
											href="/public/cvita.pdf"
										>
											{Locale.GetMessages("Italian")}
										</a>
									</div>

								</div>
							</div>
						</div>
					</div>
		
				</div>
			</Page>
		);
	}
}
export default CV;
