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
  createCanvas(500, 800);
}

function draw() {
   //white background
    //red stroke
    stroke(255, 0, 0);
    background (255, 255, 255);
    //board
    noFill();
	stroke(0, 0, 0);
	strokeWeight(20);
	//borders
	line(0, 0, 800, 0); 
	line(0, 0, 0, 800); 
	line(500, 800, 500, 0);
	//line(0, 800, 500, 800); 
	strokeWeight(5);
	stroke(255, 0 ,0); // red
	//circles
    ellipse (250, 400, 150, 150); //big circle in middle
	ellipse (250, -50, 250, 250); //big half circle at top
	ellipse (250, 850, 250, 250); //big half circle at bottom
	line (0, 400, 175, 400);
	line (325, 400, 500, 400);
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
    if (puckX > 485) {
        speedX = -speedX;
    }
    if (bpuckX > 485) {
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




