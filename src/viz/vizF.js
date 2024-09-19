export function vizF(p, letter, x, y, w, h, color = [150, 100, 200]) {
  const numCircles = 20;
  const pg = p.createGraphics(w, h);

  const seed = letter.charCodeAt(0);
  p.randomSeed(seed);

  pg.noFill();
  pg.stroke(color);

  let r = p.random(4, 40); // Random circle radius
  pg.strokeWeight(p.random(1, 2));

  // Ensure initial positions keep circles fully within the bounds
  let xPosition = p.random(r, w - r);
  let yPosition = p.random(r, h - r);

  for (let i = 0; i < numCircles; i++) {
    // Adjust positions within bounds to ensure no circle exceeds the canvas edges
    xPosition = p.constrain(xPosition + p.random(-40, 40), r, w - r);
    yPosition = p.constrain(yPosition + p.random(-40, 40), r, h - r);
    pg.circle(xPosition, yPosition, r);
  }

  // Apply first blur
  pg.filter(p.BLUR, 3);

  for (let i = 0; i < numCircles; i++) {
    xPosition = p.constrain(xPosition + p.random(-40, 40), r, w - r);
    yPosition = p.constrain(yPosition + p.random(-40, 40), r, h - r);
    pg.circle(xPosition, yPosition, r);
  }

  // Apply second blur
  pg.filter(p.BLUR, 1);

  for (let i = 0; i < numCircles; i++) {
    xPosition = p.constrain(xPosition + p.random(-40, 40), r, w - r);
    yPosition = p.constrain(yPosition + p.random(-40, 40), r, h - r);
    pg.circle(xPosition, yPosition, r);
  }

  return pg;
}
