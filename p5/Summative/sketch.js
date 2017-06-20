//variables for handle
var X = 200;
var Y = 200;
//variable for puck 
var puckX = 200;
var puckY = 100;
//variable for blue puck
var bpuckX = 400;
var bpuckY = 50;
//speed variable for puck 
var speedX = 2;
var speedY = 2;
//speed variable for blue puck
var bspeedX = 2;
var bspeedY = 2;
//score
var score = 0;
//status
var status =  0;

function setup() {
	frameRate (300); //max framerate (if pc can handle)
	createCanvas(500, 800);
}

function draw() {
	background (0, 0, 0); //black background
	textFont("fantasy"); //makes entire game with the font fantasy
	if (status == 0) {
		statusStart ();
	} else if (status == 1) {
		playGame ();
	} else if (status == 2) {
		pauseGame ();
	} else {
		statusRestart ();
    	}
}

//start screen
function statusStart () {
	//status 0
	//starting screen 
	noStroke();
	textSize(140);
	fill (0, 255, 0); //green
	text ("Bounce", 37, 250);
	text ("Back", 115, 400);
	fill (33, 237, 80); //green
	rect (155, 645, 200, 70); //button to start game
	textSize (50);
	fill (255, 255, 255); //white
	text ("Start >", 190, 700); 
	if ((mouseIsPressed) && (mouseY < 715) && (mouseY > 645) && (mouseX > 165) && (mouseX <365)) { //if statement to start game
		status += 1;
	} //if mouse is pressed, play game
	fill (242, 230, 0); // yellow
	rect (155, 515, 200, 70); //button to see instructions
	fill (0, 150, 230); //blue
	textSize (25);
	text ("hover over for instructions", 185, 540, 195);
	
	if ((mouseButton) && (mouseY < 585) && (mouseY > 515) && (mouseX > 165) && (mouseX <365)) { //hover over to go to instructions
		instructions(); 
	} //if mouse is pressed display instructions
}

function instructions () {
	//starting screen
	fill (0, 0, 0); //black bg
	rect (0, 0, 500, 800);
	textSize (40);
	stroke (255, 255, 255);
	textFont ("anton");
	text ("The goal: score as many pucks into the nets as possible using your mouse. The puck will spawn in the centre of the arena once you have scored. There is a dark grey line at the top of the arena that you cannot hit the pucks in. Press 'P' to pause the game. For more information, read the requirements of the game above.", 0, 50, 500);
	noStroke ();
	fill (33, 237, 80); //green
	rect (155, 645, 200, 70); //button to start game
	textSize (50);
	fill (255, 255, 255); //white
	textFont ("fantasy");
	text ("Start >", 190, 700); 
	if ((mouseIsPressed) && (mouseY < 715) && (mouseY > 645) && (mouseX > 165) && (mouseX <365)) { //if statement to start game
		status += 1;
	} //if mouse is pressed, play game
}


//board 
function drawBoard () {
		drawCircles ();
		drawBorders ();
		drawNet ();
		drawHandle ();
		drawPucks ();
		drawScore ();
}

//borders
function drawBorders() {
	stroke(255, 0, 0); //red stroke
	noFill();
	stroke(0, 255, 0); //green stroke
	strokeWeight(20);
	line(0, 0, 800, 0); 
	stroke(16, 0, 255); //blue stroke 
	line(0, 0, 0, 800); 
	stroke(243, 243, 21); //neon yellow stroke
	line(500, 800, 500, 0);
	strokeWeight(2.5);
	stroke(60, 60, 80); //dark grey
	line (0, 82.7, 500, 82.7); //line that prevents handle from passing
}
	
//circles 
function drawCircles () {
	strokeWeight (10);
	stroke (255, 0, 0);
	noFill() ;
   	ellipse (250, 400, 150, 150); //big circle in middle
	ellipse (250, -50, 250, 250); //big half circle at top
	ellipse (250, 850, 250, 250); //big half circle at bottom
	line (0, 400, 175, 400); // first line through the middle
	line (325, 400, 500, 400); // second line through the middle
}
	
//net
function drawNet () {
	strokeWeight(5);
	stroke(255, 0 ,0); // red
	line (190, 10, 310, 10); //horizontal net
	line (190, 10, 190, 20); //right post
	line (310, 10, 310, 20); //left post
	
	/*//puck collion with post
		if ((puckX > 187.5) && (puckX < 192.5) && (puckY <= 37.5)) {
			speedX = -speedX;
			speedY = -speedY;
		}
		
		if ((bpuckX > 187.5) && (bpuckX < 192.5) && (bpuckY < 37.5)) {
			bspeedX = -bspeedX;
			bspeedY = -bspeedY;
		}
		
		if ((puckX > 307.5) && (puckX < 312.5) && (puckY < 37.5)) {
			speedX = -speedX;
			speedY = -speedY;
		}
		
		if ((bpuckX > 307.5) && (bpuckX < 312.5) && (bpuckY < 37.5)) {
			bspeedX = -bspeedX;
			bspeedY = -bspeedY;
		}*/
		
}

//score
function drawScore () {
	noStroke ();
	textSize (30);
	fill(255, 255, 255);
	text("score: " + score, 35, 55); 
	//pucks get one point
	if ((puckX >= 185 && puckX <= 315) && (puckY == 15)) { //if puck goes in net
			score += 1;
			puckX = 250; //spawns puck at centre
			puckY = 400;
			speedY = 0.5;
			speedX = random (7.5,15);
	}
		
	if ((bpuckX >= 185 && bpuckX <= 315) && (bpuckY == 15)) { //if puck goes in net
			score += 1;
			bpuckX = 250; //spawns puck at centre
			bpuckY = 400;
			bspeedY = 0.5;
			speedX = random (7.5,15);
	}		
}

//pucks
function drawPucks () {
	//white puck
	noStroke ();
	fill (255, 255, 255); //white
    	ellipse (puckX, puckY, 30, 30);
	//movement
	puckX = puckX + speedX;
	puckY = puckY + speedY;
	
	//blue puck
	fill (91, 246, 255); //baby blue
	ellipse (bpuckX, bpuckY, 30, 30);
	//movement
	bpuckX = bpuckX + bspeedX;
	bpuckY = bpuckY + bspeedY;
	
	//collisions
	
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
		
		//white puck collision with handle
		var wx = (puckX-X);
		var wy = (puckY-Y);
		if ((abs(wx)<32.5) && (abs(wy)<32.5)) {
			if (wx < 0) {
				speedX = random (-5, -4);
				puckX = puckX - 18;
			} else {
				speedX = random (4, 5);
				puckX = puckX + 18; 
			}
			if (wy < 0) {
				speedY = random (-5, -4);
				puckY = puckY - 18;
			} else {
				speedY = random (4, 5);
				puckY = puckY + 18;
			}	
		}
		
		//blue puck collision with handle
		var bx = (bpuckX-X);
		var by = (bpuckY-Y);
		if ((abs(bx)<32.5) && (abs(by)<32.5)) {
			if (bx < 0) {
				bspeedX = random (-5, -4);
				bpuckX = bpuckX - 18;
			} else {
				bspeedX = random (4, 5);
				bpuckX = bpuckX + 18; 
			}
			if (by < 0) {
				bspeedY = random (-5, -4);
				bpuckY = bpuckY - 18;
			} else {
				bspeedY = random (4, 5);
				bpuckY = bpuckY + 18;
			}	
		}	
}

//handle
function drawHandle () {
	fill (0, 0, 0); // black
	stroke (0, 0, 255); //blue
	strokeWeight (10);
	ellipse (X, Y, 35, 35); //circle
}

//play game
function playGame() {
	//status 1
		
	//board
	drawBoard ();
	
	// pause game
	if (keyIsDown(80)) { //if p is pressed return to starting screen
		status = 2;
	}
	
	//handle boundaries
	X = mouseX;
	if (X < 35) {
		X = 35;
	}
	if (X > 465) {
		X = 465;
	}
	
	Y = mouseY;
	//handle boundaries
	if (Y < 105) {
		Y = 105;
	}
	if (Y > 765) {
		Y = 765;
	}
	
		
	//puck fall out = game over
	/*UNSTAR THIS IF RESTART BUTTON STILL DOESN'T WORK AND DELETE THE CODE UNDER THIS AFTER
	if ((puckY > 765) && (bpuckY > 765)) {
		statusRestart ();
	}*/
	
	if (puckY > 765) {
		statusRestart ();
	}
	if (bpuckY > 765) {
		statusRestart ();
	}
}

//restart screen 
function statusRestart () {
	//status 2
	fill (0, 0, 0); //black bg
	rect (0, 0, 500, 800); //rectangle used to cover board
	textSize (140);
	fill (33, 237, 80); //green
	text ("GAME", 100, 200);
	text ("OVER", 115, 330);
	textSize (20);
	fill (212, 55, 239); // pink
	text ("You just took an L... It's time to BOUNCE BACK!", 78, 400);
	fill (30, 108, 234); //blue
	textSize (100);
	text ("score: " + score, 100, 500);
	fill (255, 45, 49); //red
	rect (165, 545, 200, 70);
	textSize (50);
	fill (0, 0, 0);
	text ("Restart", 185, 600);

	//restart button
	if ((mouseIsPressed) && (mouseY < 615) && (mouseY > 545) && (mouseX > 165) && (mouseX <365)) { //if button is pressed, play game and pucks start at 100, 100 and resets score
		status = 1;
		puckY = 100;
		bpuckY = 100;
		score = 0;
	}
}

function pauseGame () {
	//pause screen
	textSize(124);
	fill (0, 255, 0); //green
	text ("GAME", 110, 250);
	text ("PAUSED", 60, 370);
	fill (33, 237, 80); //green
	rect (155, 645, 200, 70); //button to start game
	fill (255, 255, 255);
	textSize (50);
	text ("Resume", 165, 700); 
	fill (30, 108, 234); //blue
	textSize (70);
	text ("score: " + score, 140, 500);
	textSize (50);
	fill (255, 255, 255); //white
	
	if ((mouseIsPressed) && (mouseY < 715) && (mouseY > 645) && (mouseX > 165) && (mouseX <365)) { //if statement to start game
		status = 1;
	} //if mouse is pressed, resume game

}
	
