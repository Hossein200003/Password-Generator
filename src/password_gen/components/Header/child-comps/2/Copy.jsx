import React, { useContext } from "react";
import { PasswordContext } from "../../../../context/PassContext";
import { MdOutlineContentCopy } from "react-icons/md";
import { Flip, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CSS from "./1.module.scss";
import { createPortal } from "react-dom";

const Copy = () => {
  const { password } = useContext(PasswordContext);
  const handleCopy = (text) => navigator.clipboard.writeText(text);
  const showToast = () => toast("Copied");
  const myToastDomElement = document.getElementById("toast");
  console.log("Copy re-render");

  return (
    <div className={CSS.copy}>
      <div
        className={CSS.copy}
        onClick={() => {
          handleCopy(password);
          showToast();
        }}
      >
        <MdOutlineContentCopy className={CSS.icon} />
      </div>

      {/* {createPortal( */}
      <ToastContainer
        position={"top-center"}
        transition={Zoom}
        hideProgressBar
        autoClose={100}
        className={CSS.toast}
        theme="light"
        limit={1}
        closeButton={false}
        toastClassName={CSS.x}
      />
      {/* myToastDomElement */}
      {/* )} */}
    </div>
  );
};
export { Copy };
