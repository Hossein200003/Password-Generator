import { useEffect, useState } from "react";
let myLocalStorage = JSON.parse(sessionStorage.getItem("info"));
if (myLocalStorage === null) {
  myLocalStorage = 0;
}
const App = () => {
  const [submitValue, setSubmitValue] = useState(myLocalStorage);
  // useEffect(()=>{(myLocalStorage===null&&setSubmitValue(0))},[]);

  const handleSet = (e) => {
    setSubmitValue(e.target.value);
  };
  const handleSave = () => {
    sessionStorage.setItem("info", JSON.stringify(submitValue));
  };
  const handleDelete = () => {
    sessionStorage.removeItem("info");
  };

  return (
    <div>
      <h1>App</h1>

      <input
        type="range"
        defaultValue={myLocalStorage}
        onChange={handleSet}
      ></input>
      <h2>Value: {submitValue}</h2>
      <button
        onClick={() => {
          handleSave();
          console.log(`Saved: ${submitValue}`);
        }}
      >
        Save value
      </button>
      <button
        onClick={() => {
          handleDelete();
          console.log(`Deleted`);
        }}
      >
        Delete value
      </button>
      <button onClick={() => location.reload()}>Reload this page</button>
    </div>
  );
};

export default App;
