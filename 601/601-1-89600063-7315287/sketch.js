/*
Officer: 7315287
CaseNum: 601-1-89600063-7315287

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Indigo stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Gold stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- triangle() NB. Draw each triangle with the point roughly at its center.

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var CriminalLogbook = [ 
  { Loc_X : 639, Loc_Y : 288},
  { Loc_X : 681, Loc_Y : 286},
  { Loc_X : 712, Loc_Y : 293},
  { Loc_X : 756, Loc_Y : 310},
  { Loc_X : 715, Loc_Y : 368},
  { Loc_X : 701, Loc_Y : 425},
  { Loc_X : 753, Loc_Y : 436},
  { Loc_X : 815, Loc_Y : 468},
  { Loc_X : 795, Loc_Y : 506},
  { Loc_X : 788, Loc_Y : 497},
  { Loc_X : 781, Loc_Y : 486},
  { Loc_X : 768, Loc_Y : 489},
  { Loc_X : 750, Loc_Y : 500},
  { Loc_X : 732, Loc_Y : 506},
  { Loc_X : 714, Loc_Y : 514},
  { Loc_X : 695, Loc_Y : 531},
  { Loc_X : 693, Loc_Y : 552},
  { Loc_X : 654, Loc_Y : 523},
  { Loc_X : 624, Loc_Y : 500},
  { Loc_X : 594, Loc_Y : 484},
  { Loc_X : 555, Loc_Y : 474} 
];


//Recent crime records.

var RobberyData_locX = [403, 402, 427, 646, 639, 830, 809, 844, 802, 683, 552, 629, 712, 783, 415, 561, 562, 751, 680, 626, 701, 838, 322, 468, 625];
var RobberyData_locY = [401, 360, 403, 284, 264, 434, 443, 496, 350, 413, 464, 498, 562, 603, 225, 282, 392, 283, 359, 436, 455, 565, 508, 556, 737];


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

  stroke(205,92,92);
   for (var i = 0; i < CriminalLogbook.length; i ++) {
    // stroke('red')
    // fill('red')
    triangle(CriminalLogbook[i].Loc_X, CriminalLogbook[i].Loc_Y, CriminalLogbook[i].Loc_X+10, CriminalLogbook[i].Loc_Y, CriminalLogbook[i].Loc_X+10, CriminalLogbook[i].Loc_Y-10 );    
    // ellipse(CriminalLogbook[i].Loc_X, CriminalLogbook[i].Loc_Y);
   }

   stroke(255,215,0);
   for (var i = 0; i < RobberyData_locX.length; i ++) {
    // stroke('red')
    ellipse(RobberyData_locX[i], RobberyData_locY[i], 5);
    console.log(RobberyData_locX[i], RobberyData_locY[i]);
       }
  //  triangle(CriminalLogbook[0].Loc_X[i], CriminalLogbook[0].Loc_Y[i], 10)
  //  triangle(x1, y1, x2, y2, x3, y3)
  // triangle(CriminalLogbook[0].Loc_X, CriminalLogbook[0].Loc_Y, CriminalLogbook[0].Loc_X, 200, 300, 50);


}

//We are not using the draw function this time
