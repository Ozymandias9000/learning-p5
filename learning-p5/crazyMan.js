setup = () => createCanvas(640, 480);

const drawCrazyMan = () => {
  draw = () => {
    background(250);
    ellipseMode(CENTER);
    rectMode(CENTER);

    if (mouseIsPressed) {
      // body
      fill(255);
      rect(mouseX, mouseY, 20, 100);
      // head
      ellipse(mouseX, mouseY - 30, 60, 60);
      // eyes
      fill(0, 67, 2);
      ellipse(mouseX - 19, mouseY - 30, 16, 32);
      ellipse(mouseX + 19, mouseY - 30, 16, 32);
      // legs
      line(mouseX - 10, mouseY + 50, 220, 205);
      line(mouseX + 10, mouseY + 50, 260, 205);
      // arms
      line(mouseX - 10, mouseY, 170, 125);
      line(mouseX + 10, mouseY, 290, 125);
    } else {
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
    }
  };
};

drawCrazyMan();
