

class StyleSheet {
	static font = "old london, sans-serif"; 
	static titleFont = "old london, sans-serif"; 
	static navBarFont = "old london, sans-serif"; 



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
	static LoadDefaultStyle(refreshApp) {
	
		fetch('Themes/Light.json', {
			headers: {
				'Accept': 'application/json'
			},
			method: 'GET'
		}).then((data) => { return data.json() }).then((json) => { StyleSheet.ChangeTheme(json); }).then(() => refreshApp());
	}
	static ChangeTheme(json) {
		StyleSheet.styles = new Map(Object.entries(json));
	}

	static getLayoutStyle(key) {
		switch (key) {
			case "Normal_Text": return {
				fontSize: "1rem",
				fontFamily: StyleSheet.font, }
			case "Title_Text": return {
				fontSize: "2rem",
				fontFamily: StyleSheet.titleFont,
			}
			case "Small_Text": return {
				fontSize: "0.5rem",
				fontFamily: StyleSheet.font,
			}
			case "Navbar_Text": return {
				fontSize: "0.75rem",
				fontFamily: StyleSheet.titleFont,
			}
			case "Setting_Select_Option": return {
				fontSize: "1rem",
				fontFamily: StyleSheet.font,
				backgroundColor:StyleSheet.Style("Select_BackgroundColor")
			}
			case "Setting_Select": return {
				fontSize: "1rem",
				fontFamily: StyleSheet.font,
				backgroundColor: StyleSheet.Style("Select_BackgroundColor"),
				width: "100%",
				height: "100%"
			}
			case "Modal": return {
				position: "fixed",
				width: "40%",
				padding: "20px",
				borderRadius: "10px",
				left: "30%",
				bottom: "20%",
				border: "2px solid " + StyleSheet.Style("Modal_Border"),
				backgroundColor: StyleSheet.Style("Modal_Color"),
				overflowY: "auto",
				overflowX: "none"
			}
			default: return {}

		}
	}
}
export default StyleSheet