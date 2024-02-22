

class styleSheet {
	static font = "old london, sans-serif";
	static titleFont = "old london, sans-serif";
	static navBarFont = "old london, sans-serif";

	static themes = [{ name: "Light", value: "Light.json" }, { name: "Dark", value: "Dark.json" }]
	static currentIndex = 0;
	static styles = null;
	//Really? localStorage bool is read as a string ?
	static animation = localStorage["animations"] === "true" ? true : localStorage["animations"] == undefined ? true:false
	static getAnimationBool() {
		return styleSheet.animation
	}

	static toggleAnimations() {
		styleSheet.animation = !styleSheet.animation
		localStorage["animations"] = styleSheet.animation
	}
	static getstyleSheet() {
		return styleSheet.styles
	}
	static style(styleCode) {

		if (styleSheet.styles == null) return "#fffff"
		return styleSheet.styles.get(styleCode)
	}

	static changeStyle(key, value) {

		styleSheet.styles.set(key, value);
	}
	static loadFromLocalStorage(refreshApp) {
		styleSheet.styles = new Map(JSON.parse(localStorage["style"]))
		refreshApp()
	}
	static loadDefaultstyle(refreshApp) {
		localStorage["style"] ? styleSheet.loadFromLocalStorage(refreshApp) : styleSheet.loadstyle(0, refreshApp);
	}
	static loadstyle(index, refreshApp) {
		
		styleSheet.currentIndex = index;
		fetch('Themes/' + styleSheet.themes[styleSheet.currentIndex].value, {
			headers: {
				'Accept': 'application/json'
			},
			method: 'GET'
		}).then((data) => { return data.json() }).then((json) => { styleSheet.styles = new Map(Object.entries(json)) }).then(() => localStorage.setItem("style", JSON.stringify(Array.from(styleSheet.styles.entries())))).then(() => refreshApp());
	}


	static getLayoutstyle(key) {
		switch (key) {
			default: return {}

		}
	}
}
export default styleSheet