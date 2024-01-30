class KeyGenerator {
	static key = 0;

	static getNextKey() {
		let toReturn = KeyGenerator.key;
		KeyGenerator.key++;
		return toReturn;
	}
}
export default KeyGenerator