import { generateRandom } from "./generateRandom.js";
import {
  alphabets,
  alphabets_upcase,
  number,
  symbol,
} from "../data/characters.js";
import { shuffleArray } from "./shuffleArray.js";
import { initialSetting } from "../data/initialSetting.js";

const createPass = (settings) => {
  const new_number = settings[0].isTrue ? number : null;
  const new_alphabets = settings[2].isTrue ? alphabets : null;
  const new_alphabets_upcase = settings[1].isTrue ? alphabets_upcase : null;
  const new_symbols = settings[3].isTrue ? symbol : null;

  let passwordArray = [];
  for (let i = 0; i < 10; i++) {
    passwordArray = [
      ...passwordArray,
      generateRandom(new_number),
      generateRandom(new_alphabets),
      generateRandom(new_alphabets_upcase),
      generateRandom(new_symbols),
    ];
  }
  const newArray = shuffleArray(passwordArray)
    .toString()
    .replaceAll(",", "")
    .slice(0, 10);

  return newArray;
};
export { createPass };
