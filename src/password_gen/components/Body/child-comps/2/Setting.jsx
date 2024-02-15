import { useContext } from "react";
import { PassSettingContext } from "../../../../context/PassContext";
import { mySessionSetter } from "./setting-utils/setting-sessionSetter";
import CSS from "./1.module.scss";
const Setting = () => {
  const { settings, dispatch } = useContext(PassSettingContext);
  const handleSetting = (type, checked) =>
    dispatch({ type: type, checked: checked });
  console.log("Setting re-render");

  return (
    <div className={CSS.setting}>
      <form>
        {settings.map((item, ind) => (
          <div key={item.name}>
            <input
              type="checkbox"
              defaultChecked={item.isTrue}
              onClick={(e) => {
                handleSetting(item.id, e.target.checked);
                mySessionSetter(settings, item.name, e);
              }}
              className={CSS.checkbox}
            ></input>
            <label className={CSS.label}>{item.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
};
export { Setting };
