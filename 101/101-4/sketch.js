/*

Officer: 7315287
CaseNum: 101-3-40623487-7315287

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Goldenrod filled rectangle with a Teal outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dark Magenta filled
rectangle with a Yellow Green outline around him.

Identify the man reading the newspaper by drawing a Dark Turquoise filled rectangle
with a Cyan outline around him.

Identify the woman with the dog by drawing a Navy filled rectangle with a
Indigo outline around her. Make sure you include the dog too.

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
	// noFill();
}

function draw()
{
	image(img,0,0);
	//Write your code below here ...
	fill(184,134,11);
	stroke(0,128,128);
	rect(30, 105, 228-30, 520-105);
	fill(139,0,139);
	stroke(154,205,50)
	rect(533, 310, 922-533, 845-310);
	fill(0,206,209);
	stroke(0,255,255)
	rect(1335, 150, 1512-1335, 504-150);
	
	fill(0,0,128);
	stroke(75,0,130)
	rect(1586, 67, 1761-1586, 440-67);




	//A helpful mouse pointer
	push();
		fill(255,0,0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
