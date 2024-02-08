import { useContext } from "react";
import { PassLengthContext } from "../../../../context/PassContext";
const s_storage = JSON.parse(sessionStorage.getItem("number"));

const Slide_bar = ({}) => {
  const { setPassLength, passLength } = useContext(PassLengthContext);
  const handeLength = (e) => {
    setPassLength(e.target.value);
    sessionStorage.setItem("number", JSON.stringify(e.target.value));
  };
  console.log("Slide_bar re-render");

  return (
    <div>
      <p>length: {passLength}</p>
      <input
        type="range"
        min={2}
        max={10}
        value={passLength}
        onChange={handeLength}
      ></input>
    </div>
  );
};

export { Slide_bar };
