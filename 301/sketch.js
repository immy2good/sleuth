/*
The case of the Python Syndicate
Stage 1

Officer: 7315287
CaseNum: 301-0-65159742-7315287

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var bones_karpinski_img;
var robbie_kray_img;
var countess_hamilton_img;
var ada_lovelace_img;
var anna_karpinski_img;
var rocky_kray_img;



//declare your new variables below
var robbie_kray_x_location = 408;
var robbie_kray_y_location = 40;
var bones_karpinski_x_location = 115;
var bones_karpinski_y_location = 40;
var countess_hamilton_x_location = 701;
var countess_hamilton_y_location = 40;
var ada_lovelace_x_location = 115;
var ada_lovelace_y_location = 309;
var anna_karpinski_x_location = 408;
var anna_karpinski_y_location = 309;
var rocky_kray_x_location = 701;
var rocky_kray_y_location = 309;





function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_img = loadImage("karpinskiDog.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	ada_lovelace_img = loadImage("ada.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(robbie_kray_img, robbie_kray_x_location, robbie_kray_y_location);

	image(bones_karpinski_img, bones_karpinski_x_location, bones_karpinski_y_location);
	image(countess_hamilton_img, countess_hamilton_x_location, countess_hamilton_y_location);
	image(ada_lovelace_img, ada_lovelace_x_location, ada_lovelace_y_location);
	image(anna_karpinski_img, anna_karpinski_x_location, anna_karpinski_y_location);
	image(rocky_kray_img, rocky_kray_x_location, rocky_kray_y_location);

}