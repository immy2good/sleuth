/*

Officer: 7315287
CaseNum: 701-2-19489143-7315287

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from linette oorin. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They had long white hair. The person I saw was female. They were fairly tall, I think between a height of 155 and 180 cm. They were carrying a orange plastic bag. They seemed to be between the age of 18 and 50 years old. They brobably weigh between 64 and 72 kg. They were wearing a red parka. It was very dark and I could barely see, I remember they had a anchor tattoo. It was very dark and I could barely see, That's all I can remember about them. 

*/

var allSuspects = [
	{ 
		"name": "LIANNE JACQUELIN",
		"tattoo": "jellyfish",
		"coat": "green army coat",
		"gender": "male",
		"accessory": "big black envelope",
		"age": 52,
		"height": 159,
		"weight": 70
	},
	{ 
		"name": "HANG SYMMES",
		"tattoo": "neck",
		"coat": "black overcoat",
		"gender": "female",
		"accessory": "plastic box",
		"age": 35,
		"height": 172,
		"weight": 73
	},
	{ 
		"name": "NICOLE NIEMELA",
		"tattoo": "sword",
		"coat": "blue overcoat",
		"gender": "female",
		"accessory": "glass bottle",
		"age": 24,
		"height": 173,
		"weight": 78
	},
	{ 
		"name": "MALINDA THAXTER",
		"tattoo": "dragon",
		"coat": "white fur coat",
		"gender": "female",
		"accessory": "metal briefcase",
		"age": 38,
		"height": 187,
		"weight": 73
	},
	{ 
		"name": "JULIANA COURTWOOD",
		"tattoo": "dark black",
		"coat": "green jacket",
		"gender": "male",
		"accessory": "laptop bag",
		"age": 47,
		"height": 167,
		"weight": 72
	},
	{ 
		"name": "MAJORIE PORTOS",
		"tattoo": "big arrow",
		"coat": "yellow poncho",
		"gender": "male",
		"accessory": "brown paper bag",
		"age": 41,
		"height": 166,
		"weight": 58
	},
	{ 
		"name": "LESLEY DORCEY",
		"tattoo": "anchor",
		"coat": "red parka",
		"gender": "female",
		"accessory": "orange plastic bag",
		"age": 28,
		"height": 170,
		"weight": 66
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here

function testSuspect(suspectObj) {
	let matchCount = 0;
  
	if (suspectObj.hair === "long white") {
	  matchCount++;
	}

	if (suspectObj.gender === "female") {
	
		matchCount++;
	}
	if (suspectObj.height >= 155 && suspectObj.height <= 180) {
	  matchCount++;
	}
	if (suspectObj.accessory === "orange plastic bag") {
	  matchCount++;
	}
	if (suspectObj.age >= 18 && suspectObj.age <= 50) {
	
		matchCount++;
	}
	if (suspectObj.weight >= 64 && suspectObj.weight <= 72) {
	  matchCount++;
	}
	if (suspectObj.coat === "red parka") {
	
		matchCount++;
	}
	if (suspectObj.tattoo === "anchor") {
	  matchCount++;
	}
  
	return matchCount;
  }
  

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    let matchingProperties = testSuspect(allSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + allSuspects[i].name, 60, 60 + i * 20);
  }
}
