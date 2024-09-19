export function vizB(p, x, y, w, h, letter) {
  const numDots = 10;

  for (let i = 0; i < numDots; i++) {
    p.stroke(0);
    p.rect(
      (x += p.random(-w / 2, w / 2)),
      (y += p.random(-h / 2, h / 2)),
      10,
      10
    );
  }
}
