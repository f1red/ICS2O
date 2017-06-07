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
var speedX = 3;
var speedY = 3;
//speed variable for blue puck
var bspeedX = 3;
var bspeedY = 3;
//score
var score = 0;

function setup() {
  createCanvas(500, 800);
}

function draw() {
	background (0, 0, 0);//black background
	
	//board
	//circle
	strokeWeight (10);
	stroke (255, 0, 0);
	noFill() ;
    ellipse (250, 400, 150, 150); //big circle in middle
	ellipse (250, -50, 250, 250); //big half circle at top
	ellipse (250, 850, 250, 250); //big half circle at bottom
	line (0, 400, 175, 400); // first line through the middle
	line (325, 400, 500, 400); // second line through the middle
	
	//borders
	stroke(255, 0, 0); //red stroke
	noFill();
	stroke(0, 255, 0); //green stroke
	strokeWeight(20);
	line(0, 0, 800, 0); 
	stroke(16, 0, 255); //blue stroke 
	line(0, 0, 0, 800); 
	stroke(243, 243, 21); //neon yellow stroke
	line(500, 800, 500, 0);

	//net
	strokeWeight(5);
	stroke(255, 0 ,0); // red
	line (200, 10, 300, 10);
	
	//handle
	fill (0, 0, 0); // black
	stroke (0, 0, 255); //blue
	strokeWeight (10);
	ellipse (X, Y, 35, 35);
	
	//pucks
	// white puck
	noStroke ();
    fill (255, 255, 255); //white
    ellipse (puckX, puckY, 30, 30);
    //blue puck
	fill (91, 246, 255); //baby blue
	ellipse (bpuckX, bpuckY, 30, 30);
	
    //movement for puck
    bpuckX = bpuckX + bspeedX;
    bpuckY = bpuckY + bspeedY;
    puckX = puckX + speedX;
    puckY = puckY + speedY;
	
	//collision with wall for puck
    //if puck hits left wall then bounce back
    if (puckX > 485) {
        speedX = -speedX;
		puckX = 485;
    }
    if (bpuckX > 485) {
        bspeedX = -bspeedX;
		bpuckX = 485;
    }
    //if puck hits right wall then bounce back
    if (puckX < 15) {
        speedX = -speedX;
		puckX = 15;
    }
    if (bpuckX < 15) {
        bspeedX = -bspeedX;
		bpuckX = 15;
    }
    //if puck hits top wall then bounce back 
    if (puckY < 15) {
        speedY = -speedY;
		puckY = 15;
    }
    if (bpuckY < 15) {
        bspeedY = -bspeedY;
		bpuckY = 15;
    }

	//collision with handle
	//white puck
	var wx = (puckX-X);
	var wy = (puckY-Y);
	if ((abs(wx)<32.5) && (abs(wy)<32.5)) {
		if (wx < 0) {
			speedX = random (-5, -3);
			puckX = puckX - 18;
		} else {
			speedX = random (3, 5);
			puckX = puckX + 18; 
		}
		if (wy < 0) {
			speedY = random (-5, -3);
			puckY = puckY - 18;
		} else {
			speedY = random (3, 5);
			puckY = puckY + 18;
		}	
    }
	
	//blue puck
	var bx = (bpuckX-X);
	var by = (bpuckY-Y);
	if ((abs(bx)<32.5) && (abs(by)<32.5)) {
		if (bx < 0) {
			bspeedX = random (-5, -3);
			bpuckX = bpuckX - 18;
		} else {
			bspeedX = random (3, 5);
			bpuckX = bpuckX + 18; 
		}
		if (by < 0) {
			bspeedY = random (-5, -3);
			bpuckY = bpuckY - 18;
		} else {
			bspeedY = random (3, 5);
			bpuckY = bpuckY + 18;
		}	
    }
	
	//score
	noStroke ();
	fill(126, 103, 221);
	text("score: " + score, 35, 35); 
	
	//scoring
	//pucks get one point
	if ((puckX >= 200 && puckX <= 300) && (puckY <= 15)) {
			score = score + 1;
	}
	
	if ((bpuckX >= 200 && bpuckX <= 300) && (bpuckY <= 15)) {
			score = score + 1;
	}
	//GAME OVER (if both pucks fall out)

	if ((puckY > 765) && (bpuckY > 765)) {
		fill (0, 0, 0); //black bg
		rect (0, 0, 500, 800);
		fill(126, 103, 221);
		textSize (100);
		text ("GAME", 100, 300);
		text ("OVER", 100, 400);
		text ("score: " + score, 80, 500);
		
	}
    //stick is controlled by mouse
    X = mouseX;
	//handle boundaries
	if (X < 35) {
		X = 35;
	}
	if (X > 465) {
		X = 465;
	}
    Y = mouseY;
	//handle boundaries
	if (Y <35) {
		Y = 35;
	}
	if (Y > 765) {
		Y = 765;
	}
}


