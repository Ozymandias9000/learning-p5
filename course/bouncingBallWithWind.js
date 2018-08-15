var particle;

function setup() {
  createCanvas(400, 600);
  particle = new Particle();
}

function draw() {
  stroke(255);
  background(51);

  var gravity = createVector(0, 0.1);
  var wind = createVector(0.05, 0);
  particle.applyForce(gravity);

  if (mouseIsPressed) {
    particle.applyForce(wind);
  }

  particle.update();
  particle.edges();
  particle.display();
}

function Particle() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  };

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  };

  this.applyForce = function(force) {
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
