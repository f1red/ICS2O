/* Player has to hit back balls, ball will be added as time passes by. You can hold a ball by getting it into your stick, but the ball will not move with your stick. ***NOTE: PLEASE FIND OUT HOW TO ADD BALLS USING TIME...*** */
//NOTE: positions can be changed later to complicate the game
//variable for handle
var X = 200;
var Y = 200;
//variable for puck 
var puckX = 200;
var puckY = 200;
//variable for blue puck
var bpuckX = 100;
var bpuckY = 50;
//speed variable for puck 
var speedX = 5;
var speedY = 5;
//speed variable for blue puck
var bspeedX = 3;
var bspeedY = 3;

function setup() {
  createCanvas(640, 480);
}

function draw() {
   //white background
    //red stroke
    stroke(255, 0, 0);
    background (255, 255, 255);
    //board
    noFill();
    ellipse (200, 200, 150, 150); //middle of canvas **************
    //stick
    //red
    fill(255, 0, 0);
    //ellipse (mouseX, mouseY, 50, 50);
    noStroke();
    quad(mouseX, mouseY, mouseX + 20, mouseY, mouseX, mouseY + 60, mouseX - 20, mouseY + 60);  
    //this is the part that will hit the puck ***PLEASE ADD BLACK HOCKEY TAPE TO THE STICK**
    fill(255, 0, 0);
    rect(mouseX - 50, mouseY + 58, 51, 18);
    //puck
    //pure black
    fill (0, 0, 0);
    ellipse (puckX, puckY, 30, 30);
    //blue puck
    //pure blue
    fill(0, 0, 255);
    ellipse (bpuckX, bpuckY, 30, 30);
    //speed for puck
    bpuckX = bpuckX + bspeedX;
    bpuckY = bpuckY + bspeedY;
    puckX = puckX + speedX;
    puckY = puckY - speedY;
    //collision with wall for puck
    //if puck hits left wall then bounce back
    if (puckX > 385) {
        speedX = -speedX;
    }
    if (bpuckX > 385) {
        bspeedX = -bspeedX;
    }
    //if puck hits right wall then bounce back
    if (puckX < 15) {
        speedX = -speedX;
    }
    if (bpuckX < 15) {
        bspeedX = -bspeedX;
    }
/*  //if puck hits bottom wall then bounce back
    if (puckY > 385) {
        speedY = -speedY;
    }
     if (bpuckY > 385) {
        bspeedY = -bspeedY;
    }
    if puck hits top wall then bounce back */
    if (puckY < 15) {
        speedY = -speedY;
    }
    if (bpuckY < 15) {
        bspeedY = -bspeedY;
    }
/*  back up collision if something goes wrong  if (abs(puckX - mouseX)< 40){
			if(abs(puckY - mouseY)<40) {
				//bounce back
				speedX = -speedX;
				speedY = -speedY;
			}
		}
		*/
	//collision
	if ((abs(mouseX - 50 - puckX) < 40) && (abs(mouseY + 58 - puckY) < 18)) {
        speedX = round(random(-5, 5)); 
        speedY = -speedY;
    }
    if ((abs(mouseX - 50 - bpuckX) < 40) && (abs(mouseY + 58 - bpuckY) < 18)) {
        bspeedX = round(random(-7, 7));
        bspeedY = -bspeedY;
    }
    //stick is controlled by mouse
    X = mouseX;
    Y = mouseY;
}

