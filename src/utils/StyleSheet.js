

class StyleSheet {
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

	static GetLayoutStyle(key) {
		switch (key) {
			case "text": return { fontSize: "20px" }
			default: return {}

		}
	}
}
export default StyleSheet