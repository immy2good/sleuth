/*
The case of the Python Syndicate
Stage 2


Officer: 7315287
CaseNum: 301-1-95750697-7315287

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Ada Lovelace

- The variables for Ada Lovelace have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Ada Lovelace
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Ada Lovelace variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Ada Lovelace 
- Do not add any additional commands

*/

var photoBoard;
var countess_hamilton_image;
var anna_karpinski_image;
var bones_karpinski_image;
var ada_lovelace_image;
var pawel_karpinski_image;
var rocky_kray_image;


var ada_lovelace_x_pos = 115;
var ada_lovelace_y_pos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_image = loadImage("countessHamilton.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	ada_lovelace_image = loadImage("ada.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(ada_lovelace_image, ada_lovelace_x_pos, ada_lovelace_y_pos);

	image(countess_hamilton_image, ada_lovelace_x_pos, ada_lovelace_y_pos-269);
	image(anna_karpinski_image, ada_lovelace_x_pos+293, ada_lovelace_y_pos-269);
	image(bones_karpinski_image, ada_lovelace_x_pos+293+293, ada_lovelace_y_pos-269);
	image(pawel_karpinski_image, ada_lovelace_x_pos+293, ada_lovelace_y_pos);
	image(rocky_kray_image, ada_lovelace_x_pos+293+293, ada_lovelace_y_pos);

}