let w;

function setup() {
  createCanvas(500, 500);
  w = new Walker();
}

function draw() {
  background(51);
  w.update();
  w.display();
}

function Walker() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.5);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  };

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  };
}
