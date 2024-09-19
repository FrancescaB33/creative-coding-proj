export function vizA(p, x, y, w, h, letter) {
  const numDots = 10;

  for (let i = 0; i < numDots; i++) {
    p.stroke(0);
    p.ellipse(
      (x += p.random(-w / 4 + 10, w / 4 - 10)),
      (y += p.random(-h / 4 + 10, h / 4 - 10)),
      10,
      10
    );
  }
}
