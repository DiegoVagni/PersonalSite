

class StyleSheet {
	static font = "old london, sans-serif";
	static titleFont = "old london, sans-serif";
	static navBarFont = "old london, sans-serif";

	static themes = [{ name: "Light", value: "Light.json" }, { name: "Dark", value: "Dark.json" }]
	static currentIndex = 0;
	static styles = null;

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
	static loadStyle(index, refreshApp) {
		StyleSheet.currentIndex = index;
		fetch('Themes/' + StyleSheet.themes[StyleSheet.currentIndex].value, {
			headers: {
				'Accept': 'application/json'
			},
			method: 'GET'
		}).then((data) => { return data.json() }).then((json) => { StyleSheet.styles = new Map(Object.entries(json)) }).then(() => refreshApp());
	}


	static getLayoutStyle(key) {
		switch (key) {
			case "Normal_Text": return {
				fontSize: "1rem",
				fontFamily: StyleSheet.font,
			}
			case "Parag_Text": return {
				...StyleSheet.getLayoutStyle("Normal_Text"), ...{
					textAlign: "justify",
					textJustify: "inter-word"
				}
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
				fontSize: "1rem",
				fontFamily: StyleSheet.navBarFont,
			}
			case "Navbar_Text": return {
				fontSize: "0.75rem",
				fontFamily: StyleSheet.titleFont,
			}
			case "Setting_Select_Option": return {
				fontSize: "1rem",
				fontFamily: StyleSheet.font,
				backgroundColor: StyleSheet.Style("Select_BackgroundColor")
			}
			case "Setting_Select": return {
				fontSize: "1rem",
				fontFamily: StyleSheet.font,
				backgroundColor: StyleSheet.Style("Select_BackgroundColor"),
				width: "100%",
				height: "100%"
			}
			case "Page": return {

				height: "95%",
				width: "100%",
				display: "flex",
				overflow: "hidden"
			}
			case "Modal": return {
				position: "fixed",
				width: "40%",
				height: "80%",
				padding: "20px",
				borderRadius: "10px",
				left: "30%",
				bottom: "20%",
				border: "2px solid " + StyleSheet.Style("Modal_Border"),
				backgroundColor: StyleSheet.Style("Modal_Color"),
				overflowY: "auto",
				overflowX: "none"
			}
			case "Modal_Content": return {
				width: "100%",
				height: "100%",
				backgroundColor: StyleSheet.Style("Modal_Color"),
				overflowY: "auto",
				overflowX: "auto"
			}
			case "Menu_Button": return {
				...StyleSheet.getLayoutStyle("Small_Image"), ...{
					boxShadow: "0px 7px 10px -7px " + StyleSheet.Style("Shadow")
				}
			}
			case "Center_Column_Flex": return {
				display: "flex",
				height: "100%",
				width: "100%",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center"
			}
			case "Modal_Container": return {

				width: "100%",
				height: "100%",
				backgroundColor: StyleSheet.Style("Modal_Color"),
				overflowY: "auto",
				overflowX: "auto"
			}
			case "Skills_Section_Layout": return {
				height: "100%",
				width: "80%",
				display: "flex",
				flexDirection: "column"
			}
			case "Card_Container": return {
				height: "100%",
				width: "100%",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				justifyItems: "center",
				flexDirection: "column",
				overflowY: "auto"
			}
			case "Contact_Container": return {
				display: "flex", flexWrap: "wrap", width: "100%", height: "100%", flexDirection: "row", justifyContent: "space-around"
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
				width: "90%",
				height: "80%",
				borderRadius: "20px",
				margin: "10px",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				justifyItems: "center",
				flexDirection: "column",
				flexGrow: "1",
				overflowY: "auto",
				padding: "5px",
				border: "1px solid " + StyleSheet.Style("Modal_Border"),
				backgroundColor: StyleSheet.Style("Card_Background"),
				boxShadow: StyleSheet.Style("Shadow") + " 0px 4px 12px"

			}
			case "Card_Outer": return {
				minHeight: "95%",
				width: "90%",
				height: "95%",
				minWidth: "600px",
				overflowX: "hidden",
				overflowY: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				justifyItems: "center"
			}
			case "Competence_Container": return {
				display: "flex",
				flexDirection: "row",
				padding: "5px",
				overflowY: "auto",
				justifyItems: "flex-start"
			}
			case "Card_Title_Container": return {

			}
			case "Preview": return {
				width: "80%",
				height: "80%",
				borderRadius: "10%"
			}
			case "Small_Image": return {
				width: "100%",
				height: "100%",
				maxHeight: "50px",
				maxWidth: "50px"
			}
			case "Preview_Image": return {
				width: "100%",
				height: "100%",
				maxHeight: "50px",
				maxWidth: "50px"
			}
			case "Medium_Image": return {
				width: "100%",
				height: "100%",
				maxHeight: "200px",
				maxWidth: "200px"
			}
			case "Home_Image": return {

				border: "10px solid " + StyleSheet.Style("Home_Links_Color"),

			}
			case "Flex_Row_Center_Container": return {
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center",
				justifyItems: "center",
				margin: "5px"
			}
			case "Flex_Column_Center_Container": return {
				width: "100%",
				display: "flex",
				justifyContent: "flex-start",
				flexDirection: "column",
			}
		
			case "Tech_Container": return {

				display: "flex",
				flexDirection: "row",
				justifyItems: "center",
				justifyContent: "center",
				alignItems: "center",
				margin: "5px"
			}
			case "Contact_Info": return {
				display: "flex",
				alignContent: "center",
				justifyContent: "center",
				alignItems: "center"
			}

			case "Home_Container": return {
				width: "100%",
				height: "100%",
				minWidth: "900px",
				top: "5%",
				left: "15%",
				position: "fixed",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
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
				maxHeight: "50px",
				minHeight: "50px",
				zIndex: "10",
				top: "0px",
				backgroundColor: StyleSheet.Style("Navbar_Color"),

			}
			case "NavBar_Button": return {
				width: "100%",
				height: "100%",
				alignItems: "center",
				justifyContent: "center",
				borderLeft: "1px solid " + StyleSheet.Style("Navbar_Button_Border_Color"),
				borderRight: "1px solid " + StyleSheet.Style("Navbar_Button_Border_Color"),
				display: "flex",
				maxHeight: "50px",
				textDecoration: "none",

			}
			case "NavBar_SubMenu": return {
				display: "flex",
				flexDirection: "Column",
				alignItems: "center",
				backgroundColor: StyleSheet.Style("Navbar_Color"),
				width: "auto",
				minHeight: "50px"
			}
			case "Project_Card_Stats_Container": return {
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap"
			}
			case "Download_Section": return {
				width: "100%",
				display: "flex",
				flexDirection: "row",
				margin: "15px"

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
				maxHeight: "50px"

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