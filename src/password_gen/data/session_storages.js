import { initialSetting } from "./initialSetting.js";

let passLength_session_storage = JSON.parse(sessionStorage.getItem("number"));
if (!passLength_session_storage) {
  passLength_session_storage = 10;
}
//
let setting_session_storage = JSON.parse(sessionStorage.getItem("setting"));
if (!setting_session_storage) {
  setting_session_storage = initialSetting;
}

export { passLength_session_storage, setting_session_storage };
