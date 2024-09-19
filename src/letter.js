import { vizA } from "./viz/vizA";
import { vizB } from "./viz/vizB";
import { vizC } from "./viz/vizC";
import { vizD } from "./viz/vizD";

import { getState } from "./state";

const colors = ["#fcbf49", "#f77f00", "#d62828", "#90a955", "#6a4c93"];

export class Letter {
  constructor(
    p,
    letter,
    x,
    y,
    w,
    h,
    randomFactor,
    showLetter = true,
    colorIndex
  ) {
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.randomFactor = randomFactor;
    this.mappedRandomFactor = p.map(this.randomFactor, 0, 1, 0, 4);
    this.types = ["vizA", "vizB", "vizC", "vizD"];
    this.vizType = this.types[Math.floor(this.mappedRandomFactor)];
    this.showLetter = showLetter;
    this.colorIndex = colorIndex;

    console.log(colorIndex);
    // pick a random color from colors
    this.color = colors[Math.floor(colorIndex * colors.length)];

    this.generateLetter(p);
  }

  generateLetter(p) {
    if (this.vizType === "vizB") {
      this.buffer = vizB(p, this.letter, 0, 0, this.w, this.h, this.color);
    } else if (this.vizType === "vizA") {
      this.buffer = vizA(p, this.letter, 0, 0, this.w, this.h, this.color);
    } else if (this.vizType === "vizC") {
      this.buffer = vizC(p, this.letter, 0, 0, this.w, this.h, this.color);
    } else {
      this.buffer = vizD(p, this.letter, 0, 0, this.w, this.h, this.color);
    }
  }

  drawLetter(p) {
    // Draw the buffer first
    p.image(this.buffer, this.x - this.w / 2, this.y - this.h / 2);

    p.fill(0);
    p.textSize(64);
    p.stroke(0);
    // get size of the text
    const txtSize = p.textWidth(this.letter);

    // get height of the text
    const txtHeight = p.textAscent();

    if (getState("showLetters")) {
      p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);
    } else {
      if (this.showLetter) {
        p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);
      }
    }

    // p.push();
    // p.fill(255, 0, 0);
    // p.circle(this.x, this.y, 10);
    // p.pop();
  }
}
