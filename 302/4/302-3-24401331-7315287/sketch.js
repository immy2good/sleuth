/*
The case of the slippery Minsky brothers
Stage 4: Gates Memorial Art Museum

Officer: 7315287
CaseNum: 302-3-24401331-7315287

Darn it ! All three Minskys have broken out of the county jail. I told you they were slippery. Word has it that they are planning their biggest heist yet. Tonight they plan to steal multiple priceless artworks from the Gates Memorial Art Museum. I’ve assembled you a team. Head down to the Museum and stop them.

- Edit spotlight1 by adding x and y properties initialised to your location (NB. you're the detective). 
- Also add endx and endY properties initialised to one of the Minsky's location (NB. they're the burglars).
- Initialise the other two spotlights, creating all of the required properties. 
- Each spotlight should point to a different Minsky.
- Make each of the spotlights move perfectly from you towards their respective Minsky by incrementing/decrementing the x and y properties of the object using:

 "+=" or "+"
 "-=" or "-"

- If you get everything correct then the three spotlights will move from you to each of the Minskys and stop over them.

*/


//the variables for the spotlight objects
var spotlight1;
var spotlight2;
var spotlight3;
var endx;
var endY;

// other variables, you don't need to change these
var img, spotlight_image;


function preload()
{
	img = loadImage('scene.png');
	spotlight_image = loadImage('spotlight.png')
}

function setup()
{
	createCanvas(img.width, img.height);

	//complete the initialisation of the first spotlight
  	//with properties x, y, endx and endY
	spotlight1 = {
		x: 200, 
		y: 600,
		endx: 400,
		endY: 300,
		image: spotlight_image
	};

	spotlight2 = {
		x: 200, 
		y: 650,
		endx: 450,
		endY: 150,
		image: spotlight_image
	};

	spotlight3 = {
		x: 200, 
		y: 650,
		endx: 750,
		endY: 500,
		image: spotlight_image
	};


	//Initialize the second and third spotlights following the same pattern
	    //A helpful mouse pointer
	

}


function draw()
{
	image(img, 0, 0);

	// alter the properties x and y of the objects below to animate the spotlights
	spotlight1.x +=1;
	spotlight1.y -=2;
	spotlight2.x +=1;
	spotlight2.y -=2;
	spotlight3.x +=2;
	spotlight3.y -=0.5;


	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	var spotlights = [spotlight1, spotlight2, spotlight3];
	var spotlightSize = 300;

	blendMode(BLEND);
	background(30);

	for (var i = 0; i < spotlights.length; i++)
	{
		var spotlight = spotlights[i];
		//stop the spotlight if it's near enough to endx and endy
        if(spotlight)
        {
            //stop the spotlight if it goes off of the screen

			if(spotlight.x !== undefined){
            	spotlight.x = min(spotlight.x, 960);
				spotlight.x = max(spotlight.x, 0);
			}

			if(spotlight.y !== undefined){
            	spotlight.y = min(spotlight.y, 945);
            	spotlight.y = max(spotlight.y, 0);
			}


			if(spotlight.x !== undefined && spotlight.y !== undefined &&
			spotlight.endx !== undefined && spotlight.endY !== undefined
			){
				if (abs(spotlight.endx - spotlight.x) < 50
							&& abs(spotlight.endY - spotlight.y) < 50)
				{
					spotlight.x = spotlight.endx;
					spotlight.y = spotlight.endY;
				}
			}
      
			let _x = spotlight.x || 0;
			let _y = spotlight.y || 0;

            image(spotlight.image, _x-spotlightSize/2,
                    _y-spotlightSize/2, spotlightSize, spotlightSize);
        }
	}

	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
