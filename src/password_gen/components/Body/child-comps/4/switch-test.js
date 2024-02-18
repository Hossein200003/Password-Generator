
const y = 2;
const f = (x) => {
  switch (true) {
    case x>7: {
      return 5;
    }
    default:{return y+1}
  }
};
const res = f(9);
console.log(res)