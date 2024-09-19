import { vizA } from "./viz/vizA";
import { vizB } from "./viz/vizB";

export class Letter {
  constructor(letter, x, y, w, h) {
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vizType = Math.random() > 0.5 ? vizA : vizB;
  }

  drawLetter(p) {
    if (this.letter !== undefined) {
      if (this.vizType === vizA) {
        vizA(p, this.x, this.y, this.w, this.h, this.letter);
      } else {
        vizB(p, this.x, this.y, this.w, this.h, this.letter);
      }
    }

    p.textSize(64);
    p.stroke(0);
    p.text(this.letter, this.x, this.y);

    p.push();
    p.fill(255, 0, 0);
    p.circle(this.x, this.y, 10);
    p.pop();
  }
}
