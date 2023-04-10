function setup() {
  createCanvas(1200, 700);
}

//START SCREEN
function startScreen() {
  push();

  //water
  noStroke();

  fill(47, 217, 228);
  rect(0, 0, width, 100);

  fill(47, 210, 228);
  rect(0, 50, width, 50);

  fill(47, 200, 228);
  rect(0, 100, width, 50);

  fill(47, 190, 228);
  rect(0, 150, width, 50);

  fill(47, 180, 228);
  rect(0, 200, width, 50);

  fill(47, 170, 228);
  rect(0, 250, width, 50);

  fill(47, 160, 228);
  rect(0, 300, width, 50);

  fill(47, 150, 228);
  rect(0, 350, width, 50);

  fill(47, 140, 228);
  rect(0, 400, width, 50);

  fill(47, 130, 228);
  rect(0, 450, width, 50);

  fill(47, 120, 228);
  rect(0, 500, width, 50);

  fill(47, 110, 228);
  rect(0, 550, width, 50);

  fill(47, 100, 228);
  rect(0, 600, width, 50);

  fill(47, 90, 228);
  rect(0, 650, width, 50);

  pop();

  textSize(20);
  textFont("Helvetica");
  text(
    "You need to land smoothly on the landing area with less than velocity of 4.",
    250,
    140
  );
  text(
    "But be careful, don't go above the water level, and don't let the submarine to crash the ground.",
    250,
    170
  );
  text(
    "You should also avoid the sharks, the coralls, and the jellyfish!",
    250,
    200
  );
  text("Moving the submarine:", 480, 300);
  textSize(12);
  text("UP: SPACE key", 480, 320);
  text("RIGHT: Right Arrow Key", 480, 340);
  text("LEFT: Left Arrow Key", 480, 360);

  textSize(24);
  text("Click anywhere to Start!", 450, 500);
}

//LOSE SCREEN
function loseScreen() {
  push();

  //water
  noStroke();

  fill(47, 217, 228);
  rect(0, 0, width, 100);

  fill(47, 210, 228);
  rect(0, 50, width, 50);

  fill(47, 200, 228);
  rect(0, 100, width, 50);

  fill(47, 190, 228);
  rect(0, 150, width, 50);

  fill(47, 180, 228);
  rect(0, 200, width, 50);

  fill(47, 170, 228);
  rect(0, 250, width, 50);

  fill(47, 160, 228);
  rect(0, 300, width, 50);

  fill(47, 150, 228);
  rect(0, 350, width, 50);

  fill(47, 140, 228);
  rect(0, 400, width, 50);

  fill(47, 130, 228);
  rect(0, 450, width, 50);

  fill(47, 120, 228);
  rect(0, 500, width, 50);

  fill(47, 110, 228);
  rect(0, 550, width, 50);

  fill(47, 100, 228);
  rect(0, 600, width, 50);

  fill(47, 90, 228);
  rect(0, 650, width, 50);

  pop();

  textSize(30);
  text("You Lost!", 530, 250);
  text("Click for a New Game", 450, 350);
}

//WIN SCREEN
function winScreen() {
  push();

  //water
  noStroke();

  fill(47, 217, 228);
  rect(0, 0, width, 100);

  fill(47, 210, 228);
  rect(0, 50, width, 50);

  fill(47, 200, 228);
  rect(0, 100, width, 50);

  fill(47, 190, 228);
  rect(0, 150, width, 50);

  fill(47, 180, 228);
  rect(0, 200, width, 50);

  fill(47, 170, 228);
  rect(0, 250, width, 50);

  fill(47, 160, 228);
  rect(0, 300, width, 50);

  fill(47, 150, 228);
  rect(0, 350, width, 50);

  fill(47, 140, 228);
  rect(0, 400, width, 50);

  fill(47, 130, 228);
  rect(0, 450, width, 50);

  fill(47, 120, 228);
  rect(0, 500, width, 50);

  fill(47, 110, 228);
  rect(0, 550, width, 50);

  fill(47, 100, 228);
  rect(0, 600, width, 50);

  fill(47, 90, 228);
  rect(0, 650, width, 50);

  pop();

  textSize(30);
  text("Congratulations, successful landing! Click for a New Game", 530, 250);
}

//SCENERY//
function scenery() {
  push();

  //water
  noStroke();

  fill(47, 217, 228);
  rect(0, 0, width, 100);

  fill(47, 210, 228);
  rect(0, 50, width, 50);

  fill(47, 200, 228);
  rect(0, 100, width, 50);

  fill(47, 190, 228);
  rect(0, 150, width, 50);

  fill(47, 180, 228);
  rect(0, 200, width, 50);

  fill(47, 170, 228);
  rect(0, 250, width, 50);

  fill(47, 160, 228);
  rect(0, 300, width, 50);

  fill(47, 150, 228);
  rect(0, 350, width, 50);

  fill(47, 140, 228);
  rect(0, 400, width, 50);

  fill(47, 130, 228);
  rect(0, 450, width, 50);

  fill(47, 120, 228);
  rect(0, 500, width, 50);

  fill(47, 110, 228);
  rect(0, 550, width, 50);

  fill(47, 100, 228);
  rect(0, 600, width, 50);

  //ground
  fill(244, 194, 119);
  rect(0, 650, width, 50);

  pop();

  //velocity measurement
  push();
  fill(47, 170, 228);
  rect(35, 15, 110, 30, 20);
  pop();
  textSize(16);
  text("Velocity:  " + Math.floor(velocity), 50, 35);

  //land area
  push();
  fill(47, 170, 228);
  quad(1050, 650, 1150, 650, 1175, 680, 1025, 680);
  pop();
  textSize(12);
  text("LANDING AREA", 1055, 668);
}

//SHIP//
function ship(shipX, shipY) {
  push();
  translate(shipX, shipY);

  //turbo
  fill(255, 208, 63);
  ellipse(21, 26, 2, 6);

  fill(255, 208, 63);
  ellipse(21, 34, 2, 6);

  fill(255, 208, 63);
  ellipse(25, 30, 10, 3);

  //tail
  fill(253, 119, 3);
  arc(25, 30, 20, 20, 4.7, 1.6, CHORD);

  //main body
  fill(255, 208, 63);
  ellipse(50, 30, 50, 20);

  //windows
  fill(0, 0, 255);
  ellipse(35, 30, 5);

  fill(0, 0, 255);
  ellipse(45, 30, 5);

  fill(0, 0, 255);
  ellipse(55, 30, 5);

  //front window
  fill(253, 119, 3);
  beginShape();
  vertex(65, 22);
  quadraticVertex(84, 30, 65, 38);
  vertex(65, 23);
  endShape(CLOSE);

  pop();
  //https://programmingdesignsystems.com/shape/custom-shapes/index.html#custom-shapes-pANLh0l
}

//CORALL
function corall(corallX, corallY) {
  push();
  noStroke();

  scale(1.2);

  push();
  translate(corallX, corallY);
  rotate(0.15);
  fill(48, 109, 75);
  rect(0, 0, 10, 50, 20, 20, 0, 0);
  pop();

  push();
  translate(corallX - 11, corallY - 29);
  rotate(-0.3);
  fill(48, 109, 75);
  rect(0, 0, 10, 40, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 3, corallY - 74);
  rotate(0.15);
  fill(48, 109, 75);
  rect(0, 0, 10, 50, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 13, corallY - 29);
  rotate(0.3);
  fill(48, 109, 75);
  rect(0, 0, 10, 40, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 30, corallY - 49);
  rotate(-0.7);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 23, corallY - 89);
  rotate(-0.7);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 4, corallY - 110);
  rotate(0.45);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 30, corallY - 57);
  rotate(0.57);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 8, corallY - 46);
  rotate(-0.2);
  fill(48, 109, 75);
  rect(0, 0, 10, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 10, corallY - 120);
  rotate(-0.5);
  fill(48, 109, 75);
  rect(0, 0, 10, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 15, corallY - 125);
  rotate(0.7);
  fill(48, 109, 75);
  rect(0, 0, 10, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 23, corallY - 8);
  rotate(-0.9);
  fill(48, 109, 75);
  rect(0, 0, 10, 30, 20, 20, 20, 20);
  pop();

  pop();
}

//SMALL CORALL
function smallcorall(corallX, corallY) {
  push();
  noStroke();

  scale(1);
  rotate(0.1);

  push();
  translate(corallX, corallY);
  rotate(0.15);
  fill(48, 109, 75);
  rect(0, 0, 10, 40, 20, 20, 0, 0);
  pop();

  push();
  translate(corallX - 11, corallY - 29);
  rotate(-0.3);
  fill(48, 109, 75);
  rect(0, 0, 10, 40, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 3, corallY - 74);
  rotate(0.15);
  fill(48, 109, 75);
  rect(0, 0, 10, 50, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 13, corallY - 29);
  rotate(0.3);
  fill(48, 109, 75);
  rect(0, 0, 10, 40, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 30, corallY - 49);
  rotate(-0.7);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 23, corallY - 89);
  rotate(-0.7);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 4, corallY - 110);
  rotate(0.45);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 30, corallY - 57);
  rotate(0.57);
  fill(48, 109, 75);
  rect(0, 0, 10, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 8, corallY - 46);
  rotate(-0.2);
  fill(48, 109, 75);
  rect(0, 0, 10, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 10, corallY - 120);
  rotate(-0.5);
  fill(48, 109, 75);
  rect(0, 0, 10, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX + 15, corallY - 125);
  rotate(0.7);
  fill(48, 109, 75);
  rect(0, 0, 10, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(corallX - 20, corallY - 8);
  rotate(-0.9);
  fill(48, 109, 75);
  rect(0, 0, 10, 25, 20, 20, 20, 20);
  pop();

  pop();
}

//JELLYFISH
function jellyfish(jellyfishX, jellyfishY) {
  push();

  translate(jellyfishX, jellyfishY);
  scale();

  noStroke();

  //leg 1
  push();
  translate(179, 210);
  rotate(0.5);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(165, 235);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(175, 253);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(168, 280);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(178, 298);
  rotate(0.1);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(175, 325);
  rotate(-0.5);
  fill(223, 162, 255);
  rect(0, 0, 8, 20, 20, 20, 20, 20);
  pop();

  //leg2
  push();
  translate(196, 215);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(190, 240);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(198, 260);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(193, 280);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(203, 305);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(198, 325);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(207, 345);
  rotate(0.35);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(198, 366);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(207, 385);
  rotate(0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 20, 20, 20, 20, 20);
  pop();

  //leg3
  push();
  translate(208, 220);
  rotate(-0.35);
  fill(223, 162, 255);
  rect(0, 0, 8, 40, 20, 20, 20, 20);
  pop();

  push();
  translate(221, 250);
  rotate(0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(212, 275);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(222, 290);
  rotate(0.25);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(215, 310);
  rotate(-0.25);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(221, 328);
  rotate(0.1);
  fill(223, 162, 255);
  rect(0, 0, 8, 28, 20, 20, 20, 20);
  pop();

  push();
  translate(218, 352);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(227, 368);
  rotate(0.1);
  fill(223, 162, 255);
  rect(0, 0, 8, 20, 20, 20, 20, 20);
  pop();

  //head
  push();
  translate(200, 195); //STARTING POINT OF THE JELLYFISH
  rotate(0.2);
  fill(205, 134, 255);
  ellipse(0, 0, 90, 60);
  pop();

  //circles on the head
  push();
  translate(195, 182);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  push();
  translate(218, 190);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  push();
  translate(203, 200);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  push();
  translate(180, 192);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  pop();
}

//SMALL JELLYFISH
function smalljellyfish(jellyfishX, jellyfishY) {
  push();

  translate(jellyfishX, jellyfishY);
  scale(0.8);

  noStroke();

  //leg 1
  push();
  translate(179, 210);
  rotate(0.5);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(165, 235);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(175, 253);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(168, 280);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(178, 298);
  rotate(0.1);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(175, 325);
  rotate(-0.5);
  fill(223, 162, 255);
  rect(0, 0, 8, 20, 20, 20, 20, 20);
  pop();

  //leg2
  push();
  translate(196, 215);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(190, 240);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(198, 260);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(193, 280);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 35, 20, 20, 20, 20);
  pop();

  push();
  translate(203, 305);
  rotate(0.2);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(198, 325);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(207, 345);
  rotate(0.35);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(198, 366);
  rotate(-0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(207, 385);
  rotate(0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 20, 20, 20, 20, 20);
  pop();

  //leg3
  push();
  translate(208, 220);
  rotate(-0.35);
  fill(223, 162, 255);
  rect(0, 0, 8, 40, 20, 20, 20, 20);
  pop();

  push();
  translate(221, 250);
  rotate(0.3);
  fill(223, 162, 255);
  rect(0, 0, 8, 30, 20, 20, 20, 20);
  pop();

  push();
  translate(212, 275);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(222, 290);
  rotate(0.25);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(215, 310);
  rotate(-0.25);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(221, 328);
  rotate(0.1);
  fill(223, 162, 255);
  rect(0, 0, 8, 28, 20, 20, 20, 20);
  pop();

  push();
  translate(218, 352);
  rotate(-0.4);
  fill(223, 162, 255);
  rect(0, 0, 8, 25, 20, 20, 20, 20);
  pop();

  push();
  translate(227, 368);
  rotate(0.1);
  fill(223, 162, 255);
  rect(0, 0, 8, 20, 20, 20, 20, 20);
  pop();

  //head
  push();
  translate(200, 195); //STARTING POINT OF THE JELLYFISH
  rotate(0.2);
  fill(205, 134, 255);
  ellipse(0, 0, 90, 60);
  pop();

  //circles on the head
  push();
  translate(195, 182);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  push();
  translate(218, 190);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  push();
  translate(203, 200);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  push();
  translate(180, 192);
  rotate(0.2);
  stroke(133, 14, 255);
  strokeWeight(3);
  fill(223, 134, 255);
  ellipse(0, 0, 15, 8);
  pop();

  pop();
}

//SHARK
function shark(sharkX, sharkY) {
  push();
  noStroke();

  //main body
  fill(102, 102, 102);
  ellipse(sharkX, sharkY, 150, 40);

  //eyes
  fill(0, 0, 0);
  ellipse(sharkX + 40, sharkY - 5, 5);

  //tail
  fill(102, 102, 102);
  beginShape();
  vertex(sharkX - 115, sharkY - 40);
  vertex(sharkX - 68, sharkY);
  vertex(sharkX - 87, sharkY + 20);
  endShape();

  //top fin
  fill(102, 102, 102);
  beginShape();
  vertex(sharkX - 28, sharkY - 16);
  vertex(sharkX - 30, sharkY - 44);
  vertex(sharkX, sharkY - 20);
  endShape();

  //front fin
  fill(102, 102, 102);
  beginShape();
  vertex(sharkX + 11, sharkY + 18);
  vertex(sharkX - 15, sharkY + 48);
  vertex(sharkX - 10, sharkY + 20);
  endShape();

  //bottom fin
  fill(102, 102, 102);
  beginShape();
  vertex(sharkX - 40, sharkY + 15);
  vertex(sharkX - 59, sharkY + 22);
  vertex(sharkX - 58, sharkY + 12);
  endShape();

  //teeth
  fill(255, 255, 255);
  beginShape();
  vertex(sharkX + 48, sharkY + 11);
  vertex(sharkX + 56, sharkY + 13);
  vertex(sharkX + 50, sharkY + 18);
  endShape();

  fill(255, 255, 255);
  beginShape();
  vertex(sharkX + 42, sharkY + 9);
  vertex(sharkX + 42, sharkY + 15);
  vertex(sharkX + 48, sharkY + 11);
  endShape();

  fill(255, 255, 255);
  beginShape();
  vertex(sharkX + 37, sharkY + 5);
  vertex(sharkX + 42, sharkY + 9);
  vertex(sharkX + 36, sharkY + 10);
  endShape();

  pop();
}

//DRAW OBJECTS, CREATE POSITIONS, MOVEMENTS, BCKGROUND

//SWICHING STATES
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "lose") {
    state = "game";
    resetGame();
  } else if (state === "win") {
    state = "game";
    resetGame();
  }
}

function resetGame() {
  shark1X = 600;
  shark1Y = 200;
  speed1 = 3.5;
  shark2X = 400;
  shark2Y = 400;
  speed2 = 5;
  shark3X = 50;
  shark3Y = 550;
  speed3 = 6;
  shark4X = 50;
  shark4Y = 550;
  speed4 = 6;
  shipY = 0;
  shipX = 0;
  velocity = 1;
  acceleration = 0.1;
  corall1X = 130;
  corall1Y = 500;
  corall2X = 800;
  corall2Y = 520;
  corall3X = 580;
  corall3Y = 566;
  corall4X = 999;
  corall4Y = 345;
  corall5X = 1014;
  corall5Y = 189;
  jellyfish1X = 100;
  jellyfish1Y = -140;
  jellyfish2X = 150;
  jellyfish2Y = 100;
  jellyfish3X = 380;
  jellyfish3Y = 130;
  jellyfish4X = 400;
  jellyfish4Y = 30;
  jellyfish5X = 620;
  jellyfish5Y = -140;
  jellyfish6X = 600;
  jellyfish6Y = 50;
}

//shark1
let shark1X = 600;
let shark1Y = 200;
let speed1 = 3.5;
//shark2
let shark2X = 400;
let shark2Y = 400;
let speed2 = 5;
//shark3
let shark3X = 50;
let shark3Y = 550;
let speed3 = 6;
//shark
let shark4X = 50;
let shark4Y = 550;
let speed4 = 6;
//ship
let shipY = 0;
let shipX = 0;
let velocity = 1;
let acceleration = 0.1;
//corall1
let corall1X = 130;
let corall1Y = 500;
//corall2
let corall2X = 800;
let corall2Y = 520;
//corall3
let corall3X = 580;
let corall3Y = 566;
//corall4
let corall4X = 999;
let corall4Y = 345;
//corall5
let corall5X = 1014;
let corall5Y = 189;
//jellyfish1
let jellyfish1X = 100;
let jellyfish1Y = -140;
//jellyfish2
let jellyfish2X = 150;
let jellyfish2Y = 100;
//jellyfish3
let jellyfish3X = 380;
let jellyfish3Y = 130;
//jellyfish4
let jellyfish4X = 400;
let jellyfish4Y = 30;
//jellyfish5
let jellyfish5X = 620;
let jellyfish5Y = -140;
//jellyfish6
let jellyfish6X = 600;
let jellyfish6Y = 50;
//stop ship on the ground
//let isGameActive = true;
//game stage
let state = "start";

function draw() {
  //screen changes
  if (state === "start") {
    startScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "game") {
    scenery();
    ship(shipX, shipY);

    //ship gravity
    shipY = shipY + velocity;
    velocity = velocity + acceleration;

    //stop ship on the ground, except the landing area
    if ((shipY > 615 && shipX < 1030) || shipY < 0) {
      state = "lose";
    } else if (shipY > 615 && shipX > 1030) {
      if (velocity < 4) {
        state = "win";
      } else {
        state = "lose";
      }
    }

    //collision with corall1
    if (
      dist(shipX + 75, shipY + 30, 153, 486) < 20 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 155, 560) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 158, 630) < 10 || //with the front of the ship
      dist(shipX + 50, shipY + 30, 153, 486) < 20 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 155, 560) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 158, 560) < 10 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, 153, 486) < 20 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 155, 560) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 158, 630) < 10 //with the end of the ship
    ) {
      state = "lose";
    } else {
      corall(corall1X, corall1Y);
    }

    //collision with corall2
    if (
      dist(shipX + 75, shipY + 30, 956, 539) < 20 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 966, 598) < 30 || //with the front of the ship
      dist(shipX + 50, shipY + 30, 956, 539) < 20 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 966, 598) < 30 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, 956, 539) < 20 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 966, 598) < 30 //with the end of the ship
    ) {
      state = "lose";
    } else {
      corall(corall2X, corall2Y);
    }

    //collision with corall3
    if (
      dist(shipX + 75, shipY + 30, 529, 526) < 20 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 529, 585) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 524, 526) < 10 || //with the front of the ship
      dist(shipX + 50, shipY + 30, 529, 526) < 20 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 529, 585) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 524, 627) < 10 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, 524, 627) < 20 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 529, 585) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 158, 627) < 10 //with the end of the ship
    ) {
      state = "lose";
    } else {
      smallcorall(corall3X, corall3Y);
    }

    //collision with corall4
    if (
      dist(shipX + 75, shipY + 30, 972, 353) < 20 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 966, 409) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 960, 452) < 10 || //with the front of the ship
      dist(shipX + 50, shipY + 30, 972, 353) < 20 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 966, 409) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 960, 452) < 10 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, 972, 353) < 20 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 966, 409) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 960, 452) < 10 //with the end of the ship
    ) {
      state = "lose";
    } else {
      smallcorall(corall4X, corall4Y);
    }

    //collision with corall5
    if (
      dist(shipX + 75, shipY + 30, 1001, 192) < 20 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 996, 247) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, 994, 291) < 10 || //with the front of the ship
      dist(shipX + 50, shipY + 30, 1001, 192) < 20 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 996, 247) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, 994, 291) < 10 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, 1001, 192) < 20 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 996, 247) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, 994, 291) < 10 //with the end of the ship
    ) {
      state = "lose";
    } else {
      smallcorall(corall5X, corall5Y);
    }

    //collision with jellyfish1
    if (
      dist(shipX + 75, shipY + 30, jellyfish1X + 200, jellyfish1Y + 190) < 45 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish1X + 200, jellyfish1Y + 336) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish1X + 190, jellyfish1Y + 310) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish1X + 215, jellyfish1Y + 370) < 15 || //with the front of the ship
      dist(shipX + 50, shipY + 30, jellyfish1X + 190, jellyfish1Y + 190) < 45 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish1X + 190, jellyfish1Y + 336) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish1X + 190, jellyfish1Y + 310) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish1X + 215, jellyfish1Y + 370) < 15 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, jellyfish1X + 190, jellyfish1Y + 190) < 45 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish1X + 190, jellyfish1Y + 336) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish1X + 190, jellyfish1Y + 310) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish1X + 215, jellyfish1Y + 370) < 15 //with the end of the ship
    ) {
      state = "lose";
    } else {
      jellyfish(jellyfish1X, jellyfish1Y);
    }

    //collision with jellyfish2
    if (
      dist(shipX + 75, shipY + 30, jellyfish2X + 200, jellyfish2Y + 190) < 45 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish2X + 200, jellyfish2Y + 336) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish2X + 190, jellyfish2Y + 310) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish2X + 215, jellyfish2Y + 370) < 15 || //with the front of the ship
      dist(shipX + 50, shipY + 30, jellyfish2X + 190, jellyfish2Y + 190) < 45 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish2X + 190, jellyfish2Y + 336) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish2X + 190, jellyfish2Y + 310) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish2X + 215, jellyfish2Y + 370) < 15 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, jellyfish2X + 190, jellyfish2Y + 190) < 45 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish2X + 190, jellyfish2Y + 336) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish2X + 190, jellyfish2Y + 310) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish2X + 215, jellyfish2Y + 370) < 15 //with the end of the ship
    ) {
      state = "lose";
    } else {
      jellyfish(jellyfish2X, jellyfish2Y);
    }

    //collision with jellyfish3
    if (
      dist(shipX + 75, shipY + 30, jellyfish3X + 200, jellyfish3Y + 190) < 45 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish3X + 200, jellyfish3Y + 336) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish3X + 190, jellyfish3Y + 310) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish3X + 215, jellyfish3Y + 370) < 15 || //with the front of the ship
      dist(shipX + 50, shipY + 30, jellyfish3X + 190, jellyfish3Y + 190) < 45 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish3X + 190, jellyfish3Y + 336) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish3X + 190, jellyfish3Y + 310) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish3X + 215, jellyfish3Y + 370) < 15 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, jellyfish3X + 190, jellyfish3Y + 190) < 45 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish3X + 190, jellyfish3Y + 336) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish3X + 190, jellyfish3Y + 310) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish3X + 215, jellyfish3Y + 370) < 15 //with the end of the ship
    ) {
      state = "lose";
    } else {
      jellyfish(jellyfish3X, jellyfish3Y);
    }

    //collision with jellyfish5
    if (
      dist(shipX + 75, shipY + 30, jellyfish5X + 200, jellyfish5Y + 190) < 45 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish5X + 200, jellyfish5Y + 336) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish5X + 190, jellyfish5Y + 310) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish5X + 215, jellyfish5Y + 370) < 15 || //with the front of the ship
      dist(shipX + 50, shipY + 30, jellyfish5X + 190, jellyfish5Y + 190) < 45 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish5X + 190, jellyfish5Y + 336) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish5X + 190, jellyfish5Y + 310) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish5X + 215, jellyfish5Y + 370) < 15 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, jellyfish5X + 190, jellyfish5Y + 190) < 45 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish5X + 190, jellyfish5Y + 336) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish5X + 190, jellyfish5Y + 310) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish5X + 215, jellyfish5Y + 370) < 15 //with the end of the ship
    ) {
      state = "lose";
    } else {
      jellyfish(jellyfish5X, jellyfish5Y);
    }

    //collision with jellyfish4
    if (
      dist(shipX + 75, shipY + 30, jellyfish4X + 200, jellyfish4Y + 190) < 45 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish4X + 200, jellyfish4Y + 336) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish4X + 190, jellyfish4Y + 310) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish4X + 215, jellyfish4Y + 370) < 15 || //with the front of the ship
      dist(shipX + 50, shipY + 30, jellyfish4X + 190, jellyfish4Y + 190) < 45 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish4X + 190, jellyfish4Y + 336) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish4X + 190, jellyfish4Y + 310) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish4X + 215, jellyfish4Y + 370) < 15 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, jellyfish4X + 190, jellyfish4Y + 190) < 45 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish4X + 190, jellyfish4Y + 336) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish4X + 190, jellyfish4Y + 310) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish4X + 215, jellyfish4Y + 370) < 15 //with the end of the ship
    ) {
      state = "lose";
    } else {
      jellyfish(jellyfish4X, jellyfish4Y);
    }

    //collision with jellyfish6
    if (
      dist(shipX + 75, shipY + 30, jellyfish6X + 200, jellyfish6Y + 190) < 45 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish6X + 200, jellyfish6Y + 336) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish6X + 190, jellyfish6Y + 310) < 25 || //with the front of the ship
      dist(shipX + 75, shipY + 30, jellyfish6X + 215, jellyfish6Y + 370) < 15 || //with the front of the ship
      dist(shipX + 50, shipY + 30, jellyfish6X + 190, jellyfish6Y + 190) < 45 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish6X + 190, jellyfish6Y + 336) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish6X + 190, jellyfish6Y + 310) < 25 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, jellyfish6X + 215, jellyfish6Y + 370) < 15 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, jellyfish6X + 190, jellyfish6Y + 190) < 45 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish6X + 190, jellyfish6Y + 336) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish6X + 190, jellyfish6Y + 310) < 25 || //with the end of the ship
      dist(shipX + 25, shipY + 30, jellyfish6X + 215, jellyfish6Y + 370) < 15 //with the end of the ship
    ) {
      state = "lose";
    } else {
      jellyfish(jellyfish6X, jellyfish6Y);
    }

    //collision with shark1
    if (
      dist(shipX + 75, shipY + 30, shark1X, shark1Y) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, shark1X + 55, shark1Y) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, shark1X - 55, shark1Y) < 30 || //with the front of the ship
      dist(shipX + 50, shipY + 30, shark1X, shark1Y) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, shark1X + 55, shark1Y) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, shark1X - 55, shark1Y) < 30 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, shark1X, shark1Y) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, shark1X + 55, shark1Y) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, shark1X - 55, shark1Y) < 30 //with the end of the ship
    ) {
      state = "lose";
    } else {
      shark(shark1X, shark1Y);
    }

    //collision with shark2
    if (
      dist(shipX + 75, shipY + 30, shark2X, shark2Y) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, shark2X + 55, shark2Y) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, shark2X - 55, shark2Y) < 30 || //with the front of the ship
      dist(shipX + 50, shipY + 30, shark2X, shark2Y) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, shark2X + 55, shark2Y) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, shark2X - 55, shark2Y) < 30 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, shark2X, shark2Y) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, shark2X + 55, shark2Y) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, shark2X - 55, shark2Y) < 30 //with the end of the ship
    ) {
      state = "lose";
    } else {
      shark(shark2X, shark2Y);
    }

    //collision with shark3
    if (
      dist(shipX + 75, shipY + 30, shark3X, shark3Y) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, shark3X + 55, shark3Y) < 30 || //with the front of the ship
      dist(shipX + 75, shipY + 30, shark3X - 55, shark3Y) < 30 || //with the front of the ship
      dist(shipX + 50, shipY + 30, shark3X, shark3Y) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, shark3X + 55, shark3Y) < 30 || //with the middle of the ship
      dist(shipX + 50, shipY + 30, shark3X - 55, shark3Y) < 30 || //with the middle of the ship
      dist(shipX + 25, shipY + 30, shark3X, shark3Y) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, shark3X + 55, shark3Y) < 30 || //with the end of the ship
      dist(shipX + 25, shipY + 30, shark3X - 55, shark3Y) < 30 //with the end of the ship
    ) {
      state = "lose";
    } else {
      shark(shark3X, shark3Y);
    }
  }

  //move the ship with the buttons
  if (keyIsDown(37)) {
    shipX = shipX - 2;
  } else if (keyIsDown(39)) {
    shipX = shipX + 2;
  }
  if (keyIsDown(32)) {
    velocity = velocity - 0.5;
  }

  //sharks moving
  shark1X = shark1X + speed1;
  if (shark1X > 1350) {
    shark1X = -100;
  }

  shark2X = shark2X + speed2;
  if (shark2X > 1350) {
    shark2X = -100;
  }

  shark3X = shark3X + speed3;
  if (shark3X > 1350) {
    shark3X = -100;
  }

  shark4X = shark4X + speed4;
  if (shark4X > 1350) {
    shark4X = -100;
  }
}

//sidenote: object collision detection(not used in the game): http://wiki.iad.zhdk.ch/PB/2554331795/p5.js+Simple+Collision+Detection
