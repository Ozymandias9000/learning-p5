var xoff = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51);

  var x = noise(xoff) * width;

  xoff += 0.005;

  fill(255);
  ellipse(x, 180, 20, 20);
}
