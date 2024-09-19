import { getState } from "./state.js";
import { Letter } from "./letter.js";

export class Grid {
  constructor(w, h) {
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
    this.lowestCharacterCount = this.getLowestCharacterCount();
    this.highestCharacterCount = this.getHighestCharacterCount();

    console.log(this.lowestCharacterCount, this.highestCharacterCount);

    this.letters = [];
  }

  initGrid(p) {
    const cols = this.highestCharacterCount; // Number of columns based on highest character count
    const rows = this.words.length; // Number of rows based on the number of words
    const cellWidth = (this.w - this.padding * 2) / cols; // Calculate cell width
    const cellHeight = (this.h - this.padding * 2) / rows; // Calculate cell height

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        p.stroke(0);
        p.rect(
          i * cellWidth + this.padding,
          j * cellHeight + this.padding,
          cellWidth,
          cellHeight
        ); // Draw each cell

        const l = new Letter(
          this.words[j][i],
          i * cellWidth + this.padding + cellWidth / 2,
          j * cellHeight + this.padding + cellHeight / 2,
          cellWidth,
          cellHeight
        );

        this.letters.push(l);
      }
    }
  }

  drawGrid(p) {
    this.letters.forEach((l) => l.drawLetter(p));
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
