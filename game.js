function setup() {
  createCanvas(1200, 700);
}

//START SCREEN
function startScreen() {
  background(0, 0, 255);
  text("Click anywhere to Start the Game", 200, 100);
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  }
}

//LOSE SCREEN
function loseScreen() {
  background(255, 0, 0);
  text("You Lost!", 200, 100);
}

//WIN SCREEN
function winScreen() {
  background(0, 255, 0);
  text("You Won!", 200, 100);
}

//SCENERY//
function scenery() {
  push();

  //water
  noStroke();
  fill(101, 217, 228);
  rect(0, 0, width, height);

  //ground
  fill(244, 194, 119);
  rect(0, 650, width, 50);

  pop();

  //land area
  push();
  fill(255, 255, 255);
  quad(1050, 650, 1150, 650, 1175, 680, 1025, 680);
  pop();
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
  translate(corallX, corallY);
  fill(48, 109, 75);
  rect(0, 0, 10, 200, 20, 20, 0, 0);
  pop();
}

//JELLYFISH
function jellyfish(jellyfishX, jellyfishY) {
  push();
  translate(jellyfishX, jellyfishY);
  fill(255, 100, 100);
  ellipse(0, 0, 10, 300);
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
//corall
let corall1X = 200;
let corall1Y = 450;
//jellyfish
let jellyfish1X = 300;
let jellyfish1Y = 150;

//stop ship on the ground
let isGameActive = true;
//game stage
let state = "start";

function draw() {
  //screen changes
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    scenery();
    jellyfish(jellyfish1X, jellyfish1Y);
    shark(shark1X, shark1Y);
    shark(shark2X, shark2Y);
    shark(shark3X, shark3Y);
    ship(shipX, shipY);

    //ship gravity
    if (isGameActive) {
      shipY = shipY + velocity;
      velocity = velocity + acceleration;

      //stop ship on the ground
    }
    if (shipY > 640 && shipX < 1050) {
      isGameActive = false;
      loseScreen();
    }

    //collision with corall1
    if (
      dist(shipX + 75, shipY + 30, 205, 460) < 20 ||
      dist(shipX + 50, shipY + 30, 205, 460) < 20 ||
      dist(shipX + 25, shipY + 30, 205, 460) < 20
    ) {
      isGameActive = false;
      loseScreen();
    } else {
      corall(corall1X, corall1Y);
    }

    //collision with shark1
    if (
      dist(shipX + 75, shipY +30, )
    )

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



//note for object collision detection(not used in the game): http://wiki.iad.zhdk.ch/PB/2554331795/p5.js+Simple+Collision+Detection