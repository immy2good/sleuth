/*

Officer: 7315287
CaseNum: 702-0-58564248-7315287

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of investigatorCar to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

// function DriveCar()
// {
// 	/*
// 	This function should do the following: 
// 	 - increment investigatorCar's distanceDriven property by its gasVal property 
// 	 - add a random amount between -0.07 and 0.07 to investigatorCar's engineRumbleValue property
// 	 - use the constrain function to constrain investigatorCar's engineRumbleValue property to values between 0.04 and 0.78
// 	 - call the RunMotor function passing investigatorCar as an argument
// 	*/
// }

function DriveCar()
{
	// Increment investigatorCar's distanceDriven property by its gasVal property
	investigatorCar.distanceDriven += investigatorCar.gasVal;

	// Add a random amount between -0.07 and 0.07 to investigatorCar's engineRumbleValue property
	investigatorCar.engineRumbleValue += random(-0.07, 0.07);

	// Constrain engineRumbleValue between 0.04 and 0.78
	investigatorCar.engineRumbleValue = constrain(investigatorCar.engineRumbleValue, 0.04, 0.78);

	// Call the RunMotor function passing investigatorCar as an argument
	RunMotor(investigatorCar);
}



//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorCar;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	investigatorCar = 
	{
		positionX: roadLeftEdge + roadWidth/4,
		positionY: 300,
		distanceDriven: 0,
		gasVal: 3,
		engineRumbleValue: 0,
		vehicleCategory: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	DriveCar();


	drawRoad();
	drawCars();
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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigatorCar.distanceDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigatorCar.distanceDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigatorCar);
	image
	(
		carImages["detective"],
		investigatorCar.positionX - carImages["detective"].width/2 + random(-investigatorCar.engineRumbleValue, investigatorCar.engineRumbleValue),
		investigatorCar.positionY + random(-investigatorCar.engineRumbleValue, investigatorCar.engineRumbleValue)
	);

}

function RunMotor(car)
{

	car.exhaust.push({size: 2, x: car.positionX, y: car.positionY + carImages[car.vehicleCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasVal/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
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
