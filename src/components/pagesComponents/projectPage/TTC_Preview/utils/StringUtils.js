class StringUtils {
  static isVowel(char) {
    char = char.toUpperCase();
    return (
      char == "A" || char == "E" || char == "I" || char == "O" || char == "U"
    );
  }
}
export default StringUtils;
