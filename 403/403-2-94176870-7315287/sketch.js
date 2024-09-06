/*

Officer: 7315287
CaseNum: 403-2-94176870-7315287

Case 403 - Cornered - stage 3

We have Shiffman cornered at City Narrows and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside City Narrows

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of City Narrows.
Draw a Tomato rectangle covering City Narrows for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    // let distance = dist(mouseX, mouseY, 2615,230)
     if ((mouseX >= 2541&& mouseX <2688 )&& (mouseY >=160 && mouseY <300)   )
     {
      fill(255,99,71); 
     rect(2540, 160, 2688-2540, 300-160)
  }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);

    // a helpful mouse coordinate pointer
    fill(255,0,0);
    noStroke(3);
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

