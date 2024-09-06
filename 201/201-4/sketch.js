/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 7315287
CaseNum: 201-3-81732861-7315287

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();

    // Add the vertices.
    vertex(385, 350);
    vertex(475, 287);
    vertex(476, 229);
    vertex(526, 185);
    vertex(648, 203);
    vertex(648, 132);
    vertex(680, 146);
    vertex(702,207);
    vertex(690, 246);
    vertex(661, 263);
    vertex(748, 380);

    vertex(807, 485);
    vertex(679, 569);
    vertex(530, 317);
    vertex(402, 384);
    vertex(371,370);
    vertex(385, 350);




    // vertex(687, 154);




  
    // Stop drawing the shape.
    endShape();


    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
