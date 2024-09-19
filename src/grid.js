import { getState } from "./state.js";
import { Letter } from "./letter.js";

export class Grid {
  constructor(w, h, p) {
    this.w = w;
    this.h = h;
    this.padding = 20;
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
    this.p = p;
    this.lowestCharacterCount = this.getLowestCharacterCount();
    this.highestCharacterCount = this.getHighestCharacterCount();

    console.log(this.lowestCharacterCount, this.highestCharacterCount);

    this.letters = [];
    this.finalLetters = [];
  }

  initGrid(p) {
    const cols = this.highestCharacterCount;
    const rows = this.words.length;
    const cellWidth = (this.w - this.padding * 2) / cols;
    const cellHeight = (this.h - this.padding * 2) / rows;

    this.generateLetters(p, cellWidth, cellHeight);

    this.words.forEach((word, j) => {
      for (let i = 0; i < word.length; i++) {
        const curLetter = word[i].toLowerCase();

        // find the letter in the this.letters array
        const l = this.letters.find((l) => l.letter === curLetter);
        const newLetter = new Letter(
          p,
          l.letter,
          i * cellWidth + this.padding + cellWidth / 2,
          j * cellHeight + this.padding + cellHeight / 2,
          cellWidth,
          cellHeight
        );

        this.finalLetters.push(newLetter);
      }
    });
  }

  getUniqueCharacters() {
    let uniqueChars = new Set();

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
      this.letters.push(new Letter(p, letter, 0, 0, w, h));
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
