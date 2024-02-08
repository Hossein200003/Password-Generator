import { useState, createContext, useReducer } from "react";
import { setting_reducer } from "../reducer/setting_reducer.js";
import {
  passLength_session_storage,
  setting_session_storage,
} from "../data/session_storages.js";

const PasswordContext = createContext(null);
const PassLengthContext = createContext(null);
const PassSettingContext = createContext(null);

const PasswordContext_provider = ({ children }) => {
  const [password, setPassword] = useState([]);
  const [passLength, setPassLength] = useState(passLength_session_storage);
  const [settings, dispatch] = useReducer(
    setting_reducer,
    setting_session_storage
  );
  console.log(settings);
  return (
    <div>
      <PassSettingContext.Provider value={{ settings, dispatch }}>
        <PassLengthContext.Provider value={{ passLength, setPassLength }}>
          <PasswordContext.Provider value={{ password, setPassword }}>
            {children}
          </PasswordContext.Provider>
        </PassLengthContext.Provider>
      </PassSettingContext.Provider>
    </div>
  );
};
export {
  PasswordContext,
  PassLengthContext,
  PassSettingContext,
  PasswordContext_provider,
};
