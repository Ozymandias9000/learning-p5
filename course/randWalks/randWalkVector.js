let w;

function setup() {
  createCanvas(500, 500);
  w = new Walker();
}

function draw() {
  background(51);
  w.display();
  w.walk();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);

  this.walk = function() {
    this.pos = p5.Vector.add(this.pos, random(-1, 1));
  };

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  };
}
