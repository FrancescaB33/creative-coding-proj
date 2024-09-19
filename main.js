import p5 from "p5";

// Ratio of Frame TV
const RATIO = 2160 / 3840;

// Canvas options
const canvasOptions = {
  height: window.innerHeight,
  width: window.innerHeight * RATIO,
};

// Responsive sizer
const BASE = Math.min(canvasOptions.width, canvasOptions.height) / 1000;

new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasOptions.width, canvasOptions.height);
  };

  p.draw = () => {
    p.background(255); // Black background
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
