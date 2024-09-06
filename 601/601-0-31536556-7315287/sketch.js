/*
Officer: 7315287
CaseNum: 601-0-31536556-7315287

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkTurquoise fill ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var Murderer_Record = {
	location_x: [127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456, 467, 483, 531, 547, 571, 589, 637],
	location_y: [175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230, 277, 267, 291, 278, 274, 318, 280],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{

	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();

	image(countyMap, 0,0);
	// loop()
	//add your code below here
	// stroke(1);
	fill(0,206,209);
	for (var i = 0; i < Murderer_Record.location_x.length; i++) {
		ellipse(Murderer_Record.location_x[i], Murderer_Record.location_y[i], 5);
	ellipse(Murderer_Record.location_x[i], Murderer_Record.location_y[i], 5)
	}

	// stroke(0, 206, 209)
	// beginShape() 

	// endShape()


	// for (var i =0 ; i < location_x.length; i++){
	// // 	for (var j = 0 ; j < location_y.length ; j++){
	//  		ellipse(location_x[i], location_y[i], 10, 10)
	// 		console.log(location_x[i]);
	// // 	}
	// }

	// console.log(Murderer_Record.location_y[2]);
	// fill('red');
	// stroke(2)
	// ellipse(Murderer_Record.location_x[i], Murderer_Record.location_y[i], 5)


}

//We are not using the draw function this time
