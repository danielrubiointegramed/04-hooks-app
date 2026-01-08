export interface ScrambleWordsState {
  words: string[];
  currentWord: string;
  scrambleWord: string;
  guess: string;
  points: number;
  errorCounter: number;
  maxAllowErrors: number;
  skipCounter: number;
  maxSkips: number;
  isGameOver: boolean;
  totalWords: number;
}

const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): ScrambleWordsState => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);
  return {
    words: shuffleWords,
    currentWord: shuffleWords[0],
    scrambleWord: scrambleWord(shuffleWords[0]),
    guess: "",
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    maxSkips: 3,
    isGameOver: false,
    totalWords: shuffleWords.length,
  };
};
export type ScrambleWordsAction =
  | { type: "SET_GUESS"; payload: string }
  | { type: "NO_TENGO_LA_MENOR_IDEA_CUALES_ACCIONES_QUE_NECESITO2" }
  | { type: "NO_TENGO_LA_MENOR_IDEA_CUALES_ACCIONES_QUE_NECESITO3" };

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsAction
) => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };
    default:
      return state;
  }
};
