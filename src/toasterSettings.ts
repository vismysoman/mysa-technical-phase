export function readToasterSettings(
  id: number,
  errorCB: (object, any) => void
) {
  let returnMe = "";

  if (0 == id) {
    type Error = {};
    let data = "";
    returnMe = errorCB(Error, data) + getDefaultSettings();
  } else {
    returnMe = getDefaultSettings();
  }

  return returnMe;
}

export function getDefaultSettings() {
  return "+ Default settings"; // Will be an Object or JSON data in real-wrold
}

export function errorCallBack(error, data) {
  return "Failed "; // Will be an Object or Exception in real-world
}
