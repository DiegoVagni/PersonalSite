class DateUtils {
  static isFutureDate(date) {
    let now = new Date();
    let dateToCheck = new Date(date);
    if (now < dateToCheck) {
      return true;
    }
    return false;
  }
}
export default DateUtils;
