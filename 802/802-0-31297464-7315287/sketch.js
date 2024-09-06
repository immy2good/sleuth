/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 7315287
CaseNum: 802-0-31297464-7315287

Don your best threads we're off to the Monte Carlo Casino ! We're tailing a gang of high rolling statisticians who run Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are.

They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

- Write a function called  pickCards.
- Inside the function, use a for loop to set the marked property of the cards array elements to true when the suit is Hearts or the value is 2
- Call the function from within setup

*/

var cards = [ { marked: false, type: 'Spades', value: 'A'} , { marked: false, type: 'Spades', value: '2'} , { marked: false, type: 'Spades', value: '3'} , { marked: false, type: 'Spades', value: '4'} , { marked: false, type: 'Spades', value: '5'} , { marked: false, type: 'Spades', value: '6'} , { marked: false, type: 'Spades', value: '7'} , { marked: false, type: 'Spades', value: '8'} , { marked: false, type: 'Spades', value: '9'} , { marked: false, type: 'Spades', value: '10'} , { marked: false, type: 'Spades', value: 'J'} , { marked: false, type: 'Spades', value: 'Q'} , { marked: false, type: 'Spades', value: 'K'} , { marked: false, type: 'Clubs', value: 'A'} , { marked: false, type: 'Clubs', value: '2'} , { marked: false, type: 'Clubs', value: '3'} , { marked: false, type: 'Clubs', value: '4'} , { marked: false, type: 'Clubs', value: '5'} , { marked: false, type: 'Clubs', value: '6'} , { marked: false, type: 'Clubs', value: '7'} , { marked: false, type: 'Clubs', value: '8'} , { marked: false, type: 'Clubs', value: '9'} , { marked: false, type: 'Clubs', value: '10'} , { marked: false, type: 'Clubs', value: 'J'} , { marked: false, type: 'Clubs', value: 'Q'} , { marked: false, type: 'Clubs', value: 'K'} , { marked: false, type: 'Hearts', value: 'A'} , { marked: false, type: 'Hearts', value: '2'} , { marked: false, type: 'Hearts', value: '3'} , { marked: false, type: 'Hearts', value: '4'} , { marked: false, type: 'Hearts', value: '5'} , { marked: false, type: 'Hearts', value: '6'} , { marked: false, type: 'Hearts', value: '7'} , { marked: false, type: 'Hearts', value: '8'} , { marked: false, type: 'Hearts', value: '9'} , { marked: false, type: 'Hearts', value: '10'} , { marked: false, type: 'Hearts', value: 'J'} , { marked: false, type: 'Hearts', value: 'Q'} , { marked: false, type: 'Hearts', value: 'K'} , { marked: false, type: 'Diamonds', value: 'A'} , { marked: false, type: 'Diamonds', value: '2'} , { marked: false, type: 'Diamonds', value: '3'} , { marked: false, type: 'Diamonds', value: '4'} , { marked: false, type: 'Diamonds', value: '5'} , { marked: false, type: 'Diamonds', value: '6'} , { marked: false, type: 'Diamonds', value: '7'} , { marked: false, type: 'Diamonds', value: '8'} , { marked: false, type: 'Diamonds', value: '9'} , { marked: false, type: 'Diamonds', value: '10'} , { marked: false, type: 'Diamonds', value: 'J'} , { marked: false, type: 'Diamonds', value: 'Q'} , { marked: false, type: 'Diamonds', value: 'K'}  ];
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


	//call your pickCards function here
	pickCards();


}

//write your pickCards function here

function pickCards() {
	for (var i = 0 ; i< cards.length ; i++) {
		if (cards[i].type == 'Hearts' || cards[i].value == 2) {
			cards[i].marked=true;
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
		if (cards[i].marked)
		{
			drawCard(cards[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(cards[i], 400 + i * 18, 250);
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
			if (card.value == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
