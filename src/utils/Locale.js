import InvariantLabels from "../resources/invariant_labels.json"
import React from "react"
import KeyGenerator from "../utils/KeyGenerator"
class Locale {
	static defaultLocale = localStorage["locale"] ? localStorage["locale"] : "en";
	static invariantMap = null;
	static localeList = [
		{ name: "English", value: "en", lang: "English" },
		{ name: "Italiano", value: "it", lang: "Italian" },
	];

	static ChangeLocale(localCode, refreshAppHook) {
		if (this.invariantMap == null) {
			this.invariantMap = new Map(Object.entries(InvariantLabels))
		}
		
			Locale.defaultLocale = localCode;
			fetch('Locals/' + localCode + '.json', {
				headers: {
					'Accept': 'application/json'
				},
				method: 'GET'
			}).then((data) => { return data.json() }).then((json) => { this.localMap = new Map(Object.entries(json)); }).then(() => refreshAppHook());
			localStorage.setItem("locale", localCode);
		
	}
	static ParseMessage(message){
		if(message.includes("\n")){
	return message.split("\n").map((line, index) => (
        <React.Fragment key={KeyGenerator.getNextKey()}>
          {line}
          <br />
        </React.Fragment>
      ))
		}else{
		return message;
		}
	}
	static GetMessages(localName) {
		if (this.invariantMap != null && this.invariantMap.get(localName)) return this.invariantMap.get(localName) 

		if (this.localMap == null || this.localMap.get(localName) == undefined) return "MissingLocal";
	
		return this.ParseMessage(this.localMap.get(localName));
	}
}


export default Locale;
