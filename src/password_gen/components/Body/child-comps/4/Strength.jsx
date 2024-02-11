import { useContext } from "react";
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
  if (allStrength > 10) {
    strengthResult = "Very strong";
  } else if (allStrength > 6) {
    strengthResult = "Strong";
  } else if (allStrength > 4) {
    strengthResult = "Medium";
  } else if (allStrength > 2) {
    strengthResult = "Weakx";
  } else if (allStrength > 0) {
    strengthResult = "Very weak";
  } else {
    strengthResult = "😐";
  }
  return (
    <div className={CSS.main}>
      <h3>Strengthx: </h3>
      <div className={`${CSS.strength} ${CSS.n}`}>
        <h3>{strengthResult}</h3>
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
      </div>
    </div>
  );
};
export { Strength };
