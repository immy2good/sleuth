/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 7315287
CaseNum: 802-2-27409801-7315287

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in winner from the deck and store it in the hand array.

- Write a function called build_winning_hand and call it from setup.
- The function should take each card in winner and search for a match in deck.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 4 and 59.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [ { suit: 'Spades', v: 'A'} , { suit: 'Spades', v: '2'} , { suit: 'Spades', v: '3'} , { suit: 'Spades', v: '4'} , { suit: 'Spades', v: '5'} , { suit: 'Spades', v: '6'} , { suit: 'Spades', v: '7'} , { suit: 'Spades', v: '8'} , { suit: 'Spades', v: '9'} , { suit: 'Spades', v: '10'} , { suit: 'Spades', v: 'J'} , { suit: 'Spades', v: 'Q'} , { suit: 'Spades', v: 'K'} , { suit: 'Clubs', v: 'A'} , { suit: 'Clubs', v: '2'} , { suit: 'Clubs', v: '3'} , { suit: 'Clubs', v: '4'} , { suit: 'Clubs', v: '5'} , { suit: 'Clubs', v: '6'} , { suit: 'Clubs', v: '7'} , { suit: 'Clubs', v: '8'} , { suit: 'Clubs', v: '9'} , { suit: 'Clubs', v: '10'} , { suit: 'Clubs', v: 'J'} , { suit: 'Clubs', v: 'Q'} , { suit: 'Clubs', v: 'K'} , { suit: 'Hearts', v: 'A'} , { suit: 'Hearts', v: '2'} , { suit: 'Hearts', v: '3'} , { suit: 'Hearts', v: '4'} , { suit: 'Hearts', v: '5'} , { suit: 'Hearts', v: '6'} , { suit: 'Hearts', v: '7'} , { suit: 'Hearts', v: '8'} , { suit: 'Hearts', v: '9'} , { suit: 'Hearts', v: '10'} , { suit: 'Hearts', v: 'J'} , { suit: 'Hearts', v: 'Q'} , { suit: 'Hearts', v: 'K'} , { suit: 'Diamonds', v: 'A'} , { suit: 'Diamonds', v: '2'} , { suit: 'Diamonds', v: '3'} , { suit: 'Diamonds', v: '4'} , { suit: 'Diamonds', v: '5'} , { suit: 'Diamonds', v: '6'} , { suit: 'Diamonds', v: '7'} , { suit: 'Diamonds', v: '8'} , { suit: 'Diamonds', v: '9'} , { suit: 'Diamonds', v: '10'} , { suit: 'Diamonds', v: 'J'} , { suit: 'Diamonds', v: 'Q'} , { suit: 'Diamonds', v: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var winner = [ { type: 'Clubs', value: 'K'} , { type: 'Hearts', value: 'Q'} , { type: 'Diamonds', value: 'J'} , { type: 'Clubs', value: 'J'} , { type: 'Spades', value: '10'}  ];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	let shuffle_Seed = shuffleSeed(); // Generate the shuffle seed
	shuffleDeck(shuffle_Seed);
	//call your build_winning_hand function here
	build_winning_hand ()

}
// - Write a function called build_winning_hand and call it from setup.
// - The function should take each card in winner and search for a match in deck.
// - Matching cards should be added to the hand array
// - You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.





//write your build_winning_hand function here
function build_winning_hand () {
	//  let array1 = [];
	//  noLoop()
	for (var i = 0 ; i < winner.length ;i ++) {
		for (var j = 0; j < deck.length; j++) {
			if (winner[i].type == deck[j].suit && winner[i].value == deck[j].v) {
				hand.push(deck[j]);
				break;
			}
			
			
		}
		console.log(hand)
	}
}
	
// - You also need to write a shuffleSeed() function. 
// - This needs to return an array of 52 random integers between 4 and 59.
// - Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
// - Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

//write your shuffleSeed() function here.
function shuffleSeed() {
	let array1 = []; // Declare an empty array

	// Generate 52 random integers between 2 and 65
	for (var i = 0; i < 52; i++) {
		array1.push(round(random(4, 59))); // Use round to ensure integers in the correct range (2 to 65)
	}

	// console.log(array1);
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
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.v == values[j] && card.suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
