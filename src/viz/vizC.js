export function vizC(p, letter, x, y, w, h) {
  const numLines = 10; // Number of flowy lines to draw

  // Create a pGraphics object to draw off-screen
  const pg = p.createGraphics(w, h);

  // Convert the letter to a unique seed by using its char code
  const seed = letter.charCodeAt(0);

  // Set the random seed based on the letter
  p.randomSeed(seed);

  // Drawing on the pGraphics object instead of the main canvas
  pg.stroke(255, 0, 255);

  if (Math.random() > 0.5) {
    pg.stroke(255, 0, 0);
  }
  pg.strokeWeight(3);
  pg.noFill();

  for (let i = 0; i < numLines; i++) {
    // Starting point of the curve (random within the bounds)
    let x1 = x + p.random(0, w);
    let y1 = y + p.random(0, h);

    // Control points and end point for the bezier curve (random within the bounds)
    let x2 = x + p.random(0, w);
    let y2 = y + p.random(0, h);

    let x3 = x + p.random(0, w);
    let y3 = y + p.random(0, h);

    let x4 = x + p.random(0, w);
    let y4 = y + p.random(0, h);

    // Draw the bezier curve on the pGraphics object
    pg.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  // Return the pGraphics object

  return pg;
}
