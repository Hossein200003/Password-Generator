import React, { useContext } from "react";
import { PasswordContext } from "../../../../context/PassContext";
import CSS from "./1.module.scss";

const Password = () => {
  const { password } = useContext(PasswordContext);
  console.log("Password re-render");

  return (
    <div>
      <h1 className={CSS.password}>{password}</h1>
    </div>
  );
};
export { Password };
