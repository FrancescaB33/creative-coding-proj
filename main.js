import p5 from "p5";

import { Grid } from "./src/grid.js"; // Import the drawRectangle function
import { setState, getState, getFullState, setPContext } from "./src/state.js";

// Ratio of Frame TV
const RATIO = 2160 / 3840;
let STATE;

let grid;

new p5((p) => {
  setPContext(p);

  p.setup = () => {
    initState();

    STATE = getFullState();

    p.createCanvas(STATE.WIDTH, STATE.HEIGHT);

    grid = new Grid(STATE.WIDTH, STATE.HEIGHT);
    grid.initGrid(p);
  };

  p.draw = () => {
    p.background(250, 250, 240); // Black background

    grid.drawGrid(p);

    p.noLoop();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowHeight * RATIO, p.windowHeight);
    initState();
  };

  const initState = () => {
    setState("BASE", Math.min(p.windowWidth * RATIO, p.windowHeight) / 1000);
    setState("RATIO", RATIO);
    setState("WIDTH", window.innerHeight * RATIO);
    setState("HEIGHT", window.innerHeight);
  };

  // listen to keyboard spacebar press
  p.keyPressed = () => {
    if (p.key === " ") {
      setState("showLetters", !getState("showLetters"));
      p.draw();
    }
  };
});
