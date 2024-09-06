/*
Officer: 7315287
CaseNum: 601-1-72297386-7315287

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Chocolate fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Tomato stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var MurdererData = {
	pos_x: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	pos_y: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var CrimesceneLog = [ 
  { pointX : 403, pointY : 401},
  { pointX : 402, pointY : 360},
  { pointX : 427, pointY : 403},
  { pointX : 646, pointY : 284},
  { pointX : 639, pointY : 264},
  { pointX : 830, pointY : 434},
  { pointX : 809, pointY : 443},
  { pointX : 844, pointY : 496},
  { pointX : 802, pointY : 350},
  { pointX : 683, pointY : 413},
  { pointX : 552, pointY : 464},
  { pointX : 629, pointY : 498},
  { pointX : 712, pointY : 562},
  { pointX : 783, pointY : 603},
  { pointX : 415, pointY : 225},
  { pointX : 561, pointY : 282},
  { pointX : 562, pointY : 392},
  { pointX : 751, pointY : 283},
  { pointX : 680, pointY : 359},
  { pointX : 626, pointY : 436},
  { pointX : 701, pointY : 455},
  { pointX : 838, pointY : 565},
  { pointX : 322, pointY : 508},
  { pointX : 468, pointY : 556},
  { pointX : 625, pointY : 737} 
];


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

	//add your code below here



}

//We are not using the draw function this time
