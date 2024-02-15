import { Header, Pass_body } from "./components/all-components";
import { PasswordContext_provider } from "./context/PassContext";
import { IoMdRefresh } from "react-icons/io";
import "./global-style.scss";
const App = () => {
  console.log("++++App re-render++++");
  return (
    <div className="mother">
      <h2>Password Generator</h2>
      <div className="passwordCont">
        <PasswordContext_provider>
          <Header />
          <Pass_body />
        </PasswordContext_provider>
      </div>

      <div onClick={() => location.reload()} className="reloadContainer">
        
        <IoMdRefresh className="reloadBtn" />
      </div>
      <p>Reload this page</p>
    </div>
  );
};

export default App;
