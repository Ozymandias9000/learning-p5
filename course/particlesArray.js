var particles = [];

function setup() {
  createCanvas(400, 600);
  // for (let i = 0; i < 8; i++) {
  //   particles[i] = new Particle(random(width), 100);
  // }
}

function mousePressed() {
  var p = new Particle(mouseX, mouseY);
  particles.push(p);
}

function keyPressed() {
  if (key === " ") {
    particles.splice(0, 1);
  }
}

function draw() {
  stroke(255);
  background(51);

  var gravity = createVector(0, 0.2);
  var wind = createVector(0.1, 0);
  for (particle of particles) {
    particle.applyForce(gravity);
    if (mouseIsPressed) {
      particle.applyForce(wind);
    }
    particle.update();
    particle.edges();
    particle.display();
  }
}

function Particle(w, h) {
  this.pos = createVector(w, h);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
    this.vel.mult(0.999);
  };

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 24, 24);
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
