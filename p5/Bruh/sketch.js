function setup() {
  createCanvas(6969, 6969);
}
background (0, 0, 0);
draw = function() {
    if (mouseIsPressed) {
    noStroke ();
    fill (mouseY, 0, 240);
    ellipse(mouseX, mouseY, 15, 30);
}    
}
