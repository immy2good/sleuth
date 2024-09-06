/*

Officer: 7315287
CaseNum: 403-3-61197263-7315287

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Huffman Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 100 meters from Kay Twin's Hideout then alert local police by drawing a Maroon circle around it with a radius of 100 pixels.
- if Shiffman is in Wrong Side of the tracks then the neighbourhood watch must be notified by drawing a DarkViolet rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a LimeGreen rectangle covering the area between Berners-Lee Street, Reynolds Street, Huffman Street and Gosling Road.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
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
    //kay twin 186, 376 / maroon 128,0,0
    var outside = true; 
    let distKay = dist(mouseX, mouseY, 186,376)
    if (distKay < 100 ) {
      fill(128,0,0) ;
        ellipse(186, 376, 200);
        outside = false
      
    }

    if ((mouseX >= 630&& mouseX <=785 )&& (mouseY >=165 && mouseY <=265)   )
      {
       fill(148,0,211); 
      rect(630, 165, 785-630, 102);
      outside = false;
    }

    if (outside) {
      fill(50,205,50)
      rect(1215, 110, 1384-1215, 513-110)
    }


    

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255,0,0);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

