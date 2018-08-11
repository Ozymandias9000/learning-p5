setup = () => createCanvas(640, 480);

var circle = {
  x: 0,
  y: 100,
  diameter: 50
};

function draw() {
  background(250);
  ellipse(circle.x, circle.y, circle.diameter);

  circle.x = circle.x + 1;
}
