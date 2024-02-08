const setting_reducer = (setting, action) => {
  // console.log(setting);
  switch (action.type) {
    case "NUMBER":
      return setting.map((box) => {
        if (box.name === "number") {
          return { ...box, isTrue: action.checked };
        }
        return box;
      });
    case "UPCASE":
      return setting.map((box) => {
        if (box.name === "upCase") {
          return { ...box, isTrue: action.checked };
        }
        return box;
      });
    case "LOWCASE":
      return setting.map((box) => {
        if (box.name === "lowCase") {
          return { ...box, isTrue: action.checked };
        }
        return box;
      });
    case "SYMBOL":
      return setting.map((box) => {
        if (box.name === "symbol") {
          return { ...box, isTrue: action.checked };
        }
        return box;
      });
  }
};

export { setting_reducer };

// 'NUMBER'
// 'UPCASE'
// 'LOWCASE'
// 'SYMBOLS'
