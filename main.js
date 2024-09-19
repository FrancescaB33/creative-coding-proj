import p5 from "p5";

const ratio = 2160 / 3840;

let canvasOptions = {
  height: window.innerHeight,
  width: window.innerHeight * ratio,
};

new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasOptions.width, canvasOptions.height);
  };

  p.draw = () => {
    p.background(0); // Black background
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
