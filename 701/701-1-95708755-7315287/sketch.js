/*

Officer: 7315287
CaseNum: 701-1-95708755-7315287

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They were quite big, they probably weigh more than 65 Kg. The person I saw was female. Their expression seemed nerveous. I'll never forget their grey eyes. It was so scary! They had dark brown hair. It's so hard to remember right now. By the look of them they were younger than 49. That's all I know officer. 

*/

var allSuspects = [
	{ 
		"name": "DARBY MYRLE",
		"hair": "thin blond",
		"eyes": "pale",
		"gender": "male",
		"weight": 62,
		"age": 47
	},
	{ 
		"name": "TU NIEMELA",
		"hair": "short black",
		"eyes": "green",
		"gender": "male",
		"weight": 92,
		"age": 36
	},
	{ 
		"name": "JAUNITA SYMMES",
		"hair": "white",
		"eyes": "brown",
		"gender": "female",
		"weight": 78,
		"age": 21
	},
	{ 
		"name": "RANDEE GOODBURY",
		"hair": "dark brown",
		"eyes": "grey",
		"gender": "female",
		"weight": 71,
		"age": 43
	},
	{ 
		"name": "BRAD PHINNEY",
		"hair": "ginger",
		"eyes": "black",
		"gender": "male",
		"weight": 68,
		"age": 72
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
function matchProperties(suspectObj) {
	if (suspectObj.gender === "female" &&
		suspectObj.weight > 65 &&
		suspectObj.age < 49 &&
		suspectObj.eyes === "grey" &&
		suspectObj.hair === "dark brown") {
	  return true;
	}
	return false;
  }
  

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    if(matchProperties(allSuspects[i]) == true){
      fill(255,0,0);
      text(allSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(allSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
