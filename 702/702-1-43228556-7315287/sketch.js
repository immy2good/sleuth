/*

Officer: 7315287
CaseNum: 702-1-43228556-7315287

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Chase_VehicleObject and the cars in
vehicleObject_data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveCar() {
	// Increment Chase_VehicleObject's Kms_Travelled property by its Speed_Amt property
	Chase_VehicleObject.Kms_Travelled += Chase_VehicleObject.Speed_Amt;

	// Add a random amount between -0.05 and 0.05 to Chase_VehicleObject's EngineRumble_Amount property
	Chase_VehicleObject.EngineRumble_Amount += random(-0.05, 0.05);

	// Constrain EngineRumble_Amount between 0.01 and 1.14
	Chase_VehicleObject.EngineRumble_Amount = constrain(Chase_VehicleObject.EngineRumble_Amount, 0.01, 1.14);

	// Call the TurnoverEngine function passing Chase_VehicleObject as an argument
	TurnoverEngine(Chase_VehicleObject);
}

function MoveLanes(carObj) {
	// Toggle lane between laneCoordinate_a and laneCoordinate_b
	carObj.X_Pos = (carObj.X_Pos === laneCoordinate_a) ? laneCoordinate_b : laneCoordinate_a;
}

function CheckVehicleIsAhead(target_vehicle) {
	// Traverse vehicleObject_data and check for any vehicle ahead
	for (var i = 0; i < vehicleObject_data.length; i++) {
		var car = vehicleObject_data[i];
		// Check if the car is in the same lane and less than 200px ahead
		if (car.X_Pos === target_vehicle.X_Pos && car.Kms_Travelled > target_vehicle.Kms_Travelled && car.Kms_Travelled - target_vehicle.Kms_Travelled < 200) {
			return car; // Return the car object
		}
	}
	return false; // Return false if no car is ahead
}



//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Chase_VehicleObject;

var roadWidth;
var roadLeftEdge;
var laneCoordinate_a;
var laneCoordinate_b;
var carImages = {};

var vehicleObject_data = [
{ X_Pos: 300, Y_Pos: 0, Kms_Travelled: -200, Car_Category: 'redCar', Licence_Plate: '3JGQEU', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 200, Car_Category: 'whiteCar', Licence_Plate: '5BOC91', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Kms_Travelled: 600, Car_Category: 'redCar', Licence_Plate: '0PXI07', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 1000, Car_Category: 'whiteCar', Licence_Plate: 'XITO2D', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Kms_Travelled: 1400, Car_Category: 'whiteCar', Licence_Plate: 'DF6O9D', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 1800, Car_Category: 'whiteCar', Licence_Plate: 'VMQ0AM', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 2200, Car_Category: 'greenCar', Licence_Plate: 'NJ1T50', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 2600, Car_Category: 'greenCar', Licence_Plate: 'FNTAMA', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Kms_Travelled: 3000, Car_Category: 'blueCar', Licence_Plate: 'NDPVQK', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Kms_Travelled: 3400, Car_Category: 'blueCar', Licence_Plate: 'KFO8EB', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 3800, Car_Category: 'greenCar', Licence_Plate: 'I1I8EW', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 4200, Car_Category: 'blueCar', Licence_Plate: 'W1RY6H', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 4600, Car_Category: 'blueCar', Licence_Plate: 'SWP9T3', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 5000, Car_Category: 'blueCar', Licence_Plate: 'OSIKI9', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 5400, Car_Category: 'redCar', Licence_Plate: 'PVE1E5', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Kms_Travelled: 5800, Car_Category: 'whiteCar', Licence_Plate: 'MTTYPG', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 6200, Car_Category: 'whiteCar', Licence_Plate: 'MXDBYX', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 300, Y_Pos: 0, Kms_Travelled: 6600, Car_Category: 'redCar', Licence_Plate: '0ZR9QZ', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 7000, Car_Category: 'greenCar', Licence_Plate: 'TTWX2L', Speed_Amt: 2, exhaust: [  ]} , { X_Pos: 500, Y_Pos: 0, Kms_Travelled: 7400, Car_Category: 'redCar', Licence_Plate: '0VGY1F', Speed_Amt: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	laneCoordinate_a = 300;
	laneCoordinate_b = 500;

	Chase_VehicleObject = 
	{
		X_Pos: roadLeftEdge + roadWidth/4,
		Y_Pos: 550,
		Kms_Travelled: 0,
		Speed_Amt: 3,
		EngineRumble_Amount: 0,
		Car_Category: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	MoveCar();
	var b2b = CheckVehicleIsAhead( Chase_VehicleObject );
	if(b2b)MoveLanes(Chase_VehicleObject);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleObject_data.length; i++)
	{
		vehicleObject_data[i].Kms_Travelled += vehicleObject_data[i].Speed_Amt;
		vehicleObject_data[i].Y_Pos = Chase_VehicleObject.Y_Pos - vehicleObject_data[i].Kms_Travelled + Chase_VehicleObject.Kms_Travelled;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (Chase_VehicleObject.Kms_Travelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Chase_VehicleObject.Kms_Travelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Chase_VehicleObject);
	image
	(
		carImages["detective"],
		Chase_VehicleObject.X_Pos - carImages["detective"].width/2 + random(-Chase_VehicleObject.EngineRumble_Amount, Chase_VehicleObject.EngineRumble_Amount),
		Chase_VehicleObject.Y_Pos + random(-Chase_VehicleObject.EngineRumble_Amount, Chase_VehicleObject.EngineRumble_Amount)
	);

	//draw all other cars

	for(var i = 0; i < vehicleObject_data.length; i ++)
	{
		if(vehicleObject_data[i].Y_Pos < height && vehicleObject_data[i].Y_Pos > -height/2)
		{
			image(
			carImages[vehicleObject_data[i].Car_Category],
			vehicleObject_data[i].X_Pos - carImages[vehicleObject_data[i].Car_Category].width/2,
			vehicleObject_data[i].Y_Pos
			);
			TurnoverEngine(vehicleObject_data[i]);

			drawExhaust(vehicleObject_data[i]);
		}
	}

}

function TurnoverEngine(car)
{

	car.exhaust.push({size: 2, x: car.X_Pos, y: car.Y_Pos + carImages[car.Car_Category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Speed_Amt/3);
		if(car.Car_Category != "detective")car.exhaust[i].y += (Chase_VehicleObject.Speed_Amt - car.Speed_Amt);
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
