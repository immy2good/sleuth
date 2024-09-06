/*

Officer: 7315287
CaseNum: 702-2-41195363-7315287

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a numberPlate of 15YP9B. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detectiveCar and the cars in
VehicleData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_car()
{
	/*
	This function should do the following: 
	 - increment detectiveCar's distanceTravelled property by its accelVal property 
	 - add a random amount between -0.04 and 0.04 to detectiveCar's vibrateValue property
	 - use the constrain function to constrain detectiveCar's vibrateValue property to values between 0.05 and 1.09
	 - call the cycle_motor function passing detectiveCar as an argument
	*/

	// detectiveCar.distanceTravelled +=detectiveCar.accelVal;
	// detectiveCar.vibrateValue += random(-0.04 ,0.04);
	// detectiveCar.vibrateValue = constrain(detectiveCar.vibrateValue, 0.05, 1.09);

	// cycle_motor(detectiveCar);

	detectiveCar.distanceTravelled += detectiveCar.accelVal;

	// Add a random amount between -0.04 and 0.04 to detectiveCar's vibrateValue property
	detectiveCar.vibrateValue += random(-0.04, 0.04);

	// Constrain vibrateValue between 0.05 and 1.09
	detectiveCar.vibrateValue = constrain(detectiveCar.vibrateValue, 0.05, 1.09);

	// Call the cycle_motor function passing detectiveCar as an argument
	cycle_motor(detectiveCar);
}


function switch_lanes(car_obj)
{
	/*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePositionA and LanePositionB to effect the change.
	 hint: You will need to modify the posX property of car_obj.
	*/

	// car_obj.posX = (car_obj.posX === LanePositionA) ? LanePositionB : LanePositionA;
	car_obj.posX = (car_obj.posX === LanePositionA) ? LanePositionB : LanePositionA;
}


function check_isInfront( vehicle )
{
	/*
	This function should do the following: 
	 - determine if vehicle is in the same lane and less than 200px behind any of the cars in VehicleData.
	 - do this by traversing VehicleData and comparing each car's distanceTravelled property to that of vehicle.
	 - use the numberPlate property of each car to ignore cars that match vehicle.
	 - if you find a car that matches these requirements then return the index representing the car's position in VehicleData. Otherwise return false.
	*/
	// for (var i = 0 ; i < VehicleData.length; i++) {
	// 	var car = VehicleData[i];
	// 	if (car.posX == vehicle.posX && car.distanceTravelled > vehicle.distanceTravelled && car.distanceTravelled - 200 && car.numberPlate !== vehicle.numberPlate)
	// 	{
	// 		return i;	 // return car index
	// 	}
	// }
	for (var i = 0; i < VehicleData.length; i++) {
		var car = VehicleData[i];
		// Check if the car is in the same lane, less than 200px ahead, and has a different numberPlate
		if (car.posX === vehicle.posX && car.distanceTravelled > vehicle.distanceTravelled &&
			car.distanceTravelled - vehicle.distanceTravelled < 200 && car.numberPlate !== vehicle.numberPlate) {
			return i; // Return the index of the car
		}
	}
	return false; // Return false if no car is ahead
}


function check_isAtSide( targetCar )
{
	/*
	This function should do the following: 
	 - determine if targetCar is parallel with detectiveCar.
	 - if targetCar is found to be parallel to detectiveCar then return targetCar.
	 - cars are considered parallel if the absolute difference between their distanceTravelled properties is less than 25 px and they have non-matching posX properties	*/

	//  for (var i = 0 ; i < VehicleData.length; i++) {
	// 	var car = VehicleData[i];
	// 	if (abs(car.distanceTravelled - detectiveCar.distanceTravelled) < 25 && car.posX != detectiveCar.posX) {

	// 		return car; 
	// 	}
		
	//  }
	//  return false; 
	// for (var i = 0; i < VehicleData.length; i++) {
	// 	var car = VehicleData[i];
	// 	// Cars are parallel if their distanceTravelled is within 25px and they are in different lanes
	// 	if (abs(car.distanceTravelled - detectiveCar.distanceTravelled) < 25 && car.posX !== detectiveCar.posX) {
	// 		return car;
	// 	}
	// }
	// return false;

	if (abs(targetCar.distanceTravelled - detectiveCar.distanceTravelled) < 25 && targetCar.posX !== detectiveCar.posX) {
		return targetCar; // Return the target car if it is parallel
	}
	return false; // Return false if no car is parallel
}


function spot_criminal()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to detectiveCar to see if they match the numberPlate property in the criminal description.
	 - it does this by traversing VehicleData and calling check_isAtSide for each car
.	 - if a positive result is returned then the numberPlate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
	// for (var i = 0 ; i < VehicleData.lenght ; i++) {
	// 	var car = check_isAtSide(VehicleData[i]);
	// 	if (car && car.numberPlate === '15YP9B') {
	// 	}
	// }
	// return false; 
	for (var i = 0; i < VehicleData.length; i++) {
		var car = check_isAtSide(VehicleData[i]);
		if (car && car.numberPlate === '15YP9B') {
			return car; // Return the criminal's car object if found
		}
	}
	return false; // Return false if no match is found
}



//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detectiveCar;

var roadWidth;
var roadLeftEdge;
var LanePositionA;
var LanePositionB;
var carImages = {};
var criminal;

var VehicleData = [
{ posX: 300, posY: 0, distanceTravelled: -200, carCategory: 'blueCar', numberPlate: 'A534Y6', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 200, carCategory: 'redCar', numberPlate: '5OD9L4', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 600, carCategory: 'whiteCar', numberPlate: 'H4KXOL', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 1000, carCategory: 'redCar', numberPlate: 'VA7A2L', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 1400, carCategory: 'whiteCar', numberPlate: 'IOG6MK', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 1800, carCategory: 'redCar', numberPlate: '2YLZS1', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 2200, carCategory: 'greenCar', numberPlate: 'KDRRVJ', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 2600, carCategory: 'greenCar', numberPlate: 'Y92TE1', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 3000, carCategory: 'blueCar', numberPlate: '15YP9B', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 3400, carCategory: 'greenCar', numberPlate: 'SMDZWF', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 3800, carCategory: 'blueCar', numberPlate: 'F9G0MO', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 4200, carCategory: 'greenCar', numberPlate: 'SXNS40', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 4600, carCategory: 'blueCar', numberPlate: 'JGZG8U', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 5000, carCategory: 'redCar', numberPlate: 'W2YSK1', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 5400, carCategory: 'blueCar', numberPlate: 'ZCJSOE', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 5800, carCategory: 'greenCar', numberPlate: '7YWU6C', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 6200, carCategory: 'redCar', numberPlate: '431NVM', accelVal: 2, exhaust: [  ]} , { posX: 500, posY: 0, distanceTravelled: 6600, carCategory: 'whiteCar', numberPlate: '27SAKQ', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 7000, carCategory: 'whiteCar', numberPlate: 'OIJU5J', accelVal: 2, exhaust: [  ]} , { posX: 300, posY: 0, distanceTravelled: 7400, carCategory: 'whiteCar', numberPlate: '79CM8H', accelVal: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePositionA = 300;
	LanePositionB = 500;

	detectiveCar = 
	{
		posX: roadLeftEdge + roadWidth/4,
		posY: 550,
		distanceTravelled: 0,
		accelVal: 3,
		vibrateValue: 0,
		carCategory: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(criminal)
	{
		fill(255);

		text("criminal found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	move_car();
	var b2b = check_isInfront( detectiveCar );
	if(b2b)switch_lanes(detectiveCar);
	var a = spot_criminal();
	if(a != false)criminal = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < VehicleData.length; i++)
	{
		VehicleData[i].distanceTravelled += VehicleData[i].accelVal;
		VehicleData[i].posY = detectiveCar.posY - VehicleData[i].distanceTravelled + detectiveCar.distanceTravelled;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (detectiveCar.distanceTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detectiveCar.distanceTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(detectiveCar);
	image
	(
		carImages["detective"],
		detectiveCar.posX - carImages["detective"].width/2 + random(-detectiveCar.vibrateValue, detectiveCar.vibrateValue),
		detectiveCar.posY + random(-detectiveCar.vibrateValue, detectiveCar.vibrateValue)
	);

	//draw all other cars

	for(var i = 0; i < VehicleData.length; i ++)
	{
		if(VehicleData[i].posY < height && VehicleData[i].posY > -height/2)
		{
			image(
			carImages[VehicleData[i].carCategory],
			VehicleData[i].posX - carImages[VehicleData[i].carCategory].width/2,
			VehicleData[i].posY
			);
			cycle_motor(VehicleData[i]);

			drawExhaust(VehicleData[i]);
		}
	}

}

function cycle_motor(car)
{

	car.exhaust.push({size: 2, x: car.posX, y: car.posY + carImages[car.carCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accelVal/3);
		if(car.carCategory != "detective")car.exhaust[i].y += (detectiveCar.accelVal - car.accelVal);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
