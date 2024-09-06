/*

Officer: 7315287
CaseNum: 701-3-78418986-7315287

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from brad silveira.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspectTraits function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They wore red glasses. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. They seemed to be between the age of 34 and 58 years old. The person I saw was female. I remember they had a sword tattoo. They were wearing a green jacket. They brobably weigh between 71 and 90 kg. They were carrying a orange tote bag. It was very dark and I could barely see, It was so scary! It's hard to say. They were fairly tall, I think between a height of 148 and 185 cm. I hope I never have to go through that again. 

*/

var suspectsArray = [
	{ 
		"name": "LOUISE ASHELY",
		"glasses": "red",
		"item": "red necktie",
		"gender": "female",
		"accessory": "orange tote bag",
		"weight": 73,
		"height": 152,
		"age": 44
	},
	{ 
		"name": "JACQUELINE WARMAN",
		"glasses": "thin metallic",
		"item": "fur vest",
		"gender": "male",
		"accessory": "big black envelope",
		"weight": 71,
		"height": 168,
		"age": 31
	},
	{ 
		"name": "LIANNE OORIN",
		"glasses": "very thick",
		"item": "dotted necktie",
		"gender": "female",
		"accessory": "red backpack",
		"weight": 79,
		"height": 157,
		"age": 40
	},
	{ 
		"name": "LAKESHA JENI",
		"glasses": "dark brown",
		"item": "orange socks",
		"gender": "male",
		"accessory": "orange plastic bag",
		"weight": 92,
		"height": 177,
		"age": 59
	},
	{ 
		"name": "JAUNITA DAVISWOOD",
		"glasses": "very thin",
		"item": "net weave shirt",
		"gender": "male",
		"accessory": "brown paper bag",
		"weight": 72,
		"height": 175,
		"age": 21
	},
	{ 
		"name": "MALINDA DURANTS",
		"glasses": "black",
		"item": "purple hat",
		"gender": "male",
		"accessory": "laptop bag",
		"weight": 71,
		"height": 195,
		"age": 46
	},
	{ 
		"name": "TAMICA CROME",
		"glasses": "white",
		"item": "pair of leather trousers",
		"gender": "female",
		"accessory": "metal briefcase",
		"weight": 81,
		"height": 163,
		"age": 43
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

// Declare both your functions here

// Declare both your functions here

function checkSuspectTraits(suspectObj) {
	let matchCount = 0;
  
	if (suspectObj.glasses === "red") {
	  matchCount++;
	}
	if (suspectObj.item === "red necktie") {
	  matchCount++;
	}
	if (suspectObj.gender === "female") {
	  matchCount++;
	}
	if (suspectObj.accessory === "orange tote bag") {
	  matchCount++;
	}
	if (suspectObj.age >= 34 && suspectObj.age <= 58) {
	  matchCount++;
	}
	if (suspectObj.weight >= 71 && suspectObj.weight <= 90) {
	  matchCount++;
	}
	if (suspectObj.height >= 148 && suspectObj.height <= 185) {
	  matchCount++;
	}
  
	return matchCount;
  }
  
  function findGuilty() {
	let maxMatches = 0;
	let guiltySuspect = {};
  
	for (let i = 0; i < suspectsArray.length; i++) {
	  let matches = checkSuspectTraits(suspectsArray[i]);
	  if (matches > maxMatches) {
		maxMatches = matches;
		guiltySuspect = suspectsArray[i];
	  }
	}
  
	return guiltySuspect;
  }
  


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(findGuilty().name + " is guilty!", 60, 80);
}
