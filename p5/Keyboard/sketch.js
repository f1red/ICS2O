
var X = 200;
var Y = 200;
var speedX = 0;
var speedY = 0;
function setup() {
  createCanvas(720, 720);
}

function draw() {
	noStroke ();
	background (233, 242, 179);
	//car
	//body
	fill (0, 72, 255);
	rect (X, Y, 100, 20);
	rect (X + 15, Y - 22, 70, 40);
	//wheels
	fill (0, 0, 0);
	ellipse (X + 25, Y + 21, 24, 24);
	ellipse (X + 75, Y + 21, 24, 24);
	
	//keyboard movements
	//right arrow
	if (keyIsDown(RIGHT_ARROW)) {
		X = X + speedX;
		speedX = speedX + 0.55;
	}
	//left arrow
	if (keyIsDown(LEFT_ARROW)) {
		X = X - speedX;
		speedX = speedX + 0.55;
	}
	//up arrow
	if (keyIsDown(UP_ARROW)) {
		Y = Y - speedY;
		speedY = speedY + 0.55;
	}
	//down arrow
	if (keyIsDown(DOWN_ARROW)) {
		Y = Y + speedY;
		speedY = speedY + 0.55;
	}

}

function keyReleased() {

	speedY = 0;
	speedX = 0;
	return false;
}
