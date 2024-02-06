import { Component } from "react";
import Locale from "../utils/Locale"
import StyleSheet from "../utils/StyleSheet"
import CompetenceBarContainer from "../components/pagesComponents/cv/CompetenceBarContainer";
import SoftSkill from "../components/pagesComponents/cv/SoftSkill";

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
import Net from "../resources/icons/net.svg"
import "../anim.scss"
import SkillContainer from "../components/pagesComponents/cv/SkillContainer";
import SkillsPageSection from "../components/pagesComponents/cv/SkillsPageSection";
import DownloadPDFSection from "../components/siteComponents/DownloadPDFSection"
class CV extends Component {

	render() {

		let maxCompetence = 10

		return (

			<>
				<SkillsPageSection title={"Hard_Skills"}>
					<SkillContainer title={Locale.GetMessages("Programming_Languages")}>
						<CompetenceBarContainer animTime={1} src={CSharp} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("CSharp")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.3} src={C} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("C")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.6} src={Javascript} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Javascript")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.9} src={Net} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Net")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={2.2} src={Java} maxCompetence={maxCompetence} competenceLevel={7} competence={Locale.GetMessages("Java")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={2.5} src={CPlus} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("CPlus")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={2.8} src={Python} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("Python")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={3.1} src={PHP} maxCompetence={maxCompetence} competenceLevel={4} competence={Locale.GetMessages("PHP")}></CompetenceBarContainer>
					</SkillContainer>
					<SkillContainer title={Locale.GetMessages("Markup_Languages")}>
						<CompetenceBarContainer animTime={1} src={Html} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("Html")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.3} src={Css} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Css")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.6} src={Latex} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Latex")}></CompetenceBarContainer>
					</SkillContainer>

					<SkillContainer title={Locale.GetMessages("Frameworks")}>
						<CompetenceBarContainer animTime={1} src={Unity} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("Unity")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.3} src={React} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("React")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.6} src={NodeJS} maxCompetence={maxCompetence} competenceLevel={9} competence={Locale.GetMessages("NodeJS")}></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.9} src={Spring} maxCompetence={maxCompetence} competenceLevel={7} competence={Locale.GetMessages("Spring")}></CompetenceBarContainer>
					</SkillContainer>

					<SkillContainer title={Locale.GetMessages("Languages")}>
						<CompetenceBarContainer animTime={1} src={Italian} maxCompetence={maxCompetence} competenceLevel={10} competence={Locale.GetMessages("Italian")} text={Locale.GetMessages("MotherTongue")} ></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.3} src={English} maxCompetence={maxCompetence} competenceLevel={9} competence={Locale.GetMessages("English")} text={"C1"} ></CompetenceBarContainer>
					</SkillContainer>
					<SkillContainer title={Locale.GetMessages("Varius")}>
						<CompetenceBarContainer animTime={1} src={SoftwareDesign} maxCompetence={maxCompetence} competenceLevel={9} competence={Locale.GetMessages("Software_Design")} ></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.3} src={Hardware} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("Hardware")} ></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.6} src={GitHub} maxCompetence={maxCompetence} competenceLevel={8} competence={Locale.GetMessages("GitHub")} ></CompetenceBarContainer>
						<CompetenceBarContainer animTime={1.9} src={SystemMenagment} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("System_menagment")} ></CompetenceBarContainer>
						<CompetenceBarContainer animTime={2.2} src={AIPrompting} maxCompetence={maxCompetence} competenceLevel={6} competence={Locale.GetMessages("AIPrompting")} ></CompetenceBarContainer>
						<CompetenceBarContainer animTime={2.5} src={GraphicDesign} maxCompetence={maxCompetence} competenceLevel={3} competence={Locale.GetMessages("Graphic_Design")} ></CompetenceBarContainer>
					</SkillContainer>
				</SkillsPageSection>
				<SkillsPageSection title={"Soft_Skills"}>
					<SkillContainer >
						<SoftSkill animTime={1} src={Empaty} competence={Locale.GetMessages("Empaty")}></SoftSkill>
						<SoftSkill animTime={1.3} src={Consciousness} competence={Locale.GetMessages("Consciousness")}></SoftSkill>
						<SoftSkill animTime={1.6} src={TeamWork} competence={Locale.GetMessages("TeamWork")}></SoftSkill>
						<SoftSkill animTime={1.9} src={Flexible} competence={Locale.GetMessages("Flexible")}></SoftSkill>
						<SoftSkill animTime={2.2} src={FastLearner} competence={Locale.GetMessages("FastLearner")}></SoftSkill>
					</SkillContainer>

				</SkillsPageSection>
				<DownloadPDFSection title={"DownloadCV"} links={[{ download: "Diego_Vagni_CV_ITA.pdf", to: "/public/cvita.pdf", local: "Italian" }, { download: "Diego_Vagni_CV_ENG.pdf", to: "/public/cveng.pdf", local: "English" }]} />
			</>
		);
	}
}
export default CV;
