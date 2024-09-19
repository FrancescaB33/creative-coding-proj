export function vizB(p, x, y, w, h, letter) {
  const numLines = 10; // Number of lines to draw
  const numPoints = 150; // Number of points per line to make it smooth
  const noiseScale = 0.04; // Control scale of noise for wave effect

  for (let i = 0; i < numLines; i++) {
    p.stroke(150, 100, 200); // Set color of the lines
    p.strokeWeight(2); // Set thickness of the lines
    p.noFill(); // No fill for the shapes

    p.beginShape(); // Start drawing a shape
    let startY = y + i * 10 - h / 3; // Calculate start Y position for each line

    for (let j = 0; j < numPoints; j++) {
      let t = (j / numPoints) * w; // Calculate horizontal position scaled by width
      let noiseVal = p.noise(t * noiseScale, startY * noiseScale); // Get noise value
      let yPosition = startY + noiseVal * 60 - 30; // Calculate Y position with modulation
      p.vertex(x + t - w / 2, yPosition); // Set vertex position adjusting for center
    }

    p.endShape(); // Finish drawing the shape
  }
}
