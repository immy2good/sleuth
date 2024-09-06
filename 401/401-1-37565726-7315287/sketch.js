/*

Officer: 7315287
CaseNum: 401-1-37565726-7315287

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When insecticide goes above 0.4, decrement insulin by 0.03
	- If novichok dips below 0.45 and ricin goes above 0.44, increment insulin by 0.01
	- When cyanide dips below 0.29 and ricin goes above 0.32, reduce sodium_bicarbonate by 0.01
	- When insecticide goes above 0.63, increment sodium_bicarbonate by 0.05
	- If novichok goes above 0.6, try decreasing antivenom by 0.05
	- When cyanide goes above 0.38, increase antivenom by 0.02
	- When novichok goes above 0.52, decrement antitoxin by 0.02
	- When insecticide dips below 0.64, raise antitoxin by 0.01


Your conditional statements should consider the following poisons:

	- novichok
	- ricin
	- cyanide
	- insecticide


Your conditional statements should modify the following antidotes:

	- insulin
	- sodium_bicarbonate
	- antivenom
	- antitoxin


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var novichok;
var ricin;
var cyanide;
var insecticide;


//Declare the antidote variables
var insulin;
var sodium_bicarbonate;
var antivenom;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	ricin = 0.5;
	cyanide = 0.5;
	insecticide = 0.5;
	insulin = 0.5;
	sodium_bicarbonate = 0.5;
	antivenom = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	if (insecticide > 0.4) {
		insulin -= 0.03;
	}

	if (novichok < 0.45 && ricin > 0.44) {
		insulin += 0.01;
	}

	if (cyanide < 0.29 && ricin > 0.32) {
		sodium_bicarbonate -= 0.01;
	}

	if (insecticide > 0.63) {
		sodium_bicarbonate += 0.05;
	}

	if (novichok > 0.6) {
		antivenom -= 0.05;
	}

	if (cyanide > 0.38) {
		antivenom += 0.02;
	}

	if (novichok > 0.52) {
		antitoxin -= 0.02;
	}

	if (insecticide < 0.64) {
		antitoxin += 0.01;
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	novichok = nextValue(graphs[0],novichok);
	ricin = nextValue(graphs[1],ricin);
	cyanide = nextValue(graphs[2],cyanide);
	insecticide = nextValue(graphs[3],insecticide);


	insulin = constrain(insulin, 0, 1);
	sodium_bicarbonate = constrain(sodium_bicarbonate, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('novichok: ' + nf(novichok,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('cyanide: ' + nf(cyanide,1,2), 20,60);
	fill(colors[3]);
	text('insecticide: ' + nf(insecticide,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(sodium_bicarbonate,200,'sodium_bicarbonate');
	drawBar(antivenom,350,'antivenom');
	drawBar(antitoxin,500,'antitoxin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
