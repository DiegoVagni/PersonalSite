import "./scss/App.module.scss";
import { Component } from "react";

import { Routes, Route } from "react-router-dom";
import Locale from "./utils/Locale";
import { useLocation } from "react-router-dom";

import DVNavBar from "./components/siteComponents/navBar/DVNavBar";
import NavBarStyle from "./components/general/navBar/Navbar.module.scss";
import styleSheet from "./utils/StyleSheet"

//pages
import Home from "./pagesLayouts/Home";
import Page from "./pagesLayouts/Page";
import About from "./pagesLayouts/About";
import Contacts from "./pagesLayouts/Contacts";
import CV from "./pagesLayouts/CV";
import Projects from "./pagesLayouts/Projects";
import Loading from "./components/pagesComponents/utilPages/Loading"
import StartAnimation from "./components/coolAnims/startAnimation/StartAnimation"
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
			first: true,
		};
		this.ChangeLanguage = this.ChangeLanguage.bind(this);
		this.RefreshApplication = this.RefreshApplication.bind(this);
		this.loadedstyle = this.loadedstyle.bind(this)
		this.EndAnimHook = this.EndAnimHook.bind(this)
	}

	loadedstyle() {
		this.setState({
			refreshApp: !this.state.refreshApp,
			ready: true
		})
	}
	componentDidMount() {
		styleSheet.loadDefaultstyle(this.loadedstyle)
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

		return (
			<>
				{styleSheet.getAnimationBool() && this.state.first ? (<StartAnimation end={this.EndAnimHook} ></StartAnimation>) : (<>
					
					<DVNavBar root={this.props.root} languageChange={this.ChangeLanguage} location={this.props.location} refreshApp={this.RefreshApplication} />
					<Page>
						<div className={NavBarStyle.NavBarSeparator} >

					</div>
						{<Routes>
							<Route exact path="/" element={<Home styleSheet={styleSheet} />} />
							<Route path="/contacts" element={<Contacts styleSheet={styleSheet} />} />
							<Route path="/about" element={<About styleSheet={styleSheet} />} />
							<Route path="/projects" element={<Projects styleSheet={styleSheet} />} />

							<Route path="/skills" element={<CV styleSheet={styleSheet} />} />
						</Routes>}
					</Page>
					</>
					
				) 
	}


			</>


		);
	}
}

export default withLocation(App);
