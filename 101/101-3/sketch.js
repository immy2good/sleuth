/*

Officer: 7315287
CaseNum: 101-2-12189322-7315287

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Light Sea Green filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Medium Purple filled
rectangle around him.

Identify the man in the striped top by drawing a Saddle Brown filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
	noFill()
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(32,178,170);
	rect(858,67,938-858,237-67)
	fill(147,112,219);
	rect(1263,127,1441-1263,314-127);
	fill(139,69,19)
	rect(267, 240, 435-267, 696-240);



	//A helpful mouse pointer
	push();
		fill(0);
		stroke(0);
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
