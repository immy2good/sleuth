/*

Officer: 7315287
CaseNum: 303-2-28319961-7315287

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make Hidden_Locker_Value0 equal to the value of mouseX
	- Use the 'min' function to prevent Hidden_Locker_Value0 from going above 11

	When any key is pressed:
	- Increment Hidden_Locker_Value1 by 1
	- Use the 'constrain' function to prevent Hidden_Locker_Value1 from falling below 3 and going above 13

	When the mouse button is pressed:
	- Make Hidden_Locker_Value2 equal to the value of mouseX
	- Use the 'min' function to prevent Hidden_Locker_Value2 from going above 9

	Whilst the mouse is moving:
	- Increment Hidden_Locker_Value3 by 2
	- Use the 'constrain' function to prevent Hidden_Locker_Value3 from falling below 3 and going above 16

	When the mouse button is released:
	- Make Hidden_Locker_Value4 equal to the value of mouseY
	- Use the 'constrain' function to prevent Hidden_Locker_Value4 from falling below 10 and going above 71



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Hidden_Locker_Value0;
var Hidden_Locker_Value1;
var Hidden_Locker_Value2;
var Hidden_Locker_Value3;
var Hidden_Locker_Value4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Hidden_Locker_Value0 = 0;
	Hidden_Locker_Value1 = 0;
	Hidden_Locker_Value2 = 0;
	Hidden_Locker_Value3 = 0;
	Hidden_Locker_Value4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
// Whilst the mouse is being dragged:
// 	- Make Hidden_Locker_Value0 equal to the value of mouseX
// 	- Use the 'min' function to prevent Hidden_Locker_Value0 from going above 11

// 	When any key is pressed:
// 	- Increment Hidden_Locker_Value1 by 1
// 	- Use the 'constrain' function to prevent Hidden_Locker_Value1 from falling below 3 and going above 13

// 	When the mouse button is pressed:
// 	- Make Hidden_Locker_Value2 equal to the value of mouseX
// 	- Use the 'min' function to prevent Hidden_Locker_Value2 from going above 9

// 	Whilst the mouse is moving:
// 	- Increment Hidden_Locker_Value3 by 2
// 	- Use the 'constrain' function to prevent Hidden_Locker_Value3 from falling below 3 and going above 16

// 	When the mouse button is released:
// 	- Make Hidden_Locker_Value4 equal to the value of mouseY
// 	- Use the 'constrain' function to prevent Hidden_Locker_Value4 from falling below 10 and going above 71



function mouseDragged() {
	// let m = (mouseX, )
	Hidden_Locker_Value0 = min(mouseX,  11);

}

function mouseMoved()
 {
	Hidden_Locker_Value3 += 2;
	Hidden_Locker_Value3 = constrain(Hidden_Locker_Value3, 3, 16);// 
	console.log("hidden Value 0 is : " + Hidden_Locker_Value0);
 }

function keyPressed() {
	Hidden_Locker_Value1 +=1;  
	Hidden_Locker_Value1 = constrain(Hidden_Locker_Value1, 3, 13)
}
	
function mousePressed () {
	Hidden_Locker_Value2 = min(mouseX, 9); 
}

function mouseReleased() {
	Hidden_Locker_Value4 = constrain(mouseY, 10, 71);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Hidden_Locker_Value0, 15);
	pop();

	push();
	translate(120,380);
	drawDial(140,Hidden_Locker_Value1, 18);
	pop();

	push();
	translate(280,170);
	drawDial(140,Hidden_Locker_Value2, 13);
	pop();

	push();
	translate(280,380);
	drawDial(140,Hidden_Locker_Value3, 21);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Hidden_Locker_Value4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
