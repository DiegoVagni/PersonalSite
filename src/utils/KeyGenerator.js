class KeyGenerator {
	static key = 0;

	static getNextKey() {
		let toReturn = KeyGenerator.key;
		KeyGenerator.key++;
		if (KeyGenerator.key === Number.MAX_SAFE_INTEGER) {
			KeyGenerator.key = 0;
		}
		return toReturn;
	}
}
export default KeyGenerator