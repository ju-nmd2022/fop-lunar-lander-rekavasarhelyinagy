function setup() {
  createCanvas(1200, 700);
}

//SHIP//
function ship(shipX, shipY) {
  push();
  translate(shipX, shipY);

  fill(255, 0, 0);
  ellipse(100, 100, 50, 25);

  fill(0, 0, 255);
  ellipse(115, 100, 20, 20);

  pop();
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
  rect(0, 600, width, height);

  pop();

  push();
  fill(255, 255, 255);
  ellipse(1100, 600, 100, 50);
  pop();
}

//SHARK1
function shark1(s1x, s1y) {
  push();
  fill(0, 0, 255);
  ellipse(s1x, s1y, 150, 50);
  pop();
}

//SHARK2
function shark2(s2x, s2y) {
  push();
  fill(0, 0, 255);
  ellipse(s2x, s2y, 150, 50);
  pop();
}

//DRAW OBJECTS, CREATE POSITIONS, MOVEMENTS, BCKGROUND
let s1x = 600;
let speed1 = 3.5;

let s2x = 400;
let speed2 = 5;

//ship gravity
let shipY = 100;
let shipX = 100;
let velocity = 1;
let acceleration = 0.1;
//stop ship on the ground
let isGameActive = true;
//move up ship on click

function draw() {
  scenery();
  ship(shipX, shipY);
  shark1(s1x, 200);
  shark2(s2x, 400);

  //ship gravity
  shipY = shipY + velocity;
  velocity = velocity + acceleration;
  if (isGameActive) {
    shipY = shipY + velocity;
    velocity = velocity + acceleration;

    //stop ship on the ground
    if (shipY > 400) {
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
  if (keyIsDown(38)) {
    velocity = velocity - 0.5;   
  }

  //sharks turning
  s1x = s1x + speed1;
  if (s1x > 1150 || s1x < 50) {
    speed1 = speed1 * -1;
  }

  s2x = s2x + speed2;
  if (s2x > 1150 || s2x < 50) { 
    speed2 = speed2 * -1;
  }
}
 