	var drawColor;

	function setup() {
		createCanvas(1080, 1080);
		background (0, 0, 0);
		drawColor = color (255, 255, 255);
	}

	function draw() {
		//brush
		if (mouseIsPressed) {
				noStroke ();
			fill(drawColor);
			ellipse (mouseX, mouseY, 25, 25);
		}
		
		//red
		fill(255, 0, 0);
		rect (0, 0, 50, 50);
		if ((mouseIsPressed) && (mouseY < 50)) {
			if (mouseX < 50) {
				drawColor = color(255, 0, 0);
			}
		}
		
		// blue
		fill(0, 0, 255);
		rect (0, 50, 50, 50);
		if ((mouseIsPressed) && (50 < mouseY) && (mouseY < 100 )) {
			if (mouseX < 50) {
				drawColor = color(0, 0, 255);
			}
		}
		
		//green
		fill(0, 255, 0);
		rect (0, 100, 50, 50);
		if ((mouseIsPressed) && (100 < mouseY) && (mouseY< 150)) {
			if (mouseX < 50) {
				drawColor = color(0, 255, 0);
			}
		}
	   
	   //white 
	   fill (255, 255, 255);
	   rect (0, 150, 50, 50);
	   if ((mouseIsPressed) && (150 < mouseY) && (mouseY< 200)) {
			if (mouseX < 50) {
				drawColor = color(255, 255, 255);
			}
		}
		
		//yellow 
	   fill (255, 255, 0);
	   rect (0, 200, 50, 50);
	   if ((mouseIsPressed) && (200 < mouseY) && (mouseY< 250)) {
			if (mouseX < 50) {
				drawColor = color(255, 255, 0);
			}
		}
		
		//pink
	   fill (255, 0, 255);
	   rect (0, 250, 50, 50);
	   if ((mouseIsPressed) && (250 < mouseY) && (mouseY< 300)) {
			if (mouseX < 50) {
				drawColor = color(255, 0, 255);
			}
		}
		
		//teal
	   fill (0, 255, 255);
	   rect (0, 300, 50, 50);
	   if ((mouseIsPressed) && (300 < mouseY) && (mouseY< 350)) {
			if (mouseX < 50) {
				drawColor = color(0, 255, 255);
			}
		}
		
		//black
	   fill (0, 0, 0);
	   rect (0, 350, 50, 50);
	   if ((mouseIsPressed) && (350 < mouseY) && (mouseY< 400)) {
			if (mouseX < 50) {
				drawColor = color(0, 0, 0);
			}
		}
		
  
    
	}



