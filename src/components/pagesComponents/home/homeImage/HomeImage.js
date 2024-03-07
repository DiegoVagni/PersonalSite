import { Component } from "react";
import Home from "../../../../resources/images/Diego_Vagni_IT_Engineer.jpg"
import Locale from "../../../../utils/Locale";
import HomeLink from "./HomeLink";
import DashLessHomeLink from "./DashLessHomeLink";
import HomeStyle from "./HomeImage.module.scss"
import AppStyle from "../../../../scss/App.module.scss"
import FlexStyle from "../../../../scss/Flexes.module.scss"
import ImageStyle from "../../../../scss/Images.module.scss"
class HomeImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			miniWidth: false,
			miniHeight: false
		}
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
		this.setState({ miniWidth: window.innerWidth < 1200, miniHeight: window.innerHeight < 1000 });
	}
	degToRad(deg) {
		return deg * (Math.PI / 180);
	}
//					<HomeLink className={HomeStyle.BottomLeft} to={"/about"} text={Locale.GetMessages("Navbar_about")} up={false}></HomeLink>
//	<HomeLink className={HomeStyle.TopRight} to={"/projects"} text={Locale.GetMessages("Navbar_projects")} up={true}> </HomeLink>
//	<HomeLink className={HomeStyle.BottomRight} to={"/skills"} text={Locale.GetMessages("Navbar_cv")} up={false}></HomeLink>
	render() {

		
		if (!this.state.miniWidth && !this.state.miniHeight) {
			return (
				<div className={HomeStyle.HomeContainer} >
					<HomeLink topClassName={HomeStyle.TopLeft} hrClassName={HomeStyle.TopLeftDash} to={"/contacts"} text={Locale.GetMessages("Navbar_contact")} up={false}></HomeLink>
					<HomeLink topClassName={HomeStyle.BottomLeft} hrClassName={HomeStyle.BottomLeftDash} to={"/about"} text={Locale.GetMessages("Navbar_about")} up={true}></HomeLink>
					<HomeLink topClassName={HomeStyle.TopRight} hrClassName={HomeStyle.TopRightDash} to={"/projects"} text={Locale.GetMessages("Navbar_projects")} up={false}> </HomeLink>
					<HomeLink topClassName={HomeStyle.BottomRight} hrClassName={HomeStyle.BottomRightDash} to={"/skills"} text={Locale.GetMessages("Navbar_cv")} up={true}></HomeLink>


					<img className={`${HomeStyle.HomeImageRounded} ${HomeStyle.HomeImage} ${ImageStyle.LargeImage}`} src={Home} alt="Home" />

				</div>
			);
		} else if (this.state.miniWidth) {
			return (
				<div className={`${AppStyle.FullParent} ${FlexStyle.FlexColumnCenterTop}`} >
					<img className={`${HomeStyle.HomeImageRounded} ${HomeStyle.HomeImage} ${HomeStyle.ImageVert}`} src={Home} alt="Home" />
					<DashLessHomeLink to={"/contacts"} text={Locale.GetMessages("Navbar_contact")}></DashLessHomeLink>
					<DashLessHomeLink to={"/about"} text={Locale.GetMessages("Navbar_about")}></DashLessHomeLink>
					<DashLessHomeLink to={"/projects"} text={Locale.GetMessages("Navbar_projects")}></DashLessHomeLink>
					<DashLessHomeLink to={"/skills"} text={Locale.GetMessages("Navbar_cv")}></DashLessHomeLink>
				</div>
			)
		} else {
			return (
				<div className={`${AppStyle.FullParent} ${FlexStyle.FlexColumnCenterTop}`}>
					<img className={`${HomeStyle.HomeImageRounded} ${HomeStyle.HomeImage} ${HomeStyle.ImageHor}`} src={Home} alt="Home" />
					<div className={`${AppStyle.FullParent} ${FlexStyle.FlexRowCenter}`}>
					<DashLessHomeLink to={"/contacts"} text={Locale.GetMessages("Navbar_contact")}></DashLessHomeLink>
					<DashLessHomeLink to={"/about"} text={Locale.GetMessages("Navbar_about")}></DashLessHomeLink>
					<DashLessHomeLink to={"/projects"} text={Locale.GetMessages("Navbar_projects")}></DashLessHomeLink>
					<DashLessHomeLink to={"/skills"} text={Locale.GetMessages("Navbar_cv")}></DashLessHomeLink>
					</div>
				</div>)
		}
	}
}
export default HomeImage;
