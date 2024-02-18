import { useContext } from "react";
import {StepProgress} from './childs/StepProgress.jsx'

import {
  PassLengthContext,
  PassSettingContext,
} from "../../../../context/PassContext";

import CSS from "./1.module.scss";

const Strength = () => {
  const { passLength } = useContext(PassLengthContext);
  const { settings } = useContext(PassSettingContext);

  let ckeckBox_strength = 0;
  settings.forEach((obj) => {
    if (obj.isTrue && ckeckBox_strength < 1.4) {
      ckeckBox_strength += 0.7;
    }
  });
  const allStrength = passLength * ckeckBox_strength;
  console.log("Strength re-render");

  let strengthResult = "";

  switch (true) {
    case allStrength > 10:
      {
        strengthResult = "Very strong";
      }
      break;
    case allStrength > 6:
      {
        strengthResult = "Strong";
      }
      break;
    case allStrength > 4:
      {
        strengthResult = "Medium";
      }
      break;
    case allStrength > 2:
      {
        strengthResult = "Weak";
      }
      break;
    case allStrength > 0:
      {
        strengthResult = "Very weak";
      }
      break;
    default: {
      strengthResult = "None";
    }
  }
  // const myClass = ;
  return (
    <div className={CSS.main}>
      <div>
        <h3>Strength: </h3>
      </div>
      <StepProgress allStrength={allStrength} />
      <div className={CSS.strengthStr}>
        <h3>{strengthResult}</h3>
      </div>
    </div>
  );
};


export { Strength };
