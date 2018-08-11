setup = () => createCanvas(640, 480);

const drawCrazyMan = () => {
  draw = () => {
    background(250);
    ellipseMode(CENTER);
    rectMode(CENTER);
    // body
    fill(255);
    rect(240, 145, 20, 100);
    // head
    ellipse(240, 115, 60, 60);
    // eyes
    fill(0, 67, 2);
    ellipse(221, 115, 16, 32);
    ellipse(259, 115, 16, 32);
    // legs
    line(230, 195, 220, 205);
    line(250, 195, 260, 205);
    // arms
    line(230, 145, 170, 125);
    line(250, 145, 290, 125);
  };
};
