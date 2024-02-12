

class StyleSheet {
	static font = "old london, sans-serif";
	static titleFont = "old london, sans-serif";
	static navBarFont = "old london, sans-serif";

	static themes = [{ name: "Light", value: "Light.json" }, { name: "Dark", value: "Dark.json" }]
	static currentIndex = 0;
	static styles = null;
	static animation = localStorage["animations"] ? true : localStorage["animations"]
	static GetStyleSheet() {
		return StyleSheet.styles
	}
	static Style(styleCode) {

		if (StyleSheet.styles == null) return "#fffff"
		return StyleSheet.styles.get(styleCode)
	}

	static ChangeStyle(key, value) {

		StyleSheet.styles.set(key, value);
	}
	static loadFromLocalStorage(refreshApp) {
		StyleSheet.styles = new Map(JSON.parse(localStorage["style"]))
		refreshApp()
	}
	static loadDefaultStyle(refreshApp) {
		localStorage["style"] ? StyleSheet.loadFromLocalStorage(refreshApp) : StyleSheet.loadStyle(0, refreshApp);
	}
	static loadStyle(index, refreshApp) {
		
		StyleSheet.currentIndex = index;
		fetch('Themes/' + StyleSheet.themes[StyleSheet.currentIndex].value, {
			headers: {
				'Accept': 'application/json'
			},
			method: 'GET'
		}).then((data) => { return data.json() }).then((json) => { StyleSheet.styles = new Map(Object.entries(json)) }).then(() => localStorage.setItem("style", JSON.stringify(Array.from(StyleSheet.styles.entries())))).then(() => refreshApp());
	}


	static getLayoutStyle(key) {
		switch (key) {
			case "Full_Parent": return {
				width: "100%",
				height: "100%"
			}
			case "Normal_Text": return {
				fontSize: "1rem",
				fontFamily: StyleSheet.font,
			}
			case "Parag_Text": return {
				...{
					textAlign: "justify",
					textJustify: "inter-word",
	
				}, ...StyleSheet.getLayoutStyle("Normal_Text")
			}
			case "Title_Text": return {
				fontSize: "2.5rem",
				fontFamily: StyleSheet.titleFont,
			}
			case "SubTitle_Text": return {
				fontSize: "2rem",
				fontFamily: StyleSheet.titleFont,
			}
			case "Biggest_Text": return {
				fontSize: "4rem",
				fontFamily: StyleSheet.titleFont,
			}
			case "Big_Text": return {
				fontSize: "3rem",
				fontFamily: StyleSheet.titleFont,
			}
			case "Small_Text": return {
				fontSize: "0.5rem",
				fontFamily: StyleSheet.font,
			}
			case "NavBar_Text": return {
				fontSize: "1.5rem",
				fontFamily: StyleSheet.navBarFont,
			}
			case "Setting_Select_Option": return {
				...{
					fontSize: "1rem",
					fontFamily: StyleSheet.font,
					backgroundColor: StyleSheet.Style("Select_BackgroundColor")
				}, ...StyleSheet.getLayoutStyle("Normal_Text")
			}
			case "Setting_Select": return {
				...{
					backgroundColor: StyleSheet.Style("Select_BackgroundColor"),
					width: "auto",
					heigth:"auto"
				}, ...StyleSheet.getLayoutStyle("Normal_Text")
			}
			case "Page": return {
				...{
					minWidth: "760px",
					minHeight:"100%",
					overflowX: "auto",
					overflowY: "auto",
					width: "100%"

				}, ...StyleSheet.getLayoutStyle("Flex_Column_Center")
			}
			case "Modal": return {
				position: "fixed",
				width: "40%",
				height: "80%",
				padding: "20px",
				borderRadius: "10px",
				left: "30%",
				top: "10%",
				border: "2px solid " + StyleSheet.Style("Modal_Border"),
				backgroundColor: StyleSheet.Style("Modal_Color"),
				overflowX: "none"
			}
			case "Modal_Content": return {
				...{
					backgroundColor: StyleSheet.Style("Modal_Color"),
					overflowY: "auto",
					overflowX: "auto"
				}, ...StyleSheet.getLayoutStyle("Full_Parent")
			}
			case "Menu_Button": return {
				...StyleSheet.getLayoutStyle("Small_Image"), ...{
					boxShadow: "0px 7px 10px -7px " + StyleSheet.Style("Shadow")
				}
			}
			case "Flex_Column_Center": return {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				alignContent: "center",
				justifyItems: "center",
			}

			case "Flex_Row_Center": return {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				alignContent: "center",
				justifyItems: "center",
			}
			case "Modal_Container": return {
				...{

					backgroundColor: StyleSheet.Style("Modal_Color"),
					overflowY: "auto",
					overflowX: "auto"
				}, ...StyleSheet.getLayoutStyle("Full_Parent")
			}
			case "Skills_Section_Layout": return {
				...{
					width: "80%",
				}, ...StyleSheet.getLayoutStyle("Flex_Column_Center")
			}
			case "Card_Container": return {
				...{
					justifyContent: "flex-Start",
					height: "fit-content",
					padding:"10px"
				}, ...StyleSheet.getLayoutStyle("Flex_Column_Center")
			}
			case "Card_Page": return {
				...{
					justifyContent: "flex-start",
				}, ...StyleSheet.getLayoutStyle("Full_Parent"), ...StyleSheet.getLayoutStyle("Flex_Column_Center")
			}
			case "Contact_Container": return {
				...{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "space-around",
					height: "90vh",
					width:"100%"
				}
			}
			case "CV_Section": return {
				width: "100%",
				display: "flex",
				flexDirection: "column",
				margin: "15px"
			}
			case "CV_Section_Container": return {
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				flexDirection: "row",
				flexFlow: "row wrap"
			}
			case "Card": return {
				...{
					display: "flex",
					backgroundColor: StyleSheet.Style("Card_Background"),
					minHeight: "98%",
					minWidth:"98%",
					
				}, ...StyleSheet.getLayoutStyle("Flex_Column_Center"), ...StyleSheet.getLayoutStyle("Full_Parent")
			}
			case "Card_Outer": return {
				...{
					boxShadow: StyleSheet.Style("Shadow") + " 0px 4px 12px",
					borderRadius: "10px",
					margin:"10px",
					border: "1px solid " + StyleSheet.Style("Modal_Border"),
					width: "90%",
					minHeight:"95%",
					overflowX: "hidden",
					overflowY: "auto",
					backgroundColor: StyleSheet.Style("Card_Background")
				}
			}
			case "Card_Outer_Min": return {
				...{
					boxShadow: StyleSheet.Style("Shadow") + " 0px 4px 12px",
					borderRadius: "10px",
					margin:"10px",
					border: "1px solid " + StyleSheet.Style("Modal_Border"),
					width: "90%",
					minHeight:"fit-content",
					overflowX: "hidden",
					overflowY: "auto",
					backgroundColor: StyleSheet.Style("Card_Background")
				}
			}
			case "Competence_Container": return {...{

				padding: "5px",
				justifyItems: "flex-start"

			}, ...StyleSheet.getLayoutStyle("Flex_Row_Center")
		}
			case "Card_Title_Container": return {
				...{ backgroundColor: StyleSheet.Style("Card_Background" )},
				...StyleSheet.getLayoutStyle("Flex_Column_Center")
			}
			case "Preview": return {
				...{
					width: "80%",
					height: "80%",
					borderRadius: "10%",
					margin: "5px",
				}, ...StyleSheet.getLayoutStyle("Flex_Column_Center")
				
			}
			case "Small_Image": return {
				...{

					maxHeight: "64px",
					maxWidth: "64px"
				}, ...StyleSheet.getLayoutStyle("Full_Parent")
			}
			case "Medium_Image": return {
				...{
					maxHeight: "64px",
					maxWidth: "64px"
				}, ...StyleSheet.getLayoutStyle("Full_Parent")
			}
			case "Preview_Image": return StyleSheet.getLayoutStyle("Preview")
			case "Home_Image": return {
				border: "10px solid " + StyleSheet.Style("Home_Links_Color"),
			}
			case "Tech_Container": return {
				...{
					margin: "5px",
					backgroundColor: StyleSheet.Style("Card_Background")
				}, ...StyleSheet.getLayoutStyle("Flex_Row_Center")
			}
			case "Contact_Info": return StyleSheet.getLayoutStyle("Flex_Row_Center")

			case "Home_Container": return {
				...{

					minWidth: "400px",
					justifyContent: "Center",
					position:"absolute",
					top:"25%"
				}, ...StyleSheet.getLayoutStyle("Flex_Row_Center")
			}
			case "Home_Link": return {
				textDecoration: "none",
				color: StyleSheet.Style("Home_Links_Color"),
				position: "absolute",
				fontFamily: " Optima, serif",
				margin: "0px",
				padding: "0px"
			}
			case "Home_Link_Dash": return {
				border: "2px solid " + StyleSheet.Style("Home_Links_Color"),
				height: "0 px",
				backgroundColor: StyleSheet.Style("Home_Links_Color"),
				position: "absolute"
			}
			case "Home_Link_Container": return {
				width: "auto",
				textDecoration: "underline",
				color: StyleSheet.Style("Home_Links_Color"),
				position: "absolute",

			}
			case "NavBar": return {
				position: "fixed",
				flexDirection: "row",
				width: "100%",
				height: "10%",
				alignItems: "flex-start",
				maxHeight: "64px",
				minHeight: "64px",
				zIndex: "10",
				top: "0px",
				backgroundColor: StyleSheet.Style("Navbar_Color"),

			}
			case "NavBar_Button": return {
				...{
					borderLeft: "1px solid " + StyleSheet.Style("Navbar_Button_Border_Color"),
					borderRight: "1px solid " + StyleSheet.Style("Navbar_Button_Border_Color"),
					maxHeight: "64px",
					textDecoration: "none",
					justifyContent:"center"
				}, ...StyleSheet.getLayoutStyle("Full_Parent"), ...StyleSheet.getLayoutStyle("Flex_Column_Center")
			}
			case "Button": return {
				...{
					backgroundColor: StyleSheet.Style("Button_Color"),
					borderRadius: "10px",
				}, ...StyleSheet.getLayoutStyle("Small_Text")
			}

			case "NavBar_SubMenu": return {
				...{
					backgroundColor: StyleSheet.Style("Navbar_Color"),
					width: "auto",
					minHeight: "64px"
				}, ...StyleSheet.getLayoutStyle("Flex_Column_Center")}
			case "Project_Card_Stats_Container": return {
				...{
					backgroundColor: StyleSheet.Style("Card_Background"),
					justifyContent: "center",
					flexWrap: "wrap",
					width:"auto",
				}, ...StyleSheet.getLayoutStyle("Flex_Row_Center")
			}
			case "Download_Section": return {
				...{
					width: "100%",
					margin: "15px",
					justifyContent:"center"

				}, ...StyleSheet.getLayoutStyle("Flex_Row_Center")
			}
			case "Setting_Menu": return {
				width: "auto",
				height: "auto",
				minHeight: "100px",
				minWidth: "200px",
				maxWidth: "1000px",
				MaxHeight: "100%",
				backgroundColor: StyleSheet.Style("Navbar_Color"),
				overflowX: "none",
				overflowY: "auto",
				display: "flex",
				flexDirection: "column",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyItems: "top",
				position: "absolute",
				right: "0px",
				top: "130%",
				padding: "5px",
				borderRadius: "10px 7px 10px 10px",
				borderBottom: "2px solid " + StyleSheet.Style("Navbar_Button_Border_Color"),
				borderLeft: "2px solid " + StyleSheet.Style("Navbar_Button_Border_Color"),
				borderRight: "1px solid " + StyleSheet.Style("Navbar_Button_Border_Color")

			}
			case "Setting_Container": return {
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				alignContent: "flex-start",
				width: "100%",
				
				maxHeight: "50px",


			}
			case "ColorPicker": return {
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center"

			}
			case "Download_Link": return {
				...{
					textDecoration: "none"
				}, ...StyleSheet.getLayoutStyle("Normal_Text")
			}
			default: return {}

		}
	}
}
export default StyleSheet