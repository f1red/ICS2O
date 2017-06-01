//variables for stick
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
//score
var score = 0;

function setup() {
  createCanvas(500, 800);
}

function draw() {
	background (255, 255, 255);//white background
    stroke(255, 0, 0); //red stroke
	
    //board
	//borders
	noFill();
	stroke(0, 0, 0);
	strokeWeight(20);
	line(0, 0, 800, 0); 
	line(0, 0, 0, 800); 
	line(500, 800, 500, 0);
	
	//net
	strokeWeight(5);
	stroke(255, 0 ,0); // red
	line (200, 10, 300, 10);
	//scoring
	//black ball will score 3 points
	if ((puckX >= 200 && puckX <= 300) && (puckY <= 15)) {
			score = score + 1;
	}
	
	if ((bpuckX >= 200 && bpuckX <= 300) && (bpuckY <= 15)) {
			score = score + 1;
	}
	
	//circles
    ellipse (250, 400, 150, 150); //big circle in middle
	ellipse (250, -50, 250, 250); //big half circle at top
	ellipse (250, 850, 250, 250); //big half circle at bottom
	line (0, 400, 175, 400); // first line through the middle
	line (325, 400, 500, 400); // second line through the middle
	
	//handle
	fill (0, 0, 255); // blue
	stroke (0, 0, 0); //black
	ellipse (mouseX, mouseY, 50, 50);
	
	//collision with handle
	//black puck
	if ((abs(puckX-mouseX)<32.5) && (abs(puckY-mouseY)<32.5)) {
		speedX = random (-15, 15);
		speedY = -speedY;
		
	}
	
	//blue puck
	if ((abs(bpuckX-mouseX)<32.5) && (abs(bpuckY-mouseY)<32.5)) {
		bspeedX = random (-7, 7);
		bspeedY = random (-10, -5);
		
	}
	
    //puck
	noStroke ();
    fill (0, 0, 0); //pure black
    ellipse (puckX, puckY, 30, 30);
    //blue puck
	fill (255, 0, 0); //pure blue
	ellipse (bpuckX, bpuckY, 30, 30); 
	//score
	fill(106, 83, 201)
	text("score: " + score, 35, 35); 
    
    
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
    //if puck hits top wall then bounce back 
    if (puckY < 15) {
        speedY = -speedY;
    }
    if (bpuckY < 15) {
        bspeedY = -bspeedY;
    }


    //stick is controlled by mouse
    X = mouseX;
    Y = mouseY;
}


