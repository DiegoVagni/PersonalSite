import DateUtils from "./DateUtils";
class FakePromises {
  static firstPromise = (val) => {
    return new Promise((resolve, reject) => {
      if (
        val.genericStringValue != undefined &&
        val.vowelValue != undefined &&
        val.numberValue == 42
      ) {
        resolve({ code: 200 });
      } else {
        reject({ code: 400 });
      }
    });
  };
  static secondPromise = (val) => {
    return new Promise((resolve, reject) => {
      if (val.dateValue != undefined && DateUtils.isFutureDate(val.dateValue)) {
        resolve({ code: 200 });
      } else {
        reject({ code: 400 });
      }
    });
  };
  static thirdPromise = (val) => {
    return new Promise((resolve, reject) => {
      if (val.firstCheck) {
        resolve({ code: 200 });
      } else {
        reject({ code: 400 });
      }
    });
  };
}
export default FakePromises;
