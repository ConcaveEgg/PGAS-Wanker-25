// 3.2.4 mouseX and mouseY
let x = 0, y = 0;
function setup() {
    createCanvas(500, 400);
    background(205, 230, 242);
}
function draw() {
    noStroke();
    fill(255, 255, 255);
    circle(x, y, 50);

    x = mouseX;
    y = mouseY;
}


// 3.2.5 mouseButton
function setup() {
    createCanvas(500, 400);
    background(0, 0, 0);
}
function draw() {
    if (mouseButton == LEFT) {
        background(255, 0, 0);
    }
    if (mouseButton == CENTER) {
        background(0, 255, 0);
    }
    if (mouseButton == RIGHT) {
        background(0, 0, 255);
    }
}


// 3.2.6 Paint and Erase
let x = 0, y = 0;
let r = 255, g = 255, b = 255;

function setup() {
    createCanvas(500, 400);
    background(255, 192, 203);
    fill(255, 255, 255);
}
function draw() {
    noStroke();
    fill(r, g, b);
    circle(x, y, 50);

    if (mouseButton == LEFT) {
        r = 255, g = 192, b = 203;
    }

    if (mouseButton == RIGHT) {
        r = 255, g = 255, b = 255;
    }

    x = mouseX;
    y = mouseY;
}

// 3.3.2 keyIsPressed
function setup() {
    createCanvas(500, 400);
}
function draw() {
    noStroke();
    translate(width/2, height/2);

    if (keyIsPressed == true) {
        fill("peachpuff");
    } else {
        fill("red");
    }

    ellipse(0, 0, 80, 75);

    stroke(78, 38, 0);
    strokeWeight(5);
    line(-5, -50, 0, -25);

    noStroke();
    rotate(radians(-30));
    fill(39, 166, 21);
    ellipse(7, -33, 15, 25);
}


// 3.3.4 keyIsDown
let x = 0;
let y = 0;

function setup() {
    createCanvas(500, 400);
    background(205, 230, 242);
}
function draw() {
    background(205, 230, 242);

    noStroke();
    circle(x + 0, y + 200, 100);
    circle(x + 75, y + 200, 100);
    circle(x + 150, y + 200, 100);
    circle(x + 40, y + 200, 100);
    circle(x + 100, y + 200, 100);

    if(keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    if(keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }

    if(keyIsDown(DOWN_ARROW)) {
        y += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        y -=5;
    }
}


// 3.3.5 key
function setup() {
    createCanvas(500, 400);
    background(205, 230, 242);
    textSize(100);
}
function draw() {
    background(205, 230, 242);
    text(key, 200, 200);
}
