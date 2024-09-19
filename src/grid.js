import { getState } from "./state.js";

export class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.BASE = getState("BASE");
  }

  drawGrid(p) {
    for (let i = 0; i < this.w; i++) {
      p.stroke(0);
      p.line(i * this.BASE, 0, i * this.BASE, this.h);
    }
  }
}
