/*
The case of the Python Syndicate
Stage 3


Officer: 7315287
CaseNum: 301-2-56903679-7315287

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil Karpinski has been declared and initialised
- Position each mugshot relative to Cecil Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Cecil Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Cecil Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var bones_karpinski_image;
var robbie_kray_image;
var countess_hamilton_image;
var cecil_karpinski_image;
var rocky_kray_image;
var pawel_karpinski_image;

var cecil_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecil_karpinski_obj = {
		x: 115,
		y: 309,
		image: cecil_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_obj.image, cecil_karpinski_obj.x, cecil_karpinski_obj.y);

	// image(bones_karpinski_image, 115, 40);
	image(bones_karpinski_image, cecil_karpinski_obj.x ,cecil_karpinski_obj.y-269);

	image(robbie_kray_image, cecil_karpinski_obj.x+293, cecil_karpinski_obj.y-269);
	image(countess_hamilton_image, cecil_karpinski_obj.x+293+293, cecil_karpinski_obj.y-269);
	image(rocky_kray_image, cecil_karpinski_obj.x+293, cecil_karpinski_obj.y);
	image(pawel_karpinski_image, cecil_karpinski_obj.x+293+293, cecil_karpinski_obj.y);

}