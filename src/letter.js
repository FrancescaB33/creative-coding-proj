import { vizA } from "./viz/vizA";
import { vizB } from "./viz/vizB";
import { vizC } from "./viz/vizC";
import { vizD } from "./viz/vizD";
import { vizE } from "./viz/vizE";
import { vizF } from "./viz/vizF";

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
    this.mappedRandomFactor = p.map(this.randomFactor, 0, 1, 0, 6);
    this.types = ["vizA", "vizB", "vizC", "vizD", "vizE", "vizF"];
    this.vizType = this.types[Math.floor(this.mappedRandomFactor)];
    this.showLetter = showLetter;
    this.colorIndex = colorIndex;

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
    } else if (this.vizType === "vizD") {
      this.buffer = vizD(p, this.letter, 0, 0, this.w, this.h, this.color);
    } else if (this.vizType === "vizE") {
      this.buffer = vizE(p, this.letter, 0, 0, this.w, this.h, this.color);
    } else if (this.vizType === "vizF") {
      this.buffer = vizF(p, this.letter, 0, 0, this.w, this.h, this.color);
    }
  }

  drawLetter(p) {
    // Draw the buffer first
    p.image(this.buffer, this.x - this.w / 2, this.y - this.h / 2);

    p.fill(0);
    p.stroke(255);
    p.textSize(64);
    p.stroke(0);
    // get size of the text
    const txtSize = p.textWidth(this.letter);

    // get height of the text
    const txtHeight = p.textAscent();

    if (getState("showLetters")) {
      // Draw stroke behind the text
      p.stroke(0); // Set stroke color (black)
      p.strokeWeight(6); // Set stroke thickness
      p.noFill(); // Disable fill to draw only the stroke
      p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);

      // Draw the filled text on top
      p.noStroke(); // Disable stroke
      p.fill(250, 250, 240); // Set fill color (white, or change as needed)
      p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);
    } else {
      if (this.showLetter) {
        // Draw stroke behind the text
        p.stroke(0); // Set stroke color (black)
        p.strokeWeight(6); // Set stroke thickness
        p.noFill(); // Disable fill to draw only the stroke
        p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);

        // Draw the filled text on top
        p.noStroke(); // Disable stroke
        p.fill(250, 250, 240); // Set fill color (white, or change as needed)
        p.text(this.letter, this.x - txtSize / 2, this.y + txtHeight / 3);
      }
    }

    // p.push();
    // p.fill(255, 0, 0);
    // p.circle(this.x, this.y, 10);
    // p.pop();
  }
}
