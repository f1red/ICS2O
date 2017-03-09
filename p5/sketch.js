function setup() {
  createCanvas(400, 400);
}

function draw() {
 background(97, 120, 212);

// The ground
fill (74, 235, 65);
rect(0, 300, 400, 100);  

// The sun
fill(229, 245, 5);
ellipse(80, 64, 100, 100);  

// The snowman
fill(255, 255, 255);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
}
