/*

Officer: 7315287
CaseNum: 401-2-29331424-7315287

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If either arsenic dips below 0.38, formaldehyde goes above 0.33, or perhaps mercury goes above 0.41, try decreasing CalciumGluconate by 0.02

	- If Snake_Venom dips below 0.47, whilst at the same time, sarin goes above 0.73 or botulinium goes above 0.27, increase CalciumGluconate by 0.02

	- If Snake_Venom goes above 0.67 and arsenic dips below 0.68, or on the other hand, sarin dips below 0.44, try decreasing betaBlocker by 0.02

	- When formaldehyde goes above 0.66 and mercury dips below 0.58, raise betaBlocker by 0.01

	- If mercury goes above 0.7, arsenic dips below 0.38, and also formaldehyde goes above 0.55, decrease glucagon by 0.04

	- When Snake_Venom goes above 0.69 or sarin dips below 0.55, whilst at the same time, botulinium goes above 0.61, raise glucagon by 0.02

	- If formaldehyde goes above 0.25 or Snake_Venom goes above 0.63, decrement antivenom by 0.03
	- If arsenic goes above 0.69 or sarin goes above 0.42, raise antivenom by 0.05


Your conditional statements should consider the following poisons:

	- sarin
	- arsenic
	- mercury
	- formaldehyde
	- Snake_Venom
	- botulinium


Your conditional statements should modify the following antidotes:

	- CalciumGluconate
	- betaBlocker
	- glucagon
	- antivenom


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var sarin;
var arsenic;
var mercury;
var formaldehyde;
var Snake_Venom;
var botulinium;


//Declare the antidote variables
var CalciumGluconate;
var betaBlocker;
var glucagon;
var antivenom;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	sarin = 0.5;
	arsenic = 0.5;
	mercury = 0.5;
	formaldehyde = 0.5;
	Snake_Venom = 0.5;
	botulinium = 0.5;
	CalciumGluconate = 0.5;
	betaBlocker = 0.5;
	glucagon = 0.5;
	antivenom = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

	if (arsenic < 0.38 || formaldehyde >0.33 || mercury > 0.41) {
		CalciumGluconate -= 0.02
	}

	if ((Snake_Venom < 0.47 && sarin > 0.73) || botulinium > 0.27  ) {
		CalciumGluconate =+ 0.02
	}

	if ((Snake_Venom > 0.67 && arsenic < 0.68) || sarin < 0.44) {
		betaBlocker -= 0.02;
	}

	if (formaldehyde > 0.66 && mercury < 0.58) {
		betaBlocker += 0.01;
	}

	if ( mercury > 0.7 && arsenic < 0.38 && formaldehyde > 0.55) {
		glucagon -= 0.04;
	}
	if ((Snake_Venom > 0.69 || sarin < 0.55 ) && botulinium >0.61 ) {
		glucagon += 0.02;
	}
	if (formaldehyde> 0.25 || Snake_Venom > 0.63) {
		antivenom -=0.03;
	}
	if (arsenic > 0.69 || sarin > 0.42) {
		antivenom += 0.05;
	}




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	sarin = nextValue(graphs[0],sarin);
	arsenic = nextValue(graphs[1],arsenic);
	mercury = nextValue(graphs[2],mercury);
	formaldehyde = nextValue(graphs[3],formaldehyde);
	Snake_Venom = nextValue(graphs[4],Snake_Venom);
	botulinium = nextValue(graphs[5],botulinium);


	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	antivenom = constrain(antivenom, 0, 1);


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
	text('sarin: ' + nf(sarin,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('mercury: ' + nf(mercury,1,2), 20,60);
	fill(colors[3]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,80);
	fill(colors[4]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,100);
	fill(colors[5]);
	text('botulinium: ' + nf(botulinium,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(CalciumGluconate,50,'CalciumGluconate');
	drawBar(betaBlocker,200,'betaBlocker');
	drawBar(glucagon,350,'glucagon');
	drawBar(antivenom,500,'antivenom');


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
