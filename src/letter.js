import { vizA } from "./viz/vizA";
import { vizB } from "./viz/vizB";
import { vizC } from "./viz/vizC";

export class Letter {
  constructor(p, letter, x, y, w, h) {
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vizType = "vizC";

    this.generateLetter(p);
  }

  generateLetter(p) {
    if (this.vizType === "vizC") {
      this.buffer = vizC(p, this.letter, 0, 0, this.w, this.h);
    }
  }

  drawLetter(p) {
    // Draw the buffer first
    p.image(this.buffer, this.x - this.w / 2, this.y - this.h / 2);
    // if (this.letter !== undefined) {
    //   if (this.vizType === vizA) {
    //     vizA(p, this.x, this.y, this.w, this.h, this.letter);
    //   } else {
    //     vizB(p, this.x, this.y, this.w, this.h, this.letter);
    //   }
    // }

    p.fill(0);
    p.textSize(64);
    p.stroke(0);
    // get size of the text
    const txtSize = p.textWidth(this.letter);

    // get height of the text
    const txtHeight = p.textAscent();

    p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);

    // p.push();
    // p.fill(255, 0, 0);
    // p.circle(this.x, this.y, 10);
    // p.pop();
  }
}
