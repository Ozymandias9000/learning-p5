var vehicle;

function setup() {
  createCanvas(600, 600);
  vehicle = new Vehicle();
}

function draw() {
  background(51);

  var target = createVector(mouseX, mouseY);

  vehicle.seek(target);

  vehicle.display();
  vehicle.update();
}

function Vehicle(
  x = width / 2,
  y = height / 2,
  m = 1,
  maxSpeed = 5,
  maxForce = 0.2
) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = maxSpeed;
  this.maxForce = maxForce;

  this.seek = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxSpeed);

    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxForce);

    this.applyForce(steering);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  };

  this.display = function() {
    fill(255, 150);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  };

  this.applyForce = function(force) {
    var f = force.copy();
    // f.div(this.m);
    this.acc.add(f);
  };
}
