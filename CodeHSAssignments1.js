// 1.2.2 Create a Canvas
function setup() {
    createCanvas(500, 500);
    background("limegreen");
}
function draw() {}

// 1.2.4 Line
function setup() {
    createCanvas(500, 500);
    background("beige");
}
function draw() {
    line(100, 0, 500, 500);
    line(500, 0, 100, 500);
}

// 1.2.5 Rectangle
function setup() {
    createCanvas(500, 500);
}
function draw() {
    rect(0, 0, 275, 350);
    rect(275, 0, 225, 150);
    rect(275, 150, 225, 350);
    square(0, 350, 150);
    rect(150, 350, 125, 150);
}

// 1.2.6 Ellipse
function setup() {
    createCanvas(500, 500);
    background("beige");
}
function draw() {
    CSSNumericValue(300, 200, 400);
}

// 1.3.5 Background Color
function setup() {
    createCanvas(500, 500);
    background(12, 20, 69);
}
function draw() {
    beginShape();
    vertex(250, 200);
    bezierVertex(350, 200, 330, 300, 250, 300);
    bezierVertex(315, 285, 315, 215, 250, 200);
    endShape();
}

// 1.3.6 Fill
function setup() {
    createCanvas(500, 500);
    background(114, 130, 93);
}
function draw() {
    fill(134, 136, 135);
    ellipse(300, 275, 400, 400);

    line(400, 400, 400, 0);
    line(0, 400, 400, 400);
    line(400, 400, 500, 500);

    fill(235, 139, 22);
    beginShape();
    curveVertex(275, 280);
    curveVertex(275, 280);
    curveVertex(269, 310);
    curveVertex(251, 368);
    curveVertex(259, 425);
    curveVertex(296, 450);
    curveVertex(325, 380);
    curveVertex(295, 270);
    curveVertex(295, 270);
    endShape();

    fill(44, 95, 114);
    ellipse(350, 420, 125, 150);

    fill(68, 60, 21);
    ellipse(320, 275, 130, 110);

    fill(235, 139, 22);
    ellipse(250, 250, 130, 150);

    fill(159, 114, 119);
    bezier(230, 235, 250, 400, 285, 135, 340, 250);
}

// 1.3.7 Stroke
function setup() {
    createCanvas(500, 500);
    background(135, 206, 235);
}
function draw() {
    fill(255, 225, 100);
    ellipse(100, 100, 100);

    fill(225, 205, 120);
    rect(0, 450, 500, 50);

    fill(35, 117, 67);
    rect(415, 275, 30, 180, 15, 15, 3, 3);
    rect(385, 293, 25, 61, 12, 12, 0, 0);
    rect(385, 353, 31, 25, 0, 0, 0, 15);
    rect(450, 321, 25, 61, 12, 12, 0, 0);
    rect(444, 380, 31, 25, 0, 0, 15, 0);
}

// 1.4.3 Making Variables
let red = 100;
let green = 32;
let blue = 80;
function setup() {
    createCanvas(500, 400);
    background(red, green, blue);
}
function draw() {}

// 1.4.4 Reusing Variables
let x = 100;
let y = 200;
let diameter = 75;
function setup() {
    createCanvas(500, 400);
    background(220, 208, 225);
}
function draw() {
    circle(x, y, diameter);
    circle(x + 100, y, diameter);
    circle(x + 200, y, diameter);
    circle(x + 300, y, diameter);
}

// 1.4.5 Width and Height
let width = 500;
let height = 400;
function setup() {
    createCanvas(width, height);
    background(134, 206, 235);
}
function draw() {
    stroke(255, 255, 0);
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);

    stroke(255, 155, 15);
    line(0, 0, width, height);
    line(width, 0, 0, height);

    fill(255, 255, 0);
    circle(width/2, height/2, height/2);
}
