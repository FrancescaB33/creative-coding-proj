export function vizA(p, letter, x, y, w, h, color = [150, 100, 200]) {
  const numBars = Math.floor(p.random(10, 20)); // Random number of bars between 10 and 20

  const pg = p.createGraphics(w, h);

  const seed = letter.charCodeAt(0);
  p.randomSeed(seed);

  pg.noStroke();
  pg.fill(color);

  const isHorizontal = p.random() > 0.5; // 50% chance to draw horizontal or vertical bars

  let barWidths = [];
  let totalBarDimension = 0;

  // Calculate the width or height of all bars and their total dimension
  for (let i = 0; i < numBars; i++) {
    let barWidth = p.random(w / 20, w / 10); // Random bar width for diversity
    barWidths.push(barWidth);
    totalBarDimension += barWidth;
  }

  let totalOffset = 0;
  // Center the bars by calculating the offset for the total width or height
  let startOffset = (isHorizontal ? w : h) - totalBarDimension;
  startOffset /= 2; // Centering offset

  for (let i = 0; i < numBars; i++) {
    let barWidth = barWidths[i];
    let barHeight = p.random(h / 6, h / 1.25); // Random height for horizontal bars

    if (isHorizontal) {
      let barX = startOffset + totalOffset;
      let barY = y + h / 2 - barHeight / 2; // Centering bars vertically
      pg.rect(barX, barY, barWidth - 2, barHeight);
    } else {
      let barY = startOffset + totalOffset;
      let barX = x + w / 2 - barHeight / 2; // Centering bars horizontally
      pg.rect(barX, barY, barHeight, barWidth - 2);
    }

    totalOffset += barWidth; // Accumulate the width to position the next bar
  }

  return pg;
}
