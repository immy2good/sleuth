/*
The case of the Python Syndicate
Stage 4

Officer: 7315287
CaseNum: 301-3-63803660-7315287

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var bonesKarpinskiImg;
var rockyKrayImg;
var robbieKrayImg;
var adaLovelaceImg;
var annaKarpinskiImg;
var countessHamiltonImg;

var robbieKrayObject;


//declare your new objects below


var bonesKarpinskiCoordinateX = 115;
var bonesKarpinskiCoordinateY = 40;
var rockyKrayCoordinateX = 408;
var rockyKrayCoordinateY = 40;
var adaLovelaceCoordinateX = 115;
var adaLovelaceCoordinateY = 309;
var annaKarpinskiCoordinateX = 408;
var annaKarpinskiCoordinateY = 309;
var countessHamiltonCoordinateX = 701;
var countessHamiltonCoordinateY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	adaLovelaceImg = loadImage("ada.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbieKrayObject = {
		x: 701,
		y: 40,
		image: robbieKrayImg
	};

	//define your new objects below

	bonesKarpinskiObject = {
		x: 115,
		y: 40,
		image: bonesKarpinskiImg
	};
	rockyKrayObject = {
		x: 408,
		y: 40,
		image: rockyKrayImg
	}

	adaLovelaceObject = {
		x: 115,
		y: 309,
		image: adaLovelaceImg
	}

	annaKarpinskiObject = {
		x: 408,
		y: 309,
		image: annaKarpinskiImg
	}

	countessHamiltonObject = {
		x: 701,
		y: 309,
		image: countessHamiltonImg
	}

}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);

	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);
	image(adaLovelaceObject.image, adaLovelaceObject.x, adaLovelaceObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(countessHamiltonObject.image, countessHamiltonObject.x, countessHamiltonObject.y);


}