/*

Officer: 7315287
CaseNum: 101-3-10089713-7315287

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Coral filled rectangle with a Light Sea Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dark Red filled
rectangle with a Dark Violet outline around him.

Identify the man reading the newspaper by drawing a Midnight Blue filled rectangle
with a Blue Violet outline around him.

Identify the woman with the dog by drawing a Lawn Green filled rectangle with a
Dark Red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(255,127,80);
	stroke(32,178,170);
	rect(140, 269, 389-140, 786-269);
	fill(25,25,112);
	stroke(138,43,226);
	rect(950, 362, 1135-950, 730-362);
	fill(124,252,0 );	
	stroke(139,0,0);
	rect(476, 250, 765-476, 882-250);
	fill(139,0,0);
	stroke(148,0,211);
	rect(1407,469, 1604-1407, 736-469)



	//A helpful mouse pointer
	push();
		fill();
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
