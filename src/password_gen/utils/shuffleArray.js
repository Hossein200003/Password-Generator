const shuffleArray = (arr) => {
  arr.sort((a, b) => Math.floor(Math.random() * 3 - 1));
  // let shuffledArr = [];
  // let shuffledArr2= [];
  // for (let x of arr) {
  //   let randomIndex = arr[Math.floor(Math.random() * arr.length)];
  //   let randomIndex2 = arr[Math.floor(Math.random() * arr.length)];
  //   shuffledArr = [...shuffledArr, randomIndex];//this might remove some elements.
  //   shuffledArr2 = [...shuffledArr2, randomIndex2];

  // }
  // console.log(shuffledArr2);

  // shuffledArr = [...shuffledArr,...shuffledArr2,...arr];//to insure the existance of all elements of the original array.
  // shuffledArr = shuffledArr.filter(
  //     (item, index) => ((shuffledArr.indexOf(item) === index&&(item!==null)))
  //   );
  return arr;
};
//
// const a = [2,4,3,6,8,8,3,2,4,8];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(c)
// const c2 = c.filter(
// (item, index) => c.indexOf(item) === index
// )
//  console.log(shuffleArray(b))
// shuffleArray(b)
export { shuffleArray };
