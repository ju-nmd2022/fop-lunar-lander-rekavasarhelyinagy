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
  } else if (state === "game") {
    state = "end";
  } else if (state === "end") {
    state = "start";
  }
}

//END SCREEN
function endScreen() {
  background(255, 0, 0);
  text("Game Over", 200, 100); 
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

  push();
  fill(255, 255, 255);
  ellipse(1100, 650, 100, 50);
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

//SHARK1
function shark1(shark1X, shark1Y) {
  push();
  fill(0, 0, 255);
  ellipse(shark1X, shark1Y, 150, 50);
  pop();
}

//SHARK2
function shark2(shark2X, s2y) {
  push();
  fill(0, 0, 255);
  ellipse(shark2X, s2y, 150, 50);
  pop();
}

//DRAW OBJECTS, CREATE POSITIONS, MOVEMENTS, BCKGROUND

//shark1
let shark1X = 600;
let speed1 = 3.5;
//shark2
let shark2X = 400;
let speed2 = 5;
//ship
let shipY = 0;
let shipX = 0;
let velocity = 1;
let acceleration = 0.1;
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
    ship(shipX, shipY);
    shark1(shark1X, 200);
    shark2(shark2X, 400);
  } else if (state === "end") {
    endScreen();
  }

  //ship gravity
  if (isGameActive) {
    shipY = shipY + velocity;
    velocity = velocity + acceleration;

    //stop ship on the ground
    if (shipY > 650) {
      isGameActive = false;
    }
    console.log(shipY);
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

  //sharks turning
  shark1X = shark1X + speed1;
  if (shark1X > 1150 || shark1X < 50) {
    speed1 = speed1 * -1;
  }

  shark2X = shark2X + speed2;
  if (shark2X > 1150 || shark2X < 50) {
    speed2 = speed2 * -1;
  }
}
