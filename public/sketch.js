let ang = 0;

let px = 69,
  py = 0;

function setup() {
  let dim = min(windowWidth, windowHeight);
  createCanvas(dim, dim);
  background(0);
  colorMode(HSB, 360);

  frameRate(0);

  translate(width / 2, height / 2);

  for (let i = 0; i < 10000; i++) {
    var x = (R - r) * cos(ang) + d * cos(((R - r) * ang) / r);
    var y = (R - r) * sin(ang) - d * sin(((R - r) * ang) / r);

    if (px != 69) {
      stroke(ang % 360, 360, 360);
      line(px, py, x, y);
    }

    px = x;
    py = y;

    ang += 0.1;
  }
}

function windowResized() {
  setup();
  // keyPressed();
}

// function keyPressed() {
//   background(0);
//   ang = 0;
//   px = 69;
//   // R = min(width, height) / 2 - ((min(width, height) / 2) % 10); //random(100,200);
//   // r = R * random(0.3, 0.7);
//   // r = r - (r % 10) + 5;
//   // if (2 * r == R) {
//   //   r += 5;
//   // }
//   // d = r * random(0.3, 0.8);
// }

// function mouseClicked() {
//   keyPressed();
// }
