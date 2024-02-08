const mySessionSetter = (settings, itemName, e) =>
  sessionStorage.setItem(
    "setting",
    JSON.stringify(
      settings.map((obj) => {
        if (obj.name === itemName) {
          return { ...obj, isTrue: e.target.checked };
        }
        return obj;
      })
    )
  );
export { mySessionSetter };
