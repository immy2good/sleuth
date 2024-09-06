/*
801
Stage 2: Don Giovanni

Officer: 7315287
CaseNum: 801-1-48833639-7315287

Our person in the box office at the Console City opera house has just informed us that the influential Order of Swartz will be attending Don Giovanni tonight. This vain lot should be easy to spot thanks to their distinguished beard. They are all sitting in the 5th seat of each row. 

- Set the spotlights to shine on the members of the order. 
- Do this by setting the highlighted  property of the element in audience to true. 
- You must use a single for loop to pick out the members of the order

Solve the case using only:
For (not nested)
audience[ ][ ]


*/

var crowdImg;
var spotlight;

var audience = [ [ { x: 50, y: 50, highlighted: false} , { x: 150, y: 50, highlighted: false} , { x: 250, y: 50, highlighted: false} , { x: 350, y: 50, highlighted: false} , { x: 450, y: 50, highlighted: false} , { x: 550, y: 50, highlighted: false} , { x: 650, y: 50, highlighted: false} , { x: 750, y: 50, highlighted: false} , { x: 850, y: 50, highlighted: false} , { x: 950, y: 50, highlighted: false}  ], [ { x: 50, y: 140, highlighted: false} , { x: 150, y: 140, highlighted: false} , { x: 250, y: 140, highlighted: false} , { x: 350, y: 140, highlighted: false} , { x: 450, y: 140, highlighted: false} , { x: 550, y: 140, highlighted: false} , { x: 650, y: 140, highlighted: false} , { x: 750, y: 140, highlighted: false} , { x: 850, y: 140, highlighted: false} , { x: 950, y: 140, highlighted: false}  ], [ { x: 50, y: 230, highlighted: false} , { x: 150, y: 230, highlighted: false} , { x: 250, y: 230, highlighted: false} , { x: 350, y: 230, highlighted: false} , { x: 450, y: 230, highlighted: false} , { x: 550, y: 230, highlighted: false} , { x: 650, y: 230, highlighted: false} , { x: 750, y: 230, highlighted: false} , { x: 850, y: 230, highlighted: false} , { x: 950, y: 230, highlighted: false}  ], [ { x: 50, y: 320, highlighted: false} , { x: 150, y: 320, highlighted: false} , { x: 250, y: 320, highlighted: false} , { x: 350, y: 320, highlighted: false} , { x: 450, y: 320, highlighted: false} , { x: 550, y: 320, highlighted: false} , { x: 650, y: 320, highlighted: false} , { x: 750, y: 320, highlighted: false} , { x: 850, y: 320, highlighted: false} , { x: 950, y: 320, highlighted: false}  ], [ { x: 50, y: 410, highlighted: false} , { x: 150, y: 410, highlighted: false} , { x: 250, y: 410, highlighted: false} , { x: 350, y: 410, highlighted: false} , { x: 450, y: 410, highlighted: false} , { x: 550, y: 410, highlighted: false} , { x: 650, y: 410, highlighted: false} , { x: 750, y: 410, highlighted: false} , { x: 850, y: 410, highlighted: false} , { x: 950, y: 410, highlighted: false}  ], [ { x: 50, y: 500, highlighted: false} , { x: 150, y: 500, highlighted: false} , { x: 250, y: 500, highlighted: false} , { x: 350, y: 500, highlighted: false} , { x: 450, y: 500, highlighted: false} , { x: 550, y: 500, highlighted: false} , { x: 650, y: 500, highlighted: false} , { x: 750, y: 500, highlighted: false} , { x: 850, y: 500, highlighted: false} , { x: 950, y: 500, highlighted: false}  ], [ { x: 50, y: 590, highlighted: false} , { x: 150, y: 590, highlighted: false} , { x: 250, y: 590, highlighted: false} , { x: 350, y: 590, highlighted: false} , { x: 450, y: 590, highlighted: false} , { x: 550, y: 590, highlighted: false} , { x: 650, y: 590, highlighted: false} , { x: 750, y: 590, highlighted: false} , { x: 850, y: 590, highlighted: false} , { x: 950, y: 590, highlighted: false}  ], [ { x: 50, y: 680, highlighted: false} , { x: 150, y: 680, highlighted: false} , { x: 250, y: 680, highlighted: false} , { x: 350, y: 680, highlighted: false} , { x: 450, y: 680, highlighted: false} , { x: 550, y: 680, highlighted: false} , { x: 650, y: 680, highlighted: false} , { x: 750, y: 680, highlighted: false} , { x: 850, y: 680, highlighted: false} , { x: 950, y: 680, highlighted: false}  ], [ { x: 50, y: 770, highlighted: false} , { x: 150, y: 770, highlighted: false} , { x: 250, y: 770, highlighted: false} , { x: 350, y: 770, highlighted: false} , { x: 450, y: 770, highlighted: false} , { x: 550, y: 770, highlighted: false} , { x: 650, y: 770, highlighted: false} , { x: 750, y: 770, highlighted: false} , { x: 850, y: 770, highlighted: false} , { x: 950, y: 770, highlighted: false}  ], [ { x: 50, y: 860, highlighted: false} , { x: 150, y: 860, highlighted: false} , { x: 250, y: 860, highlighted: false} , { x: 350, y: 860, highlighted: false} , { x: 450, y: 860, highlighted: false} , { x: 550, y: 860, highlighted: false} , { x: 650, y: 860, highlighted: false} , { x: 750, y: 860, highlighted: false} , { x: 850, y: 860, highlighted: false} , { x: 950, y: 860, highlighted: false}  ] ];

function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////
	for (var i = 0; i < audience.length; i++) {
		audience[i][4].highlighted = true; // row 0 seat 4
		
	}


	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < audience.length; i++)
	{
		for (var j = 0; j < audience[i].length; j++)
		{
			if (audience[i][j].highlighted)
			{
				image(spotlight, audience[i][j].x, audience[i][j].y, 100 , 100 );
			}
		}
	}
}
