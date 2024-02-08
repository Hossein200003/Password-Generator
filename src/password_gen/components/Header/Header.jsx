import { Password, Copy } from "./child-comps/all-comps";
import "../../global-style.scss";
import CSS from "./1.module.scss";
const Header = () => {
  console.log("++Header re-render++");
  return (
    <div className={`passwordG ${CSS.main}`}>
      <h1></h1>
      <Password />
      <Copy text={null} />
    </div>
  );
};

export { Header };
