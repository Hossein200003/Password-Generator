const setting_reducer = (setting, action) => {
  // console.log(setting);
  switch (action.type) {
    case 1:
      return setting.map((obj) => {
        if (obj.id === 1) {
          return { ...obj, isTrue: action.checked };
        }
        return obj;
      });
    case 2:
      return setting.map((obj) => {
        if (obj.id === 2) {
          return { ...obj, isTrue: action.checked };
        }
        return obj;
      });
    case 3:
      return setting.map((obj) => {
        if (obj.id === 3) {
          return { ...obj, isTrue: action.checked };
        }
        return obj;
      });
    case 4:
      return setting.map((obj) => {
        if (obj.id === 4) {
          return { ...obj, isTrue: action.checked };
        }
        return obj;
      });
  }
};

export { setting_reducer };

// 'NUMBER'
// 'UPCASE'
// 'LOWCASE'
// 'SYMBOLS'
