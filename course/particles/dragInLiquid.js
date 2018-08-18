// Friction
var particle1;
var particle2;

var liquid;

function setup() {
  createCanvas(400, 600);

  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

  particle1 = new Particle(1.5, 200, 0);
  particle2 = new Particle(3, 300, 0);
}

function draw() {
  background(127);

  liquid.display();

  if (liquid.contains(particle1)) {
    particle1.applyForce(liquid.calculateDrag(particle1));
  }

  if (liquid.contains(particle2)) {
    particle2.applyForce(liquid.calculateDrag(particle2));
  }

  particle1.applyForce(createVector(0, 0.1 * particle1.mass));

  particle2.applyForce(createVector(0, 0.1 * particle2.mass));

  particle1.update();
  particle1.edges();
  particle1.display();

  particle2.update();
  particle2.edges();
  particle2.display();
}

function Particle(m, x, y) {
  this.mass = m;
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);

    ellipse(this.pos.x, this.pos.y, this.mass * 16, this.mass * 16);
  };

  this.applyForce = function(force) {
    var force = p5.Vector.div(force, this.mass);
    this.acc.add(force);
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

function Liquid(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;

  // Is the Mover in the Liquid?
  this.contains = function(m) {
    var l = m.pos;
    return (
      l.x > this.x &&
      l.x < this.x + this.w &&
      l.y > this.y &&
      l.y < this.y + this.h
    );
  };

  // Calculate drag force
  this.calculateDrag = function(m) {
    // Magnitude is coefficient * speed squared
    var speed = m.vel.mag();
    var dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    var dragForce = m.vel.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    dragForce.setMag(dragMagnitude);
    return dragForce;
  };

  this.display = function() {
    noStroke();
    fill(50);
    rect(this.x, this.y, this.w, this.h);
  };
}
