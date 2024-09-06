/*
Officer: 7315287
CaseNum: 601-2-16403868-7315287

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkRed stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Navy stroke triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

var's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 40 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- beginShape(), endShape(), vertex()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;
var possibleMatches = [];

//Sightings of Casey Fry.
var CriminalLog = [ 
  { positionX : 639, positionY : 288},
  { positionX : 681, positionY : 286},
  { positionX : 712, positionY : 293},
  { positionX : 756, positionY : 310},
  { positionX : 715, positionY : 368},
  { positionX : 701, positionY : 425},
  { positionX : 753, positionY : 436},
  { positionX : 815, positionY : 468},
  { positionX : 795, positionY : 506},
  { positionX : 788, positionY : 497},
  { positionX : 781, positionY : 486},
  { positionX : 768, positionY : 489},
  { positionX : 750, positionY : 500},
  { positionX : 732, positionY : 506},
  { positionX : 714, positionY : 514},
  { positionX : 695, positionY : 531},
  { positionX : 693, positionY : 552},
  { positionX : 654, positionY : 523},
  { positionX : 624, positionY : 500},
  { positionX : 594, positionY : 484},
  { positionX : 555, positionY : 474} 
];

//Recent crime records.
var KillingRecorded = [ 
  { coord_x : 409, coord_y : 446, fatality_ : 'DARBY MYRLE'},
  { coord_x : 443, coord_y : 419, fatality_ : 'LARRAINE PEGORD'},
  { coord_x : 465, coord_y : 548, fatality_ : 'JULIANA ADVERSANE'},
  { coord_x : 709, coord_y : 552, fatality_ : 'DRUSILLA WARMAN'},
  { coord_x : 695, coord_y : 421, fatality_ : 'HANG NIEMELA'},
  { coord_x : 652, coord_y : 268, fatality_ : 'RANDEE CROME'},
  { coord_x : 641, coord_y : 306, fatality_ : 'JESSIA PORTOS'},
  { coord_x : 119, coord_y : 344, fatality_ : 'JACQUELINE DURANTS'},
  { coord_x : 114, coord_y : 359, fatality_ : 'PIERRE DORCEY'},
  { coord_x : 90, coord_y : 490, fatality_ : 'NICOLE ASHELY'},
  { coord_x : 76, coord_y : 516, fatality_ : 'LOUISE ZETLAND'},
  { coord_x : 615, coord_y : 741, fatality_ : 'LAKESHA SYMMES'},
  { coord_x : 349, coord_y : 796, fatality_ : 'SUMMER CASIMERE'},
  { coord_x : 456, coord_y : 770, fatality_ : 'DEEDEE PHINNEY'} 
];

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();
  image(countyMap, 0, 0);

  // DarkRed stroke for sightings
  stroke(139, 0, 0);
  beginShape();
  for (var i = 0; i < CriminalLog.length; i++) {
    vertex(CriminalLog[i].positionX, CriminalLog[i].positionY);
  }
  endShape(POINTS);

  // Navy stroke for recent crimes
  stroke(0, 0, 128);
  for (var i = 0; i < KillingRecorded.length; i++) {
    var x = KillingRecorded[i].coord_x;
    var y = KillingRecorded[i].coord_y;
    triangle(x, y - 5, x - 5, y + 5, x + 5, y + 5); // Adjusted triangle to center
  }

  // Check for matches where distance is less than 40 pixels
  for (let i = 0; i < CriminalLog.length; i++) {
    for (let j = 0; j < KillingRecorded.length; j++) {
      let cx = CriminalLog[i].positionX;
      let cy = CriminalLog[i].positionY;
      let kx = KillingRecorded[j].coord_x;
      let ky = KillingRecorded[j].coord_y;
      let d = dist(cx, cy, kx, ky);

      // If the distance is less than 40, it's a potential match
      if (d < 40) {
        possibleMatches.push({
          crime: { x: kx, y: ky, victimName: KillingRecorded[j].fatality_ },
          suspect: { x: cx, y: cy }
        });
      }
    }
  }

  // Code to draw the matches (if any)
  for (var i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

    noStroke();
    fill(127);
    text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
  }
}
