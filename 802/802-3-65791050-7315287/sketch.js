/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 7315287
CaseNum: 802-3-65791050-7315287

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 2 and 53.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cutPoint object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deckCut and call it from setup.
- This should search for card matching cutPoint inside playingCards.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the playingCards array in the deck_upto_cut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var playingCards = [ { type: 'Spades', number: 'A'} , { type: 'Spades', number: '2'} , { type: 'Spades', number: '3'} , { type: 'Spades', number: '4'} , { type: 'Spades', number: '5'} , { type: 'Spades', number: '6'} , { type: 'Spades', number: '7'} , { type: 'Spades', number: '8'} , { type: 'Spades', number: '9'} , { type: 'Spades', number: '10'} , { type: 'Spades', number: 'J'} , { type: 'Spades', number: 'Q'} , { type: 'Spades', number: 'K'} , { type: 'Clubs', number: 'A'} , { type: 'Clubs', number: '2'} , { type: 'Clubs', number: '3'} , { type: 'Clubs', number: '4'} , { type: 'Clubs', number: '5'} , { type: 'Clubs', number: '6'} , { type: 'Clubs', number: '7'} , { type: 'Clubs', number: '8'} , { type: 'Clubs', number: '9'} , { type: 'Clubs', number: '10'} , { type: 'Clubs', number: 'J'} , { type: 'Clubs', number: 'Q'} , { type: 'Clubs', number: 'K'} , { type: 'Hearts', number: 'A'} , { type: 'Hearts', number: '2'} , { type: 'Hearts', number: '3'} , { type: 'Hearts', number: '4'} , { type: 'Hearts', number: '5'} , { type: 'Hearts', number: '6'} , { type: 'Hearts', number: '7'} , { type: 'Hearts', number: '8'} , { type: 'Hearts', number: '9'} , { type: 'Hearts', number: '10'} , { type: 'Hearts', number: 'J'} , { type: 'Hearts', number: 'Q'} , { type: 'Hearts', number: 'K'} , { type: 'Diamonds', number: 'A'} , { type: 'Diamonds', number: '2'} , { type: 'Diamonds', number: '3'} , { type: 'Diamonds', number: '4'} , { type: 'Diamonds', number: '5'} , { type: 'Diamonds', number: '6'} , { type: 'Diamonds', number: '7'} , { type: 'Diamonds', number: '8'} , { type: 'Diamonds', number: '9'} , { type: 'Diamonds', number: '10'} , { type: 'Diamonds', number: 'J'} , { type: 'Diamonds', number: 'Q'} , { type: 'Diamonds', number: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cutPoint = { suit: 'Diamonds', v: 'J'} ;
var deck_upto_cut = [];

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

	//call your deckCut function here
	deckCut();
	
}

//write your deckCut function here

function deckCut() {
	for (var i = 0; i < playingCards.length; i++) {
		// Check if the card matches the cutPoint
		if (playingCards[i].type == cutPoint.suit && playingCards[i].number == cutPoint.v) {
			// Splice the array from the cut point and store it in deck_upto_cut
			deck_upto_cut = playingCards.splice(i, playingCards.length - i);
			break;  // Stop searching after finding the card
		}
	}

	// Reverse the deck_upto_cut array manually
	let reversedDeck = [];
	for (var j = deck_upto_cut.length - 1; j >= 0; j--) {
		reversedDeck.push(deck_upto_cut[j]);
	}
	deck_upto_cut = reversedDeck;
}

//write your shuffleSeed() function here.
// - First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 2 and 53.

function shuffleSeed() {
	let array1 = []; // Declare an empty array

	// Generate 52 random integers between 2 and 65
	for (var i = 0; i < 52; i++) {
		array1.push(round(random(2, 53))); // Use round to ensure integers in the correct range (2 to 65)
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
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
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
		if(i < deck_upto_cut.length)
		{
			drawCard(deck_upto_cut[i], 880 + i * 18, 750);
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
			if (card.number == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
