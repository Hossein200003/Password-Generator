import classNames from "classnames";
import CSS from "./1.module.scss";

const StepProgress = ({ allStrength }) => {
  const myClass = classNames(`${CSS.strength}`, {
    [CSS.one]: allStrength > 0,
    [CSS.two]: allStrength > 2,
    [CSS.three]: allStrength > 4,
    [CSS.four]: allStrength > 6,
    [CSS.five]: allStrength > 10,
  });
  return (
    <div className={`${myClass}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { StepProgress };
