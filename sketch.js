function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill("rgba(235, 188, 0, 1)");
    ellipse(200,200,220,220)
    fill("rgba(0,0,0,1)");
    ellipse(150,170,20,40)
    fill("rgba(0,0,0,1)");
    ellipse(250,170,20,40)
    fill("rgba(0,0,0,1)");
    //noFill();
    arc(200, 250, 50, 50, TWO_PI, PI); // de 180 até 360


}