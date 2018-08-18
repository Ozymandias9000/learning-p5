var particle1;
var attractor;

function setup() {
  createCanvas(500, 600);
  particle = new Particle(400, 50, 1);
  attractor = new Attractor(width / 2, height / 2);
}

function draw() {
  background(51);

  var force = attractor.createAttraction(particle);

  particle.update();
  particle.display();
  particle.applyForce(force);

  attractor.display();
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
    this.vel.mult(0.99);
  };

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
  };

  this.applyForce = function(force) {
    var f = force.copy();
    this.acc.add(f.div(this.mass));
  };
}

function Attractor(x, y) {
  this.pos = createVector(x, y);
  this.mass = 20;
  this.G = 1;

  this.createAttraction = function(particle) {
    var force = p5.Vector.sub(this.pos, particle.pos);
    var distance = force.mag();
    distance = constrain(5, 25);
    force.normalize();
    var strength = (this.G * this.mass * particle.mass) / (distance * distance);
    force.mult(strength);
    return force;
  };

  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
  };
}
