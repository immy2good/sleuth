/*
402 - The case of the Why Gang ruby heist
Stage 4 - Fox

Officer: 7315287
CaseNum: 402-3-84954636-7315287

This final Why gang member Fox is the boss of the gang. Fox is particularly cunning and has hidden herself down this twisted network of alleys known as vice city. Head into vice city to find her but don’t get lost!

- Write if statements in the draw loop to set the direction for the detective
- Do this using the properties of the detective object, speedX and speedY. 
	- For example, to go north you would write the following code:
		det.speedX = 0; 
		det.speedY = -1;

- There are many ways to complete this task but you should only use the following commands and operators:
	if(){}
	else if
	>
	<
	&&

- You will need to make careful use of `else if` and the && operator for this task. Join all conditionals with "else if" and use at least one && operator for each condition.

*/

var currentRoad;
var direction;
var mapImage;
var overlayImage;

//the detective object
var det = {
	speedX: 0,
	speedY: 0,
	locationX: 73,
	locationY: 73,
	currentStreet: undefined,
	image: './det.png'
};

function preload()
{
	perp.image = loadImage(perp.image);
	det.image = loadImage(det.image);
	mapImage = loadImage("./map.png");
	overlayImage = loadImage("./overlay.png")
}

function setup()
{
	createCanvas(1024, 768);
}

function draw()
{

	///////////////////ADD YOUR CODE HERE///////////////////
	if (det.locationY == 73 && det.locationX ==73)
	{
		det.speedX = 0;
		det.speedY = 1;
	}

	if (det.locationY >310  && det.locationX > 60 )
		{
			det.speedX = 1;
			det.speedY = 0;
		}
	if (det.locationY >310  && det.locationX > 248 )
		{
			det.speedX = 0;
			det.speedY = -1;
		}
	if (det.locationY <147  && det.locationX > 248 )
		{
			det.speedX = 1;
			det.speedY = 0;
		}

	if (det.locationY >121  && det.locationX > 373 )
		{
			det.speedX = 0;
			det.speedY = 1;
		}

	if (det.locationY >558  && det.locationX > 370 )
		{
			det.speedX = 1;
			det.speedY = 0;
		}
		if (det.locationY <580  && det.locationX > 500 )
			{
				det.speedX = 0;
				det.speedY = -1;
			}

			if (det.locationY >245 && det.locationY <270  && det.locationX > 510 )
				{
					det.speedX = 1;
					det.speedY = 0;
				}

				if (det.locationY >250  && det.locationX > 690 )
					{
						det.speedX = 0;
						det.speedY = 1;
					}

					if (det.locationY >620  && det.locationX > 680 )
						{
							det.speedX = 2;
							det.speedY = 0;
						}
						if (det.locationY ,640  && det.locationX > 878 )
							{
								det.speedX = 0;
								det.speedY = -1;
							}
// 	if (det.locationY < 325 && det.locationX > 260)
// 	{
// 		det.speedX = 0;
// 		det.speedY = -1;
// 	}
// // 251 121
// 	if (det.locationY ==121 && det.locationX == 251)
// 		{
// 			det.speedX = 1;
// 			det.speedY = 0;
// 		}
// 	if (det.locationY < 147 && det.locationX > 260)
// 	{
// 		det.speedX = 0;
// 		det.speedY = 1;
// 	}

// 	if (det.locationY < 322 && det.locationX < 85)
// 		{
// 			det.speedX = 0;
// 			det.speedY = 1;
// 		}
	///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

	background(50);

	if (perp.caught === 0)
	{
		det.locationX += det.speedX*20;
		det.locationY += det.speedY*20;
	}

	//draw the images of the map perp and the detective
	image(mapImage, 0, 0);
	image(overlayImage, 0, 0);
	image(perp.image, perp.locationX - roadWidth, perp.locationY - roadWidth, roadWidth * 2, roadWidth * 2);

	push();
	translate(det.locationX, det.locationY);
	if (det.speedX != 0) rotate((det.speedX - 1.5) * PI);
	else if (det.speedY < 0) rotate(PI);
	image(det.image, -roadWidth, -roadWidth, roadWidth * 2, roadWidth * 2);
	pop();

	push();
	textAlign(CENTER);
	textSize(32);
	noStroke();

	//the perp has been caught
	if (dist(det.locationX, det.locationY, perp.locationX, perp.locationY) < roadWidth / 2)
	{
		//display message to the player
		fill(0, 220, 0);
		text("Just in the nick of time! \nYou caught " + perp.name, width / 2, height / 2);
		perp.caught = 1;
	}

	//not on any roads, therefore the game is lost.
	if (!getOnRoad() || (det.speedX == 0 && det.speedY == 0))
	{
		fill(255, 0, 0);
		text("You let " + perp.name + " get away.\n Better luck next time.", width / 2, height / 2);
		perp.caught = -1;
	}

	pop();

	hud();

	fill(255);
	text(`${mouseX},${mouseY}`, mouseX, mouseY);
}

function hud()
{
	push();
	fill(250);
	noStroke();
	textAlign(LEFT, TOP);
	text("detective location - x: " + det.locationX + " y: " + det.locationY, 5, 5);
	pop();
}

function getOnRoad()
{

	if (mapImage.get(det.locationX, det.locationY)[0] == bckgrndColour)
	{
		return false;
	}

	return true;
}

var roadWidth = 25;
var bckgrndColour = 50;
var perp = {
	caught: 0,
	name: 'Fox',
	image: './perp.png',
	locationX: 889,
	locationY: 135
};