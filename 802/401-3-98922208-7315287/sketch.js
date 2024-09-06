/*

Officer: 7315287
CaseNum: 401-3-98922208-7315287

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When either SpiderVenom goes above 0.26, methanol goes above 0.57, alcohol dips below 0.45, or perhaps botulinium dips below 0.69, decrease charcoal by 0.04
	- If amanita_mushrooms dips below 0.34 and chlorine goes above 0.3, whilst at the same time, Snake_Venom dips below 0.69 or formaldehyde goes above 0.3, increase charcoal by 0.02
	- If SpiderVenom goes above 0.52, amanita_mushrooms dips below 0.31, and also Snake_Venom dips below 0.6, reduce hydrochloricAcid by 0.01
	- If botulinium goes above 0.62, or on the other hand, chlorine dips below 0.31 and formaldehyde dips below 0.69, increase hydrochloricAcid by 0.01
	- When either alcohol dips below 0.74, chlorine dips below 0.49, Snake_Venom goes above 0.57, or perhaps botulinium goes above 0.3, decrement betaBlocker by 0.02
	- If amanita_mushrooms goes above 0.45, SpiderVenom dips below 0.73, and also methanol goes above 0.51, try increasing betaBlocker by 0.03
	- If formaldehyde dips below 0.39, or on the other hand, SpiderVenom dips below 0.66 and amanita_mushrooms dips below 0.68, try decreasing CalciumChloride by 0.02
	- When botulinium dips below 0.54 or alcohol goes above 0.68, or on the other hand, chlorine goes above 0.63 and Snake_Venom dips below 0.6, raise CalciumChloride by 0.01
	- When chlorine dips below 0.37 or Snake_Venom dips below 0.48, whilst at the same time, SpiderVenom dips below 0.66 and amanita_mushrooms goes above 0.26, reduce plasma by 0.05
	- If formaldehyde goes above 0.53 or botulinium goes above 0.69, whilst at the same time, alcohol goes above 0.33, increment plasma by 0.03


Your conditional statements should consider the following poisons:

	- amanita_mushrooms
	- Snake_Venom
	- SpiderVenom
	- formaldehyde
	- botulinium
	- methanol
	- alcohol
	- chlorine


Your conditional statements should modify the following antidotes:

	- charcoal
	- hydrochloricAcid
	- betaBlocker
	- CalciumChloride
	- plasma


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
var amanita_mushrooms;
var Snake_Venom;
var SpiderVenom;
var formaldehyde;
var botulinium;
var methanol;
var alcohol;
var chlorine;


//Declare the antidote variables
var charcoal;
var hydrochloricAcid;
var betaBlocker;
var CalciumChloride;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	amanita_mushrooms = 0.5;
	Snake_Venom = 0.5;
	SpiderVenom = 0.5;
	formaldehyde = 0.5;
	botulinium = 0.5;
	methanol = 0.5;
	alcohol = 0.5;
	chlorine = 0.5;
	charcoal = 0.5;
	hydrochloricAcid = 0.5;
	betaBlocker = 0.5;
	CalciumChloride = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

	if (SpiderVenom > 0.26 || methanol > 0.57 || alcohol < 0.45 || botulinium < 0.69) {
		charcoal -= 0.04;
	}
	
	if (amanita_mushrooms < 0.34 && chlorine > 0.3 && (Snake_Venom < 0.69 || formaldehyde > 0.3)) {
		charcoal += 0.02;
	}
	
	if (SpiderVenom > 0.52 && amanita_mushrooms < 0.31 && Snake_Venom < 0.6) {
		hydrochloricAcid -= 0.01;
	}
	
	if (botulinium > 0.62 || (chlorine < 0.31 && formaldehyde < 0.69)) {
		hydrochloricAcid += 0.01;
	}
	
	if (alcohol < 0.74 || chlorine < 0.49 || Snake_Venom > 0.57 || botulinium > 0.3) {
		betaBlocker -= 0.02;
	}
	
	if (amanita_mushrooms > 0.45 && SpiderVenom < 0.73 && methanol > 0.51) {
		betaBlocker += 0.03;
	}
	
	if (formaldehyde < 0.39 || (SpiderVenom < 0.66 && amanita_mushrooms < 0.68)) {
		CalciumChloride -= 0.02;
	}
	
	if (botulinium < 0.54 || alcohol > 0.68 || (chlorine > 0.63 && Snake_Venom < 0.6)) {
		CalciumChloride += 0.01;
	}
	
	if ((chlorine < 0.37 || Snake_Venom < 0.48) && (SpiderVenom < 0.66 && amanita_mushrooms > 0.26)) {
		plasma -= 0.05;
	}
	
	if ((formaldehyde > 0.53 || botulinium > 0.69) && alcohol > 0.33) {
		plasma += 0.03;
	}
	


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	amanita_mushrooms = nextValue(graphs[0],amanita_mushrooms);
	Snake_Venom = nextValue(graphs[1],Snake_Venom);
	SpiderVenom = nextValue(graphs[2],SpiderVenom);
	formaldehyde = nextValue(graphs[3],formaldehyde);
	botulinium = nextValue(graphs[4],botulinium);
	methanol = nextValue(graphs[5],methanol);
	alcohol = nextValue(graphs[6],alcohol);
	chlorine = nextValue(graphs[7],chlorine);


	charcoal = constrain(charcoal, 0, 1);
	hydrochloricAcid = constrain(hydrochloricAcid, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);
	CalciumChloride = constrain(CalciumChloride, 0, 1);
	plasma = constrain(plasma, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,20);
	fill(colors[1]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,40);
	fill(colors[2]);
	text('SpiderVenom: ' + nf(SpiderVenom,1,2), 20,60);
	fill(colors[3]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,80);
	fill(colors[4]);
	text('botulinium: ' + nf(botulinium,1,2), 20,100);
	fill(colors[5]);
	text('methanol: ' + nf(methanol,1,2), 20,120);
	fill(colors[6]);
	text('alcohol: ' + nf(alcohol,1,2), 20,140);
	fill(colors[7]);
	text('chlorine: ' + nf(chlorine,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(charcoal,50,'charcoal');
	drawBar(hydrochloricAcid,200,'hydrochloricAcid');
	drawBar(betaBlocker,350,'betaBlocker');
	drawBar(CalciumChloride,500,'CalciumChloride');
	drawBar(plasma,650,'plasma');


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
