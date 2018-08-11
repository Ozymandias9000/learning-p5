setup = () => createCanvas(600, 400);

var circle = {
  x: 0,
  y: 100,
  diameter: 50
};

var col = 0;

function draw() {
  redCol = map(mouseX, 0, 600, 0, 255);

  blueCol = map(mouseY, 0, 400, 0, 255);

  background(redCol, redCol + blueCol / 2, blueCol);
  ellipse(circle.x, circle.y, circle.diameter);

  circle.x = circle.x + 1;
}
