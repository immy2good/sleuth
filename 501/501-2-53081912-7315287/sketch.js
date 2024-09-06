/*

Officer: 7315287
CaseNum: 501-2-53081912-7315287

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also mean player of dice.
To speak to Marrieta beyond the grave you must place a dice in each of the dashed circles.
Use the image() and the diceImage variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, diceImage;

function preload() {
    backgroundImg = loadImage("background.jpg");
    diceImage = loadImage("Dice.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
        for (var i = 0; i < 8 ; i ++ )
        {
            image(diceImage, 470 + i*72 ,300)
            for (var j = 0 ; j < 5; j ++) 
            {
                image(diceImage, 470 + i*72 , 350 + j*53 )
            }
        }
	//A helpful mouse pointer
	// push();
	// 	fill(255,0,0);
	// 	noStroke(0);
	// 	text(mouseX + "," + mouseY, mouseX,mouseY);
    // // noLoop()

    //     pop();

}
