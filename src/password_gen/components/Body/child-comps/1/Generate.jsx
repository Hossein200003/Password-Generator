import { useContext, useEffect } from "react";
import {
  PassLengthContext,
  PasswordContext,
  PassSettingContext,
} from "../../../../context/PassContext";

import { createPass } from "../../../../utils/createPass";
import CSS from "./1.module.scss";
const Generate = ({ context }) => {
  useEffect(() => {
    setPassword(password.slice(0, passLength));
  }, []);
  const letGenerate = useContext(context);
  const { setPassword } = useContext(PasswordContext);
  const { passLength } = useContext(PassLengthContext);
  const { settings } = useContext(PassSettingContext);
  const password = createPass(settings);
  console.log(letGenerate);

  return (
    <div className={CSS.center}>
      <button
        onClick={(e) => {
          if (!letGenerate) {
            setPassword(password.slice(0, passLength));
          } else {
            alert(`You have to select at least one checkbox`);
          }
        }}
        className={CSS.btn}
      >
        Generate →
      </button>
    </div>
  );
};
export { Generate };
