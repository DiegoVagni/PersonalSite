
class Locale {
	static defaultLocale = localStorage["locale"] ? localStorage["locale"] : "it";
	static localMap = null;
	static localeList = [
		{ name: "English", code: "en", lang: "English" },
		{ name: "Italiano", code: "it", lang: "Italian" },
	];

	static ChangeLocale(localCode, refreshAppHook) {

		
			Locale.defaultLocale = localCode;
			fetch('Locals/' + localCode + '.json', {
				headers: {
					'Accept': 'application/json'
				},
				method: 'GET'
			}).then((data) => { return data.json() }).then((json) => { this.localMap = new Map(Object.entries(json)); }).then(() => refreshAppHook());
			localStorage.setItem("locale", localCode);
		
	}

	static GetMessages(localName) {
		if (this.localMap == null || this.localMap.get(localName) == undefined) return "MissingLocal";
	
		return this.localMap.get(localName);
	}
}


export default Locale;
