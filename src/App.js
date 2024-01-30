import "./App.css";
import { Component } from "react";

import { Routes, Route } from "react-router-dom";
import Locale from "./utils/Locale";

import NavBar from "./components/navBar/NavBar.js";
import { useLocation } from "react-router-dom";
import StyleSheet from "./utils/StyleSheet.js"

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import CV from "./pages/cv";
import Projects from "./pages/Projects";
import Loading from "./components/basics/loading/Loading"
import WelcomeAnimation from "./components/basics/homeAnimationWelcome/WelcomeAnimation"
function withLocation(Component) {

	return function WrappedComponent(props) {
		let location = useLocation().pathname
		return <Component {...props} location={location} />;
	}
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			refreshApp: false,
			ready: false,
			first:true
		};
		this.ChangeLanguage = this.ChangeLanguage.bind(this);
		this.RefreshApplication = this.RefreshApplication.bind(this);
		this.loadedStyle = this.loadedStyle.bind(this)
		this.EndAnimHook = this.EndAnimHook.bind(this)

	}
	loadedStyle() {
		this.setState({
			refreshApp: !this.state.refreshApp,
			ready: true
		})
	}
	componentDidMount() {
		StyleSheet.loadStyle(0, this.loadedStyle)
		this.ChangeLanguage(Locale.defaultLocale);
	}
	RefreshApplication() {
		this.setState({
			refreshApp: !this.state.refreshApp,

		});
	}

	ChangeLanguage(e) {

		let localCode = e.target == undefined ? e : e.target.value;

		Locale.ChangeLocale(localCode, this.RefreshApplication);

	}
	EndAnimHook(){
	this.setState({first:false})
}
	render() {
		if (!this.state.ready) { return <Loading></Loading> }
		let backCol = this.props.location !== "/" ? StyleSheet.Style("Page_Background") : StyleSheet.Style("Home_Background");
		document.body.style.backgroundColor = backCol
		return (
			<>
				{this.state.first ? (<WelcomeAnimation backCol={backCol} StyleSheet={StyleSheet} end={this.EndAnimHook} ></WelcomeAnimation >) : (<>

					<NavBar root={this.props.root} StyleSheet={StyleSheet} languageChange={this.ChangeLanguage} refreshApp={this.RefreshApplication} />
					<div style={{ height: "10%", maxHeight: "50px", minHeight: "50px", width: "100%" }}>

					</div>
					<Routes>
						<Route exact path="/" element={<Home StyleSheet={StyleSheet} />} />
						<Route path="/contacts" element={<Contacts StyleSheet={StyleSheet} />} />
						<Route path="/about" element={<About StyleSheet={StyleSheet} />} />
						<Route path="/projects" element={<Projects StyleSheet={StyleSheet} />} />

						<Route path="/skills" element={<CV StyleSheet={StyleSheet} />} />
					</Routes></>
				) 
	}


			</>


		);
	}
}

export default withLocation(App);
