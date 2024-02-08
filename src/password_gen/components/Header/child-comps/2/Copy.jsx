import React, { useContext } from "react";
import { PasswordContext } from "../../../../context/PassContext";
import CSS from "./1.module.scss";

const Copy = () => {
  const { password } = useContext(PasswordContext);
  const handleCopy = (text) => navigator.clipboard.writeText(text);
  console.log("Copy re-render");

  return (
    <div style={{ display: "inline" }} className={CSS.x}>
      <button
        onClick={() => handleCopy(password)}
        style={{ display: "inline" }}
      >
        copy
      </button>
    </div>
  );
};
export { Copy };
