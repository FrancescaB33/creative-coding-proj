import { getState } from "./state.js";
import { Letter } from "./letter.js";
// import { setState, getState, getFullState, setPContext } from "./src/state.js";
import { extractUniqueCharacters } from "./utils/extractUniqueCharacters.js";
import dataset from "./dataset.json";

export class Grid {
  constructor(w, h, p) {
    this.w = w;
    this.h = h;
    this.padding = 50;
    this.BASE = getState("BASE");
    this.words = [
      "Love",
      "Amor",
      "Amour",
      "Liebe",
      "Amore",
      "Любовь",
      "Sarang",
      "Cariad",
      "Dragoste",
    ];

    this.countryChoice = Math.floor(Math.random() * 14);
    this.key = Object.keys(dataset)[this.countryChoice];
    this.country = dataset[this.key];

    const allWords = [
      "Celebration",
      "Collaboration",
      "Diversity",
      "Generosity",
      "Community",
      "Harmony",
      "Inclusivity",
      "Unity",
    ];

    this.wordChoice = Math.floor(Math.random() * 8);
    this.wordKey = allWords[this.wordChoice];
    this.word = this.country[this.wordKey];

    // Create an array with all values of this.word
    const valWords = Object.values(this.word);
    // Replace the words in this.words with allWords
    this.words = [];
    valWords.forEach((word) => {
      this.words.push(word);
    });

    this.words = this.words.map((word) =>
      word.replace(/\s*\(.*?\)\s*/g, "").trim()
    );

    this.p = p;
    this.lowestCharacterCount = this.getLowestCharacterCount();
    this.highestCharacterCount = this.getHighestCharacterCount();

    this.letters = [];
    this.finalLetters = [];

    const uniqueCharacters = extractUniqueCharacters(dataset);
    console.log({ uniqueCharacters });
  }

  initGrid(p, wordChoice) {
    const cols = this.highestCharacterCount;
    const rows = this.words.length;
    const cellWidth = (this.w - this.padding * 2) / cols;
    const cellHeight = (this.h - this.padding * 2) / rows;

    this.generateLetters(p, cellWidth, cellHeight);

    // Find the longest word length
    const longestWordLength = Math.max(
      ...this.words.map((word) => word.length)
    );

    this.words.forEach((word, j) => {
      const currentWordLength = word.length;
      const offset = (longestWordLength - currentWordLength) / 2; // Calculate the offset for centering

      for (let i = 0; i < word.length; i++) {
        const curLetter = word[i].toLowerCase();

        // Find the letter in the this.letters array
        const l = this.letters.find((l) => l.letter === curLetter);
        const newLetter = new Letter(
          p,
          l.letter,
          (i + offset) * cellWidth + this.padding + cellWidth / 2, // Adjust x position with offset
          j * cellHeight + this.padding + cellHeight / 2,
          cellWidth,
          cellHeight,
          l.randomFactor,
          j === 0 ? true : false,
          l.colorIndex
        );

        this.finalLetters.push(newLetter);
      }
    });
  }

  getUniqueCharacters() {
    let uniqueChars = new Set();

    console.log(this.words);

    // Iterate over each word
    this.words.forEach((word) => {
      // Spread each word into characters and add to the Set
      [...word.toLowerCase()].forEach((char) => uniqueChars.add(char));
    });

    // Convert the Set to an array and return it
    return Array.from(uniqueChars);
  }

  generateLetters(p, w, h) {
    const uniqueLetters = this.getUniqueCharacters();

    // generate a letter for each unique character
    uniqueLetters.forEach((letter) => {
      this.letters.push(
        new Letter(p, letter, 0, 0, w, h, Math.random(), true, Math.random())
      );
    });
  }

  drawGrid(p) {
    this.finalLetters.forEach((l) => l.drawLetter(p));
  }

  getLowestCharacterCount() {
    return this.words.reduce(
      (min, word) => (word.length < min ? word.length : min),
      this.words[0].length
    );
  }

  getHighestCharacterCount() {
    return this.words.reduce(
      (max, word) => (word.length > max ? word.length : max),
      this.words[0].length
    );
  }
}
