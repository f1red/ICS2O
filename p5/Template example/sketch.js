//variable positions
var blueX = 100;
var blueY = 100;
var orangeX = 300;
var orangeY = 300;
//speed
var blueSpeedY = 3;
var blueSpeedX = 3;
var orangeSpeedY = 3;
var orangeSpeedX = 3;

function setup() {
  createCanvas(400, 400);
}

draw = function() {
    background (0, 0, 0);
    // blue ball
    fill (0, 64, 255);
    ellipse (blueX, blueY, 20, 20);
    if (blueX >= 390) {
        blueSpeedX = -blueSpeedX;
    }
    if (blueX <= 10) {
        blueSpeedX = -blueSpeedX;
    }
    if (blueY >= 390) {
        blueSpeedY = -blueSpeedY;
    }
    if (blueY <= 10) {
        blueSpeedY = -blueSpeedY;
    }
    blueX = blueX + blueSpeedX;
    blueY = blueY + blueSpeedY;
    
    // orange ball
    fill(255, 81, 0);
    ellipse (orangeX, orangeY, 20, 20);
    orangeX = orangeX + orangeSpeedX;
    orangeY = orangeY + orangeSpeedY;
    if (orangeX >= 390) {
        orangeSpeedX = -orangeSpeedX;
    }
    if (orangeX <= 10) {
        orangeSpeedX = -orangeSpeedX;
    }
    if (orangeY >= 390) {
        orangeSpeedY = -orangeSpeedY;
    }
    if (orangeY <= 10) {
        orangeSpeedY = -orangeSpeedY;
    }
    //collision
    if (abs(blueX-orangeX) <= 20) {
        if (abs(blueY-orangeY) <= 20) {
            orangeSpeedY = -round (random(1,7));
            orangeSpeedX = -round (random(1,7));
            blueSpeedX = -round (random(1,7));
            blueSpeedY = -round (random(1,7));
        }
    }
    if (abs(orangeX-blueX) <= 20) {
        if (abs(orangeY-blueY) <= 20) {
            orangeSpeedY = -round (random(1,7));
            orangeSpeedX = -round (random(1,7));
            blueSpeedX = -round (random(1,7));
            blueSpeedY = -round (random(1,7));
        }
    }

}
mouseClicked = function () {
    blueX = mouseX;
    blueY = mouseY;
    };
