/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 7315287
CaseNum: 802-1-26404587-7315287

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called shuffle_seed.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 2 and 65.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call shuffle_seed in setup.
- Call Shuffle deck using the return value from shuffle_seed as the argument.

*/

var cardDeck = [ { suit: 'Spades', value: 'A'} , { suit: 'Spades', value: '2'} , { suit: 'Spades', value: '3'} , { suit: 'Spades', value: '4'} , { suit: 'Spades', value: '5'} , { suit: 'Spades', value: '6'} , { suit: 'Spades', value: '7'} , { suit: 'Spades', value: '8'} , { suit: 'Spades', value: '9'} , { suit: 'Spades', value: '10'} , { suit: 'Spades', value: 'J'} , { suit: 'Spades', value: 'Q'} , { suit: 'Spades', value: 'K'} , { suit: 'Clubs', value: 'A'} , { suit: 'Clubs', value: '2'} , { suit: 'Clubs', value: '3'} , { suit: 'Clubs', value: '4'} , { suit: 'Clubs', value: '5'} , { suit: 'Clubs', value: '6'} , { suit: 'Clubs', value: '7'} , { suit: 'Clubs', value: '8'} , { suit: 'Clubs', value: '9'} , { suit: 'Clubs', value: '10'} , { suit: 'Clubs', value: 'J'} , { suit: 'Clubs', value: 'Q'} , { suit: 'Clubs', value: 'K'} , { suit: 'Hearts', value: 'A'} , { suit: 'Hearts', value: '2'} , { suit: 'Hearts', value: '3'} , { suit: 'Hearts', value: '4'} , { suit: 'Hearts', value: '5'} , { suit: 'Hearts', value: '6'} , { suit: 'Hearts', value: '7'} , { suit: 'Hearts', value: '8'} , { suit: 'Hearts', value: '9'} , { suit: 'Hearts', value: '10'} , { suit: 'Hearts', value: 'J'} , { suit: 'Hearts', value: 'Q'} , { suit: 'Hearts', value: 'K'} , { suit: 'Diamonds', value: 'A'} , { suit: 'Diamonds', value: '2'} , { suit: 'Diamonds', value: '3'} , { suit: 'Diamonds', value: '4'} , { suit: 'Diamonds', value: '5'} , { suit: 'Diamonds', value: '6'} , { suit: 'Diamonds', value: '7'} , { suit: 'Diamonds', value: '8'} , { suit: 'Diamonds', value: '9'} , { suit: 'Diamonds', value: '10'} , { suit: 'Diamonds', value: 'J'} , { suit: 'Diamonds', value: 'Q'} , { suit: 'Diamonds', value: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	// Call shuffle_seed and pass the result to shuffleDeck
	let shuffleSeed = shuffle_seed(); // Generate the shuffle seed
	shuffleDeck(shuffleSeed); // Pass the shuffle seed to the shuffling function
}

// Write your shuffle_seed function here
function shuffle_seed() {
	let array1 = []; // Declare an empty array

	// Generate 52 random integers between 2 and 65
	for (var i = 0; i < 52; i++) {
		array1.push(round(random(2, 65))); // Use round to ensure integers in the correct range (2 to 65)
	}

	console.log(array1);
	return array1; // Return the filled array
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < cardDeck.length; j++)
	   {
		  var tempCard = cardDeck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          cardDeck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (cardDeck[i].marked)
		{
			drawCard(cardDeck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(cardDeck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.value == values[j] && card.suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
