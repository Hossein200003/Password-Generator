import "./globalcss.scss";
import myscss from "./anothercss.module.scss";
const Main = () => {
  return (
    <div>
        <div className="div1">used @mixin 1</div>
        <div className="div2">used @mixin 2</div>
        <div className={`${myscss.div3}`}>used @extend 1</div>
        <div className={`${myscss.div4}`}>used @extend 2</div>
      <h1 className={`${myscss.redT}`}>used module h1</h1>
      <h1>Global h1</h1>
      <main>
        <h1>used nesting h1</h1>
        <p>used nesting p</p>
      </main>
    </div>
  );
};
export default Main;
