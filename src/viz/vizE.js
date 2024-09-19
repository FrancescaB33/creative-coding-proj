export function vizE(p, letter, x, y, w, h, color = [150, 100, 200]) {
  const pg = p.createGraphics(w, h);

  const seed = letter.charCodeAt(0);

  p.randomSeed(seed);

  const numCircles = p.random(20, 40);

  let xPosition = p.random(-w, w * 2);
  let yPosition = p.random(0, h);
  let xPosition2 = p.random(0, w);
  let yPosition2 = p.random(0, h);
  let xPosition3 = p.random(0, w);
  let yPosition3 = p.random(0, h);
  let xPosition4 = p.random(-w, w * 2);
  let yPosition4 = p.random(0, h);

  pg.noFill();
  pg.stroke(color);

  for (let i = 0; i < numCircles; i++) {
    let strokeWeightVal = p.random(1, 5);
    let curveTightnessVal = p.random(-5, 5);

    pg.strokeWeight(strokeWeightVal);
    pg.curveTightness(curveTightnessVal);

    xPosition += p.random(-w / 3, w / 3);
    yPosition += p.random(-h / 3, h / 3);

    pg.bezier(
      x + xPosition,
      y + yPosition,
      x + xPosition2,
      y + yPosition2,
      x + xPosition3,
      y + yPosition3,
      x + xPosition4,
      y + yPosition4
    );
  }

  return pg;
}
