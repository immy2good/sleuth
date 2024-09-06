/*

Officer: 7315287
CaseNum: 401-2-45381424-7315287

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When ricin dips below 0.55, or on the other hand, methanol goes above 0.7 and amanitaMushrooms goes above 0.62, decrement protamine by 0.04
	- If NerveGas dips below 0.45 or novichok goes above 0.62, increment protamine by 0.01
	- When ricin dips below 0.73 or methanol goes above 0.37, decrement paracetamol by 0.04
	- When either NerveGas goes above 0.41, sarin goes above 0.26, or perhaps novichok goes above 0.47, try increasing paracetamol by 0.03
	- When sarin goes above 0.56, whilst at the same time, novichok goes above 0.48 or ricin dips below 0.29, try decreasing chalk by 0.02
	- When NerveGas goes above 0.37, whilst at the same time, amanitaMushrooms dips below 0.52 or methanol dips below 0.68, raise chalk by 0.04
	- When ricin goes above 0.43, whilst at the same time, sarin dips below 0.7 or novichok dips below 0.54, decrement ethanol by 0.01
	- If amanitaMushrooms dips below 0.25 and methanol goes above 0.5, or on the other hand, NerveGas goes above 0.44, try increasing ethanol by 0.01


Your conditional statements should consider the following poisons:

	- novichok
	- methanol
	- ricin
	- sarin
	- NerveGas
	- amanitaMushrooms


Your conditional statements should modify the following antidotes:

	- protamine
	- paracetamol
	- chalk
	- ethanol


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
var novichok;
var methanol;
var ricin;
var sarin;
var NerveGas;
var amanitaMushrooms;


//Declare the antidote variables
var protamine;
var paracetamol;
var chalk;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	methanol = 0.5;
	ricin = 0.5;
	sarin = 0.5;
	NerveGas = 0.5;
	amanitaMushrooms = 0.5;
	protamine = 0.5;
	paracetamol = 0.5;
	chalk = 0.5;
	ethanol = 0.5;


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


// 1. When ricin dips below 0.55, or methanol goes above 0.7 and amanitaMushrooms goes above 0.62, decrement protamine by 0.04
if (ricin < 0.55 || (methanol > 0.7 && amanitaMushrooms > 0.62)) {
	protamine -= 0.04;
}

// 2. If NerveGas dips below 0.45 or novichok goes above 0.62, increment protamine by 0.01
if (NerveGas < 0.45 || novichok > 0.62) {
	protamine += 0.01;
}

// 3. When ricin dips below 0.73 or methanol goes above 0.37, decrement paracetamol by 0.04
if (ricin < 0.73 || methanol > 0.37) {
	paracetamol -= 0.04;
}

// 4. When NerveGas goes above 0.41, sarin goes above 0.26, or novichok goes above 0.47, increase paracetamol by 0.03
if (NerveGas > 0.41 || sarin > 0.26 || novichok > 0.47) {
	paracetamol += 0.03;
}

// 5. When sarin goes above 0.56, and novichok goes above 0.48 or ricin dips below 0.29, decrease chalk by 0.02
if (sarin > 0.56 && (novichok > 0.48 || ricin < 0.29)) {
	chalk -= 0.02;
}

// 6. When NerveGas goes above 0.37, and amanitaMushrooms dips below 0.52 or methanol dips below 0.68, raise chalk by 0.04
if (NerveGas > 0.37 && (amanitaMushrooms < 0.52 || methanol < 0.68)) {
	chalk += 0.04;
}

// 7. When ricin goes above 0.43, and sarin dips below 0.7 or novichok dips below 0.54, decrement ethanol by 0.01
if (ricin > 0.43 && (sarin < 0.7 || novichok < 0.54)) {
	ethanol -= 0.01;
}

// 8. If amanitaMushrooms dips below 0.25 and methanol goes above 0.5, or NerveGas goes above 0.44, increase ethanol by 0.01
if ((amanitaMushrooms < 0.25 && methanol > 0.5) || NerveGas > 0.44) {
	ethanol += 0.01;
}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	novichok = nextValue(graphs[0],novichok);
	methanol = nextValue(graphs[1],methanol);
	ricin = nextValue(graphs[2],ricin);
	sarin = nextValue(graphs[3],sarin);
	NerveGas = nextValue(graphs[4],NerveGas);
	amanitaMushrooms = nextValue(graphs[5],amanitaMushrooms);


	protamine = constrain(protamine, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	chalk = constrain(chalk, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,40);
	fill(colors[2]);
	text('ricin: ' + nf(ricin,1,2), 20,60);
	fill(colors[3]);
	text('sarin: ' + nf(sarin,1,2), 20,80);
	fill(colors[4]);
	text('NerveGas: ' + nf(NerveGas,1,2), 20,100);
	fill(colors[5]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(protamine,50,'protamine');
	drawBar(paracetamol,200,'paracetamol');
	drawBar(chalk,350,'chalk');
	drawBar(ethanol,500,'ethanol');


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
