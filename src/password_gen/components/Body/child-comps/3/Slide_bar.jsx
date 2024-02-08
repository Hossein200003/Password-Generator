import { useContext } from "react";
import { PassLengthContext } from "../../../../context/PassContext";
import CSS from "./1.module.scss";
const s_storage = JSON.parse(sessionStorage.getItem("number"));

const Slide_bar = ({}) => {
  const { setPassLength, passLength } = useContext(PassLengthContext);
  const handeLength = (e) => {
    setPassLength(e.target.value);
    sessionStorage.setItem("number", JSON.stringify(e.target.value));
  };
  console.log("Slide_bar re-render");

  return (
    <div className={CSS.main}>
      <div className={CSS.length}>
        <h2>Character Length</h2>
        <h1>{passLength}</h1>
      </div>
      <input
        type="range"
        min={2}
        max={10}
        value={passLength}
        onChange={handeLength}
        className={CSS.sld}
      ></input>
    </div>
  );
};

export { Slide_bar };
