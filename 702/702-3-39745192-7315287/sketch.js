/*

Officer: 7315287
CaseNum: 702-3-39745192-7315287

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a blue car with a licence_plate of DS0WK3.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detective_carObject and the cars in
CarObjects_Data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	/*
	This function should do the following: 
	 - increment detective_carObject's dist_amnt property by its speed_val property 
	 - add a random amount between -0.04 and 0.04 to detective_carObject's rumble_amount property
	 - use the constrain function to constrain detective_carObject's rumble_amount property to values between 0.05 and 0.99
	 - call the driveEngine function passing detective_carObject as an argument
	*/

	detective_carObject.dist_amnt += detective_carObject.speed_val;

	// Add a random amount between -0.04 and 0.04 to detective_carObject's rumble_amount property
	detective_carObject.rumble_amount += random(-0.04, 0.04);

	// Constrain rumble_amount between 0.05 and 0.99
	detective_carObject.rumble_amount = constrain(detective_carObject.rumble_amount, 0.05, 0.99);

	// Call the driveEngine function passing detective_carObject as an argument
	driveEngine(detective_carObject);
}


function swapLanes(target_car)
{
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Pos_A and Lane_Pos_B to effect the change.
	 - finally you should return target_car at the end of the function.
	 hint: You will need to modify the coordinate_x property of target_car.
	*/
	target_car.coordinate_x = (target_car.coordinate_x === Lane_Pos_A) ? Lane_Pos_B : Lane_Pos_A;

	// Return the target_car at the end of the function
	return target_car;
}


function searchVehicleIsAhead( Car_obj_A, Car_obj_B )
{
	/*
	This function should do the following: 
	 - determine if Car_obj_A is in the same lane and less than 200px behind Car_obj_B.
	 - do this by comparing the two cars' dist_amnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
	if (Car_obj_A.coordinate_x === Car_obj_B.coordinate_x && Car_obj_A.dist_amnt < Car_obj_B.dist_amnt && (Car_obj_B.dist_amnt - Car_obj_A.dist_amnt) < 200) {
		return true;
	}
	return false;
}


function checkCarIsAtSide()
{
	/*
	This function should do the following: 
	 - traverse CarObjects_Data and determine if any of the cars are parallel with detective_carObject.
	 - if a car is found to be parallel to detective_carObject then return that car object.
	 - cars are considered parallel if the absolute difference between their dist_amnt properties is less than 25 px and they have non-matching coordinate_x properties	*/

	 for (var i = 0; i < CarObjects_Data.length; i++) {
		var car = CarObjects_Data[i];
		// Check if the car is parallel and in different lanes
		if (abs(car.dist_amnt - detective_carObject.dist_amnt) < 25 && car.coordinate_x !== detective_carObject.coordinate_x) {
			return car; // Return the car object if it is parallel
		}
	}
	return false; // Return false if no parallel car is found
}


function checkSuspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to detective_carObject to see if they match the licence_plate property in the suspect description.
	 - it does this by calling checkCarIsAtSide.
	 - if a positive result is returned then the licence_plate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
	var car = checkCarIsAtSide();
	if (car && car.licence_plate === 'DS0WK3') {
		suspect = car; // Assign the suspect car to the global variable suspect
	}
	


}


function pursueSuspect()
{
	/*
	This function should do the following: 
	 - only operate if the tailing_suspect property of detective_carObject is true.
	 - scale the speed_val property of detective_carObject by a factor of 1.001.
	 - use the min function to make sure that detective_carObject's speed_val property does not exceed 6.
	 - it should traverse CarObjects_Data calling searchVehicleIsAhead for each car to detect any cars in front of detective_carObject.
	 - if a positive result is returned it should check to see if the licence_plate property of that car matches that of suspect.
	 - for a match, apprehendSuspect should be called, otherwise call swapLanes.
	*/
	if (detective_carObject.tailing_suspect) {
		// Scale the speed_val of detective_carObject
		detective_carObject.speed_val = min(detective_carObject.speed_val * 1.001, 6);

		// Traverse CarObjects_Data to detect any vehicles ahead
		for (var i = 0; i < CarObjects_Data.length; i++) {
			if (searchVehicleIsAhead(detective_carObject, CarObjects_Data[i])) {
				if (CarObjects_Data[i].licence_plate === suspect.licence_plate) {
					// Apprehend the suspect if a match is found
					apprehendSuspect(suspect);
				} else {
					// Otherwise, swap lanes
					swapLanes(detective_carObject);
				}
			}
		}
	}
}


function apprehendSuspect(vehicle)
{
	/*
	This function should do the following: 
	 - set the isApprehended property of vehicle to true.
	 - set the isApprehending_suspect property of detective_carObject to true.
	 - set the speed_val properties of both vehicles to zero.
	*/
	vehicle.isApprehended = true;

	// Set the isApprehending_suspect property of detective_carObject to true
	detective_carObject.isApprehending_suspect = true;

	// Set the speed_val properties of both vehicles to zero
	detective_carObject.speed_val = 0;
	vehicle.speed_val = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_carObject;

var roadWidth;
var roadLeftEdge;
var Lane_Pos_A;
var Lane_Pos_B;
var carImages = {};
var suspect;

var CarObjects_Data = [
{ coordinate_x: 500, coordinate_y: 0, dist_amnt: -200, vehicle_type: 'blueCar', licence_plate: '5X85YH', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 200, vehicle_type: 'whiteCar', licence_plate: 'OF24DQ', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 600, vehicle_type: 'greenCar', licence_plate: 'NDLYSF', speed_val: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amnt: 1000, vehicle_type: 'greenCar', licence_plate: '3H2K9I', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 1400, vehicle_type: 'greenCar', licence_plate: 'ZN16LI', speed_val: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amnt: 1800, vehicle_type: 'greenCar', licence_plate: '0WZA9R', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 2200, vehicle_type: 'greenCar', licence_plate: '4NNKV2', speed_val: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amnt: 2600, vehicle_type: 'whiteCar', licence_plate: 'IHCXGR', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 3000, vehicle_type: 'blueCar', licence_plate: 'DS0WK3', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 3400, vehicle_type: 'greenCar', licence_plate: 'AQNCTM', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 3800, vehicle_type: 'whiteCar', licence_plate: 'HE9U59', speed_val: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amnt: 4200, vehicle_type: 'blueCar', licence_plate: 'TUFVN8', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 4600, vehicle_type: 'greenCar', licence_plate: 'SM6N7Q', speed_val: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amnt: 5000, vehicle_type: 'redCar', licence_plate: 'A5MOQL', speed_val: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amnt: 5400, vehicle_type: 'whiteCar', licence_plate: 'QB5495', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 5800, vehicle_type: 'redCar', licence_plate: 'BHJAGY', speed_val: 2, exhaust: [  ]} , { coordinate_x: 300, coordinate_y: 0, dist_amnt: 6200, vehicle_type: 'whiteCar', licence_plate: 'E6FYIY', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 6600, vehicle_type: 'redCar', licence_plate: 'Q4KVGW', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 7000, vehicle_type: 'blueCar', licence_plate: 'DD15EP', speed_val: 2, exhaust: [  ]} , { coordinate_x: 500, coordinate_y: 0, dist_amnt: 7400, vehicle_type: 'greenCar', licence_plate: 'UV3KPN', speed_val: 2, exhaust: [  ]} 
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
	Lane_Pos_A = 300;
	Lane_Pos_B = 500;

	detective_carObject = 
	{
		coordinate_x: roadLeftEdge + roadWidth/4,
		coordinate_y: 550,
		dist_amnt: 0,
		speed_val: 3,
		rumble_amount: 0,
		vehicle_type: 'detective',
		licence_plate: '5L3UTH',
		isApprehending_suspect: false,
		tailing_suspect: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(suspect)
	{
		if(suspect.isApprehended)
		{
			fill(255);

			text("suspect isApprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!detective_carObject.tailing_suspect&& !detective_carObject.isApprehending_suspect)
	{
		moveCar();
		for(var i = 0; i < CarObjects_Data.length; i++)
		{
var b2b = searchVehicleIsAhead(detective_carObject, CarObjects_Data[i]);
			if(b2b)swapLanes(detective_carObject);
		}
		checkSuspect();
		if(suspect)detective_carObject.tailing_suspect = true;
	}
	else if(!detective_carObject.isApprehending_suspect)
	{
		pursueSuspect();
		moveCar();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(suspect)
	{
		if(!suspect.isApprehended)
		{
			suspect.speed_val = 5;
			for(var i = 0; i < CarObjects_Data.length; i++)
			{
				var b2b = searchVehicleIsAhead(suspect, CarObjects_Data[i]);
				if(b2b)
				{
					if(b2b.licence_plate != suspect.licence_plate)
					{
						swapLanes(suspect);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarObjects_Data.length; i++)
	{
		CarObjects_Data[i].dist_amnt += CarObjects_Data[i].speed_val;
		CarObjects_Data[i].coordinate_y = detective_carObject.coordinate_y - CarObjects_Data[i].dist_amnt + detective_carObject.dist_amnt;

		if(suspect)
		{
			if(suspect.isApprehended)
			{
				if(CarObjects_Data[i].coordinate_x==detective_carObject.coordinate_x)
				{
					if(CarObjects_Data[i].dist_amnt<detective_carObject.dist_amnt)
					{
						if(CarObjects_Data[i].dist_amnt-detective_carObject.dist_amnt < 200)
						{
							swapLanes(CarObjects_Data[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (detective_carObject.dist_amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detective_carObject.dist_amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(detective_carObject);
	image
	(
		carImages["detective"],
		detective_carObject.coordinate_x - carImages["detective"].width/2 + random(-detective_carObject.rumble_amount, detective_carObject.rumble_amount),
		detective_carObject.coordinate_y + random(-detective_carObject.rumble_amount, detective_carObject.rumble_amount)
	);

	//draw all other cars

	for(var i = 0; i < CarObjects_Data.length; i ++)
	{
		if(CarObjects_Data[i].coordinate_y < height && CarObjects_Data[i].coordinate_y > -height/2)
		{
			image(
			carImages[CarObjects_Data[i].vehicle_type],
			CarObjects_Data[i].coordinate_x - carImages[CarObjects_Data[i].vehicle_type].width/2,
			CarObjects_Data[i].coordinate_y
			);
			driveEngine(CarObjects_Data[i]);

			drawExhaust(CarObjects_Data[i]);
		}
	}

}

function driveEngine(car)
{

	car.exhaust.push({size: 2, x: car.coordinate_x, y: car.coordinate_y + carImages[car.vehicle_type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speed_val/3);
		if(car.vehicle_type != "detective")car.exhaust[i].y += (detective_carObject.speed_val - car.speed_val);
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
