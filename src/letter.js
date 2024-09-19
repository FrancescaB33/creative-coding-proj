import { vizA } from "./viz/vizA";
import { vizB } from "./viz/vizB";
import { vizC } from "./viz/vizC";

export class Letter {
  constructor(p, letter, x, y, w, h, randomFactor, showLetter = true) {
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.randomFactor = randomFactor;
    this.mappedRandomFactor = p.map(this.randomFactor, 0, 1, 0, 3);
    this.types = ["vizA", "vizB", "vizC"];
    this.vizType = this.types[Math.floor(this.mappedRandomFactor)];
    this.showLetter = showLetter;

    this.generateLetter(p);
  }

  generateLetter(p) {
    if (this.vizType === "vizB") {
      this.buffer = vizB(p, this.letter, 0, 0, this.w, this.h);
    } else if (this.vizType === "vizA") {
      this.buffer = vizA(p, this.letter, 0, 0, this.w, this.h);
    } else {
      this.buffer = vizC(p, this.letter, 0, 0, this.w, this.h);
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

    if (this.showLetter) {
      p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);
    }

    // p.push();
    // p.fill(255, 0, 0);
    // p.circle(this.x, this.y, 10);
    // p.pop();
  }
}
