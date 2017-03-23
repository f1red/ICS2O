function setup() {
  createCanvas(400, 400);
}

function draw() {
var houseX = 143;
var houseY = 80;
var houseSizeW = 250;
var windowWidth = houseSizeW/4.73;
var houseSizeH = 300;
background (61, 11, 94);
strokeWeight (2);
fill (209, 88, 88);
rect (houseX, houseY, houseSizeW, houseSizeH); // house shape
fill(0, 0, 0);
triangle(houseX, houseY, houseX + houseSizeW, houseY, houseX + houseSizeW/2, houseY - houseSizeH/6); // roof
fill (255, 255, 255);
rect (houseX + houseSizeW/3.91, houseY + houseSizeH/1.51, houseSizeW/3.8, houseSizeH/3 ); // door
fill(72, 168, 242);
stroke (255 ,255, 255);
rect (houseX + houseSizeW/1.5, houseY + houseSizeH/3, windowWidth, houseSizeH/1.65); // big window
rect (houseX + houseSizeW/10, houseY + houseSizeH/12, houseSizeW/5, houseSizeH/6); // small window
rect (houseX + houseSizeW/3.2, houseY + houseSizeH/1.4, houseSizeW/6.25, houseSizeH/4); // door window
fill(255, 255, 255);
ellipse (10, 20, 83, 85); // moon

// second house 
var houseX = 12;
var houseY = 227;
var houseSizeW = 125;
var windowWidth = houseSizeW/4.73;
var houseSizeH = 152;
strokeWeight (2);
fill (209, 88, 88);
rect (houseX, houseY, houseSizeW, houseSizeH); // house shape
fill(0, 0, 0);
triangle(houseX, houseY, houseX + houseSizeW, houseY, houseX + houseSizeW/2, houseY - houseSizeH/6); // roof
fill (255, 255, 255);
rect (houseX + houseSizeW/3.91, houseY + houseSizeH/1.51, houseSizeW/3.8, houseSizeH/3 ); // door
fill(72, 168, 242);
stroke (255 ,255, 255);
rect (houseX + houseSizeW/1.5, houseY + houseSizeH/3, windowWidth, houseSizeH/1.65); // big window
rect (houseX + houseSizeW/10, houseY + houseSizeH/12, houseSizeW/5, houseSizeH/6); // small window
rect (houseX + houseSizeW/3.2, houseY + houseSizeH/1.4, houseSizeW/6.25, houseSizeH/4); // door window
fill(55, 186, 123);
ellipse (200, 430, 806, 113);
}
