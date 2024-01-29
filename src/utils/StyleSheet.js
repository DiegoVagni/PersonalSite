

class StyleSheet {
	styles = null;
	GetStyleSheet() {
		return this.styles
	}
	Style(styleCode) {
		if (this.styles == null) return "#fffff"
		return this.styles.get(styleCode)
	}

	ChangeStyle(key, value) {
	
		this.styles.set(key, value);
	}
	LoadDefaultStyle(refreshApp) {
	
		fetch('Themes/Light.json', {
			headers: {
				'Accept': 'application/json'
			},
			method: 'GET'
		}).then((data) => { return data.json() }).then((json) => { this.ChangeTheme(json); }).then(() => refreshApp());
	}
	ChangeTheme(json) {

		this.styles = new Map(Object.entries(json));

	}
}
export default StyleSheet