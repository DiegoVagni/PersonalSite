

class StyleSheet {
	static font = "old london, sans-serif";
	static titleFont = "old london, sans-serif";
	static navBarFont = "old london, sans-serif";

	static themes = [{ name: "Light", value: "Light.json" }, { name: "Dark", value: "Dark.json" }]
	static currentIndex = 0;
	static styles = null;
	//Really? localStorage bool is read as a string ?
	static animation = localStorage["animations"] === "true" ? true : localStorage["animations"] == undefined ? true:false
	static getAnimationBool() {
		return StyleSheet.animation
	}

	static toggleAnimations() {
		StyleSheet.animation = !StyleSheet.animation
		localStorage["animations"] = StyleSheet.animation
	}
	static getstyleSheet() {
		return StyleSheet.styles
	}
	static style(styleCode) {

		if (StyleSheet.styles == null) return "#fffff"
		return StyleSheet.styles.get(styleCode)
	}

	static changeStyle(key, value) {

		StyleSheet.styles.set(key, value);
	}
	static loadFromLocalStorage(refreshApp) {
		StyleSheet.styles = new Map(JSON.parse(localStorage["style"]))
		refreshApp()
	}
	static loadDefaultstyle(refreshApp) {
		localStorage["style"] ? StyleSheet.loadFromLocalStorage(refreshApp) : StyleSheet.loadstyle(0, refreshApp);
	}
	static loadstyle(index, refreshApp) {
		
		StyleSheet.currentIndex = index;
		fetch('Themes/' + StyleSheet.themes[StyleSheet.currentIndex].value, {
			headers: {
				'Accept': 'application/json'
			},
			method: 'GET'
		}).then((data) => { return data.json() }).then((json) => { StyleSheet.styles = new Map(Object.entries(json)) }).then(() => localStorage.setItem("style", JSON.stringify(Array.from(StyleSheet.styles.entries())))).then(() => refreshApp());
	}


	static getLayoutstyle(key) {
		switch (key) {
			default: return {}

		}
	}
}
export default StyleSheet