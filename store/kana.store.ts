import alphabets, { Kana, KanaType } from "@/kanas";
import { create } from "zustand";

type TestOptions = {
  alphabet: "hiragana" | "katakana";
  testType: "letter" | "sign" | "drawing";
  level: number;
  rows: number;
  route: string;
};

type KanaStore = {
  selectedAlphabet: KanaType;
  firstTest: Kana[];
  secondTest: Kana[];
  thirdTest: Kana[];
  testStep: number;
  result: { correct: number; incorrect: number };
  alphabet: "hiragana" | "katakana";
  testType: "letter" | "sign" | "drawing";
  level: number;
  rows: number;
  testRoute: string;
  setDefault: () => void;
  setTestStep: () => void;
  setResult: (correct: number, incorrect: number) => void;
  setTest: (options: TestOptions) => void;
};

// Exclude the selected alphabet from the KanaStore
type ExcludeKanaStore = Omit<
  KanaStore,
  "setTestStep" | "setResult" | "setTest" | "setDefault"
>;

const KanasDefaultState: ExcludeKanaStore = {
  selectedAlphabet: alphabets.hiragana,
  firstTest: alphabets.hiragana[1],
  secondTest: alphabets.hiragana[1],
  thirdTest: alphabets.hiragana[1],
  result: { correct: 0, incorrect: 0 },
  alphabet: "hiragana",
  testType: "letter",
  level: 1,
  rows: 1,
  testStep: 1,
  testRoute: "/letter",
};

const useKanas = create<KanaStore>((set) => ({
  ...KanasDefaultState,
  setDefault: () => set(KanasDefaultState),
  setTestStep: () => set((state) => ({ testStep: state.testStep + 1 })),
  setResult: (correct: number, incorrect: number) =>
    set({ result: { correct, incorrect } }),
  setTest: (options: TestOptions) => {
    // Create an array with the selected alphabet with the selected number of rows

    const selectedAlphabet = alphabets[options.alphabet];
    const numberOfKanas = 5 * options.rows;
    const firstTest: Kana[] = [];
    const secondTest: Kana[] = [];
    const thirdTest: Kana[] = [];

    const index = options.level;
    const fistLevel = selectedAlphabet[index];
    const secondLevel: Kana[] = [];
    const thirdLevel: Kana[] = [];

    /*************  FIRST EXAM ****************/
    Array.from({ length: numberOfKanas }).map((_) => {
      // Get random kana
      const randomKana =
        fistLevel[Math.floor(Math.random() * fistLevel.length)];

      firstTest.push(randomKana);
    });
    /*****************************************/

    /***********  SECOND EXAM ****************/

    // Add
    if (index > 1) {
      secondLevel.push(...selectedAlphabet[index - 1]);
    } else {
      secondLevel.push(...selectedAlphabet[index]);
    }

    Array.from({ length: numberOfKanas }).map((_) => {
      // Get random kana
      const randomKana =
        secondLevel[Math.floor(Math.random() * secondLevel.length)];

      secondTest.push(randomKana);
    });

    /*****************************************/

    /*************  THIRD EXAM ***************/
    // Add all numbers until 0 from index going backwards
    for (let i = index; i > 0; i--) {
      thirdLevel.push(...selectedAlphabet[i]);
    }

    Array.from({ length: numberOfKanas }).map((_) => {
      // Get random kana
      const randomKana =
        thirdLevel[Math.floor(Math.random() * thirdLevel.length)];

      thirdTest.push(randomKana);
    });
    /*****************************************/

    set({
      firstTest,
      secondTest,
      thirdTest,
      selectedAlphabet: alphabets[options.alphabet],
      alphabet: options.alphabet,
      testType: options.testType,
      rows: 1,
      testRoute: options.route,
    });
  },
}));

export default useKanas;
