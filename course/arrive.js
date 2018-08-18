var vehicle;

function setup() {
  createCanvas(600, 600);
  vehicle = new Vehicle();
}

function draw() {
  background(51);

  var target = createVector(mouseX, mouseY);

  vehicle.arrive(target);

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

  this.r = 6;

  this.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    // desired.setMag(this.maxSpeed);

    var d = desired.mag();

    if (d < 100) {
      var m = map(d, 0, 100, 0, this.maxSpeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxSpeed);
    }

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
    var theta = this.vel.heading() + PI / 2;
    fill(127);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  };

  this.applyForce = function(force) {
    var f = force.copy();
    // f.div(this.m);
    this.acc.add(f);
  };
}
