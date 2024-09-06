/*
Officer: 7315287
CaseNum: 601-3-49590063-7315287

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Cyan stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, LimeGreen fill rectangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 72 pixels of any of the crimes within no more than 2 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var CriminalLogbook_ptX = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68];
var CriminalLogbook_ptY = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461];
var CriminalLogbook_recordedDay = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24];


//Recent crime records.

var IncidentRecorded_Loc_X = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var IncidentRecorded_Loc_Y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var IncidentRecorded_day = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var IncidentRecorded_Murdered_Name = ['JACQUELINE DURANTS', 'LAKESHA SYMMES', 'DEEDEE PHINNEY', 'JESUS FORSLIN', 'LOUISE ZETLAND', 'JULIANA ADVERSANE', 'JENIFFER DEAUVILLE', 'MAJORIE JENI', 'HANG NIEMELA', 'JAUNITA JOYER', 'TU DAVISWOOD', 'LAVERNE JACQUELIN', 'LARRAINE PEGORD', 'MALINDA GOODBURY', 'SUMMER CASIMERE'];


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

	// Mark sightings with Cyan triangles
	stroke(0, 255, 255);
	for (var i = 0; i < CriminalLogbook_ptX.length; i++) {
		var x = CriminalLogbook_ptX[i];
		var y = CriminalLogbook_ptY[i];
		triangle(x, y - 3, x - 3, y + 3, x + 3, y + 3); // Adjusted to be smaller
	}

	// Mark crimes with LimeGreen rectangles
	fill(50, 205, 50);
	noStroke();
	for (var i = 0; i < IncidentRecorded_Loc_X.length; i++) {
		var x = IncidentRecorded_Loc_X[i];
		var y = IncidentRecorded_Loc_Y[i];
		rect(x, y, 6, 6); // Reduced size of rectangles
	}

	// Check for matches within 72 pixels and 2 days
	for (let i = 0; i < CriminalLogbook_ptX.length; i++) {
		for (let j = 0; j < IncidentRecorded_Loc_X.length; j++) {
			let cx = CriminalLogbook_ptX[i];
			let cy = CriminalLogbook_ptY[i];
			let kx = IncidentRecorded_Loc_X[j];
			let ky = IncidentRecorded_Loc_Y[j];
			let d = dist(cx, cy, kx, ky);
			let dayDifference = abs(CriminalLogbook_recordedDay[i] - IncidentRecorded_day[j]);

			if (d < 72 && dayDifference <= 2) {
				possibleMatches.push({
					crime: { x: kx, y: ky, victimName: IncidentRecorded_Murdered_Name[j] },
					suspect: { x: cx, y: cy }
				});
			}
		}
	}

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}



//We are not using the draw function this time
