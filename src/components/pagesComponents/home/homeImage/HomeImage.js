import { Component } from "react";
import Home from "../../../../resources/images/Diego_Vagni_IT_Engineer.jpg"
import Locale from "../../../../utils/Locale";
import styleSheet from "../../../../utils/StyleSheet";
import HomeLink from "./HomeLink";
import DashLessHomeLink from "./DashLessHomeLink";

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
		this.setState({ miniWidth: window.innerWidth < 1000, miniHeight: window.innerHeight < 600 });
	}
	degToRad(deg) {
		return deg * (Math.PI / 180);
	}
	render() {
		let borderRadius = 150;
		let linkColor = styleSheet.style("Home_Links_Color")

		let Imagestyle = {

			borderRadius: borderRadius + "px",
			width: borderRadius * 2 + "px",
			height: borderRadius * 2 + "px"
		}

		if (!this.state.miniWidth && !this.state.miniHeight) {
			return (
				<div style={styleSheet.getLayoutstyle("Home_Container")} >
					<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={-45} xOffset={0.2} yOffset={-40} dashXOffset={0} dashYOffset={-245} to={"/contacts"} text={Locale.GetMessages("Navbar_contact")} up={false}></HomeLink>
					<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={0} xOffset={0.1} yOffset={0} dashXOffset={-20} dashYOffset={-25} to={"/about"} text={Locale.GetMessages("Navbar_about")} up={false}></HomeLink>
					<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={-45} xOffset={-3.2} yOffset={30} dashXOffset={-300} dashYOffset={420} to={"/projects"} text={Locale.GetMessages("Navbar_projects")} up={true}> </HomeLink>
					<HomeLink dashWidth={200} color={linkColor} borderRadius={borderRadius} xdeg={45} xOffset={-3.3} yOffset={-40} dashXOffset={-300} dashYOffset={-440} to={"/skills"} text={Locale.GetMessages("Navbar_cv")} up={false}></HomeLink>



					<img style={{ ...Imagestyle, ...styleSheet.getLayoutstyle("Home_Image") }} src={Home} alt="Home" />

				</div>
			);
		} else if (this.state.miniWidth) {
			return (
				<div style={{ ...styleSheet.getLayoutstyle("Full_Parent"), ...{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" } }} >
					<img style={{
						...Imagestyle, ...styleSheet.getLayoutstyle("Large_Image")
					}} src={Home} alt="Home" />
					<DashLessHomeLink to={"/contacts"} text={Locale.GetMessages("Navbar_contact")}></DashLessHomeLink>
					<DashLessHomeLink to={"/about"} text={Locale.GetMessages("Navbar_about")}></DashLessHomeLink>
					<DashLessHomeLink to={"/projects"} text={Locale.GetMessages("Navbar_projects")}></DashLessHomeLink>
					<DashLessHomeLink to={"/skills"} text={Locale.GetMessages("Navbar_cv")}></DashLessHomeLink>
				</div>
			)
		} else {
			return (
				<div style={{ ...styleSheet.getLayoutstyle("Full_Parent"), ...{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center",overflow: "hidden" } }} >
					<img style={{ ...Imagestyle, ...styleSheet.getLayoutstyle("Large_Image") }} src={Home} alt="Home" />
					<div style={{ ...styleSheet.getLayoutstyle("Flex_Row_Center"), ...styleSheet.getLayoutstyle("Full_Parent")}}>
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
