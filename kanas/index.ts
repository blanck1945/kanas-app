import { hiragana } from "./hiragana";
import { katakana } from "./katakana";

export type Alphabet = {
  hiragana: KanaType;
  katakana: KanaType;
};

// KanaType should have a key of number and a value of Kana[]
export type KanaType = {
  [key: number]: Kana[];
};

export type Kana = {
  id: number;
  kana: string;
  romaji: string;
  answer: string;
};

const alphabets: Alphabet = {
  hiragana,
  katakana,
};

export default alphabets;
