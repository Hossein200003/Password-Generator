import { useContext } from "react";
import classNames from "classnames";
import {
  PassLengthContext,
  PassSettingContext,
} from "../../../../context/PassContext";

import CSS from "./1.module.scss";

const Strength = () => {
  const { passLength } = useContext(PassLengthContext);
  const { settings } = useContext(PassSettingContext);

  let strength2 = 0;
  settings.forEach((obj) => {
    if (obj.isTrue && strength2 < 1.4) {
      strength2 += 0.7;
    }
  });
  const allStrength = passLength * strength2;
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

const StepProgress = ({ allStrength }) => {
  const myClass = classNames(`${CSS.strength}`, {
    [CSS.one]: allStrength > 0,
    [CSS.two]: allStrength > 2,
    [CSS.three]: allStrength > 4,
    [CSS.four]: allStrength > 6,
    [CSS.five]: allStrength > 10,
  });
  return (
    <div className={`${myClass}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export { Strength };
