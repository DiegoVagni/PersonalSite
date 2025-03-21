import { Component } from "react";
import ProjectCard from "../components/pagesComponents/projectPage/ProjectCard";
import ImgPreview from "../components/siteComponents/card/previews/ImgPreview"
import IFramePreview from "../components/siteComponents/card/previews/IFramePreview"

import Locale from "../utils/Locale"
import styleSheet from "../utils/StyleSheet"
import Css from "../resources/icons/css.svg"
import Net from "../resources/icons/net.svg"
import Javascript from "../resources/icons/javascript.svg"
import Html from "../resources/icons/html.svg"
import React from "../resources/icons/react.svg"
import CSharp from "../resources/icons/c_sharp.svg"
import Python from "../resources/icons/python.svg"
import Unity from "../resources/icons/unity.svg"
import DownloadPDFSection from "../components/siteComponents/DownloadPDFSection"
import Twitch from "../resources/images/twitch.png"
import LastRun from "../resources/images/lastRun.png"
import LudoGame from "../resources/images/ludoGame.png"
import ComFram from "../resources/images/ComFram.png"
import Tesi from "../resources/images/tesi_preview.png"
import SmashWorlds from "../resources/images/smashWorlds.jpg"
import KeyGenerator from "../utils/KeyGenerator";
import TTC from "../components/pagesComponents/projectPage/TTC_Preview/TTC"
import Preview from "../components/siteComponents/card/previews/Preview"

import FlexStyle from "../scss/Flexes.module.scss"
class Projects extends Component {
	render() {

		return (
			<div className={FlexStyle.FlexColumnCenterTop}>
				<ProjectCard
					key={KeyGenerator.getNextKey()}
					title={"Site"}
					tech={[[Css, Locale.GetMessages("Css")], [Javascript, Locale.GetMessages("Javascript")], [Html, Locale.GetMessages("Html")], [React, Locale.GetMessages("React")]]}
					stampRot={"15deg"}
					GitHub={Locale.GetMessages("Private")}
					to={'/'}
					preview={<IFramePreview title={Locale.GetMessages("Site")} src={"/"} />}
					/>
					
				<ProjectCard
					key={KeyGenerator.getNextKey()}
					title={"Comunication_Framework"}
					tech={[[CSharp, Locale.GetMessages("CSharp")], [Net, Locale.GetMessages("Net")]]}
					stamp={"cool"}
					stampRot={"15deg"}
					GitHub={"Coming soon"}
					to={'/'}
					preview={<ImgPreview src={ComFram} local={"ComFram"}/> }
					/>
				<ProjectCard
					key={KeyGenerator.getNextKey()}
					title={"SmashWorld"} tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]}
					GitHub={Locale.GetMessages("Private")}
					to={'https://smashworld.io/'}
					preview={<ImgPreview src={SmashWorlds} local={"SmashWorlds"} />}
					/>
				
				<ProjectCard
					key={KeyGenerator.getNextKey()}
					title={"Tesi"}
					tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]}
					stamp={"cool"}
					stampRot={"15deg"}
					GitHub={Locale.GetMessages("Private")}
					to={'https://supsi.ch'} preview={<ImgPreview src={Tesi} local={"Tesi"} ></ImgPreview>}
					downloads={<DownloadPDFSection title={"Downloads"} links={[{ download: "Diego_Vagni_TESI_ITA.pdf", from: "Downloads/tesi/tesi.pdf", local: "Italian" }, { download: "Diego_Vagni_POSTER_TESI_ITA.pdf", from: "Downloads/tesi/poster_tesi.pdf", local: "Poster_Italian" }]} /> }
					/>
			
				<ProjectCard
					key={KeyGenerator.getNextKey()}
					title={"TTC"}
					tech={[[Css, Locale.GetMessages("Css")], [Javascript, Locale.GetMessages("Javascript")], [Html, Locale.GetMessages("Html")], [React, Locale.GetMessages("React")]]}
					GitHub={<a style={{ textDecoration: "none" }} href={"https://github.com/DiegoVagni/TTC"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_Repo")}</a>}

					to={'/'}
					preview={<Preview><TTC></TTC></Preview>} />

				<ProjectCard title={"LudoGame"}
					key={KeyGenerator.getNextKey()}
					tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]}
					GitHub={<a style={{ textDecoration: "none" }} href={"https://github.com/DiegoVagni/ludogame"} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages("This_Repo")}</a>}
					to={"/"}
					preview={<ImgPreview src={LudoGame} local={"LudoGame"} />}
					/>
				<ProjectCard
					key={KeyGenerator.getNextKey()}
					title={"LastRun"}
					tech={[[CSharp, Locale.GetMessages("CSharp")], [Unity, Locale.GetMessages("Unity")]]}
					GitHub={Locale.GetMessages("Private")}
					to={'https://supsi.ch'}
					preview={<ImgPreview src={LastRun} local={"LastRun"} />} />
				<ProjectCard
					key={KeyGenerator.getNextKey()}
					title={"TwitchStats"}
					tech={[[Python, Locale.GetMessages("Python")]]}
					GitHub={Locale.GetMessages("Private")}
					to={'https://supsi.ch'}
					preview={<ImgPreview src={Twitch} local={"TwitchStats"} />}
					/>
				</div>
		);
	}
}
export default Projects;
