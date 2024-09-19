export function vizB(p, letter, x, y, w, h) {
  const numLines = 10; // Number of lines to draw
  const numPoints = 150; // Number of points per line to make it smooth
  const noiseScale = p.random(0.001, 0.1); // Control scale of noise for wave effect

  // Create a pGraphics object to draw off-screen
  const pg = p.createGraphics(w, h);

  // Convert the letter to a unique seed by using its char code
  const seed = letter.charCodeAt(0);

  // Set the random seed based on the letter
  p.noiseSeed(seed);

  // Drawing on the pGraphics object instead of the main canvas
  pg.stroke(150, 100, 200); // Set color of the lines
  pg.strokeWeight(2); // Set thickness of the lines
  pg.noFill(); // No fill for the shapes

  for (let i = 0; i < numLines; i++) {
    pg.beginShape(); // Start drawing a shape
    let startY = y + i * 10 + h / 5; // Calculate start Y position for each line

    for (let j = 0; j < numPoints; j++) {
      let t = (j / numPoints) * w; // Calculate horizontal position scaled by width
      let noiseVal = p.noise(t * noiseScale, startY * noiseScale); // Get noise value
      let yPosition = startY + noiseVal * 60 - 30; // Calculate Y position with modulation
      pg.vertex(x + t, yPosition); // Set vertex position adjusting for center
    }

    pg.endShape(); // Finish drawing the shape
  }

  // Return the pGraphics object
  return pg;
}
