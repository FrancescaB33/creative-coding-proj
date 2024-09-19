export function vizD(p, letter, x, y, w, h, color = [150, 100, 200]) {
  const numRects = Math.floor(p.random(10, 20)); // Random number of rectangles between 10 and 20

  const pg = p.createGraphics(w, h);

  const seed = letter.charCodeAt(0);
  p.randomSeed(seed);

  pg.noStroke();
  pg.fill(color);

  for (let i = 0; i < numRects; i++) {
    const isHorizontal = p.random() > 0.5; // 50% chance to draw horizontal or vertical rectangles

    let rectWidth = p.random(w / 8, w / 3); // Random rectangle width
    let rectHeight = p.random(h / 8, h / 3); // Random rectangle height

    if (isHorizontal) {
      // Random position within the canvas, ensuring the rectangle fits horizontally
      let rectX = p.random(x, w - rectWidth);
      let rectY = p.random(y, h - rectHeight);
      pg.rect(rectX, rectY, rectWidth, rectHeight);
    } else {
      // Random position within the canvas, ensuring the rectangle fits vertically
      let rectX = p.random(x, w - rectHeight);
      let rectY = p.random(y, h - rectWidth);
      pg.rect(rectX, rectY, rectHeight, rectWidth); // Swap width and height for vertical orientation
    }
  }

  return pg;
}
