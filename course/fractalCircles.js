function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  circle(width / 2, height / 2, 300);
}

function circle(x, y, d) {
  ellipse(x, y, d, d);

  if (d > 10) {
    circle(x + d / 2, y, d / 2);

    circle(x - d / 2, y, d / 2);
  }
}
