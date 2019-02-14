function setup() {
    createCanvas(800, 600);
}
x = 150 
function draw() {
    background(220);
    fill("rgba(0, 122, 33, 1)");
    rect(50, 300, 200, 150);
    fill("rgba(57, 35, 35, 1)");
    rect(115, 450, 70, 300);
    fill("rgba(235, 188, 0, 1)");
    ellipse(125,320,20,20);
    ellipse(135,420,20,20);
    ellipse(185,370,20,20);
    ellipse(0,0,100,100);	
    fill("rgba(0, 0, 255, 1)");
    ellipse(x+50,0,x,100);
    x++

    //line(120, 450, 120, 600);
    //line(180, 450, 180, 600);


}