const generateRandom = (input) => {
  if (input !== null) {
    return input[Math.round(Math.random() * (input.length - 1))];
  }
  return null;
};
export { generateRandom };
