var particle1;
var particle2;

function setup() {
  createCanvas(500, 600);
  particle1 = new Particle(200, 100, 1);
  particle2 = new Particle(300, 100, 5);
}

function draw() {
  background(51);

  var gravity1 = createVector(0, 0.1 * particle1.mass);

  var gravity2 = createVector(0, 0.1 * particle2.mass);
  var wind = createVector(0.05, 0);

  particle1.applyForce(gravity1);
  particle2.applyForce(gravity2);

  if (mouseIsPressed) {
    particle1.applyForce(wind);
    particle2.applyForce(wind);
  }

  particle1.update();
  particle1.edges();
  particle1.display();
  particle2.update();
  particle2.edges();
  particle2.display();
}

function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  };

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
  };

  this.applyForce = function(force) {
    var f = force.copy();
    this.acc.add(f.div(this.mass));
  };

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -0.7;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -0.7;
      this.pos.x = width;
    }
  };
}
