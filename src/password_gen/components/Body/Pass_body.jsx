import { useState, createContext, useContext, useRef } from "react";
import { PassSettingContext } from "../../context/PassContext.jsx";
import {
  Slide_bar,
  Setting,
  Strength,
  Generate,
} from "./child-comps/all-comps.js";
import "../../global-style.scss";
import CSS from "./1.module.scss";

const PassGenerateContext = createContext(null);
// const setting_storage = ;
// const slider_storage = ;
const Pass_body = () => {
  let letGenerate = useRef(true);
  const { settings } = useContext(PassSettingContext);
  const hasChoisesChecked = settings
    .map((obj) => obj.isTrue === true)
    .every((isTrue) => isTrue === false);
  console.log(hasChoisesChecked);
  if (hasChoisesChecked) {
    letGenerate.current = true;
  } else {
    letGenerate.current = false;
  }

  return (
    <div className={`passwordG ${CSS.main}`} style={{ flexGrow: 10 }}>
      <div className={CSS.childeren}>
        <PassGenerateContext.Provider value={letGenerate.current}>
          <Slide_bar />
          <Setting />
          <Strength />
          <Generate context={PassGenerateContext} />
        </PassGenerateContext.Provider>
      </div>
    </div>
  );
};

export { Pass_body, PassGenerateContext };
