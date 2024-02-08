import { Header, Pass_body } from "./components/all-components";
import { PasswordContext_provider } from "./context/PassContext";
import "./global-style.scss";
const App = () => {
  console.log("++++App re-render++++");
  return (
    <div className="mother">
      <h3>Password Generator</h3>
      <div className="passwordCont">
        <PasswordContext_provider>
          <Header />

          <Pass_body />
        </PasswordContext_provider>

        <br />
      </div>
      <button onClick={() => location.reload()} className="reloadBtn">
        Click to Reload this page
      </button>
    </div>
  );
};

export default App;
