var angleSlider;
var lengthSlider;
var angle = 0;
var lengthMultiplier = 0.67;

setup = () => {
  createCanvas(600, 600);
  textSize(15);
  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
  lengthSlider = createSlider(0.6, 0.75, 0.67, 0.001);
};

draw = () => {
  background(51);
  text("Change Angle", 10, 590);
  text("Change Next Length", 430, 590);
  angle = angleSlider.value();
  lengthMultiplier = lengthSlider.value();
  stroke(255);
  translate(300, height);
  branch(100);
};

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * lengthMultiplier);
    pop();
    rotate(-angle);
    branch(len * lengthMultiplier);
  }
}
