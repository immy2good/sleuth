/*

Officer: 7315287
CaseNum: 202-3-80220751-7315287

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Sandy Brown filled text with a Lawn Green outline in Ballpointprint font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(656,496);
	textSize(30);
}

function draw()
{
	background(255);

	push();
	fill(210,105,30);
	stroke(139,0,0);
	textFont(RonsFont);
	// text("darli", 52,30);
	pop();
	fill(0,255,255);
	stroke(0,128,128);
	textFont(RonsFont);
	// text("Daisy", 7,379);
	push();
	fill(123,104,238);
	stroke(46,139,87);
	textFont(Melissa);
	// text("relationship", 7,126);
	pop();
	stroke(199,21,133);
	textFont(Diggity);
	// text("x", 76,379);
	fill(148,0,211);
	stroke(0,255,127);
	textFont(Melissa);
	// text("longer", 113,90);
	fill(154,205,50);
	stroke(148,0,211);
	textFont(Ballpointprint);
	// text("Perhaps", 34,194);
	fill(153,50,204);
	stroke(0,0,255);
	textFont(RonsFont);
	// text("are", 186,259);
	fill(218,165,32);
	stroke(0,255,255);
	textFont(Ballpointprint);
	// text("avoiding", 497,162);
	fill(186,85,211);
	stroke(0,0,255);
	// text("this", 18,224);
	fill(255,105,180);
	stroke(255,215,0);
	textFont(RonsFont);
	// text("ney", 390,224);
	fill(199,21,133);
	stroke(127,255,0);
	// text("silence.", 294,162);
	fill(128,0,128);
	stroke(255,0,0);
	// text("mo", 355,224);
	fill(0,255,255);
	stroke(128,0,128);
	textFont(Melissa);
	// text("can", 40,90);
	fill(222,184,135);
	stroke(255,140,0);
	textFont(RonsFont);
	// text("no", 75,90);
	fill(199,21,133);
	stroke(184,134,11);
	textFont(Melissa);
	// text("urs,", 96,319);
	fill(0,250,154);
	stroke(34,139,34);
	textFont(Diggity);
	// text("not", 245,126);
	fill(65,105,225);
	stroke(165,42,42);
	// text("You", 139,259);
	fill(165,42,42);
	stroke(25,25,112);
	textFont(RonsFont);
	// text("me", 598,162);
	push();
	stroke(0,255,255);
	// text("?", 12,194);
	pop();
	stroke(165,42,42);
	// text("My", 7,30);
	push();
	fill(0,0,139);
	stroke(34,139,34);
	textFont(Diggity);
	// text("so", 240,259);
	pop();
	fill(0,100,0);
	textFont(Melissa);
	// text("you", 216,224);
	fill(0,206,209);
	stroke(128,128,0);
	textFont(RonsFont);
	// text("cash.", 73,259);
	fill(255,69,0);
	stroke(0,255,127);
	// text("The", 119,162);
	fill(176,224,230);
	stroke(255,69,0);
	textFont(Ballpointprint);
	// text("we", 134,194);
	push();
	fill(50,205,50);
	stroke(46,139,87);
	textFont(RonsFont);
	// text("ng", 111,30);
	pop();
	fill(240,128,128);
	// text("can", 549,224);
	fill(154,205,50);
	stroke(255,0,255);
	textFont(Diggity);
	// text("these", 250,90);
	fill(255,105,180);
	stroke(153,50,204);
	// text("Bob,", 148,30);
	fill(210,105,30);
	stroke(0,255,255);
	textFont(Ballpointprint);
	// text("?", 85,162);
	push();
	fill(238,232,170);
	stroke(160,82,45);
	textFont(Diggity);
	// text("should", 181,194);
	pop();
	fill(128,0,0);
	textFont(RonsFont);
	// text("you", 444,162);
	fill(238,130,238);
	stroke(75,0,130);
	textFont(Diggity);
	// text("continual", 315,90);
	fill(152,251,152);
	stroke(0,0,128);
	textFont(Melissa);
	// text("secrets,", 164,162);
	fill(0,191,255);
	stroke(0,139,139);
	textFont(Diggity);
	// text("send", 18,259);
	push();
	fill(65,105,225);
	stroke(128,128,0);
	textFont(Ballpointprint);
	// text("short", 250,224);
	pop();
	stroke(148,0,211);
	textFont(RonsFont);
	// text("I", 522,224);
	fill(64,224,208);
	stroke(139,0,139);
	textFont(Melissa);
	// text("sometimes.", 377,259);
	fill(0,250,154);
	stroke(32,178,170);
	textFont(Diggity);
	// text("?", 435,224);
	fill(153,50,204);
	stroke(0,0,128);
	textFont(Ballpointprint);
	// text("Are", 158,224);
	fill(218,112,214);
	stroke(255,69,0);
	// text("break", 431,194);
	fill(0,255,127);
	stroke(255,140,0);
	textFont(Diggity);
	// text("much", 412,126);
	fill(139,0,139);
	stroke(107,142,35);
	textFont(Ballpointprint);
	// text("delays.", 407,90);
	fill(255,215,0);
	stroke(0,100,0);
	textFont(RonsFont);
	// text("and", 509,194);
	push();
	fill(65,105,225);
	stroke(199,21,133);
	textFont(Ballpointprint);
	// text("so,", 483,224);
	pop();
	stroke(220,20,60);
	textFont(Melissa);
	// text("yo", 76,319);
	stroke(255,140,0);
	// text("If", 458,224);
	fill(127,255,212);
	stroke(0,255,255);
	textFont(RonsFont);
	// text("I", 520,126);
	fill(107,142,35);
	stroke(139,0,0);
	// text("sort", 568,194);
	fill(255,127,80);
	stroke(0,139,139);
	textFont(Melissa);
	// text("Forever", 7,319);
	fill(218,112,214);
	stroke(218,165,32);
	textFont(Ballpointprint);
	// text("of", 314,224);
	fill(244,164,96);
	stroke(0,0,139);
	textFont(Diggity);
	// text("Is", 498,90);
	fill(0,0,205);
	stroke(107,142,35);
	textFont(Ballpointprint);
	// text("ed", 329,259);
	push();
	fill(222,184,135);
	stroke(154,205,50);
	// text("away", 288,194);
	pop();
	fill(135,206,235);
	stroke(210,105,30);
	textFont(Melissa);
	// text("more", 472,126);
	fill(255,127,80);
	stroke(218,165,32);
	textFont(Ballpointprint);
	// text("all", 72,224);
	fill(123,104,238);
	stroke(220,20,60);
	// text("?", 177,126);
	fill(127,255,212);
	stroke(0,128,0);
	// text("out.", 110,224);
	fill(255,105,180);
	stroke(255,255,0);
	// text("a", 403,194);
	push();
	fill(255,165,0);
	// text("Are", 386,162);
	pop();
	fill(139,69,19);
	stroke(0,128,128);
	textFont(RonsFont);
	// text("can", 547,126);
	fill(244,164,96);
	stroke(124,252,0);
	textFont(Ballpointprint);
	text("guard", 272,259);
	text("safe", 109,126);
	text("the", 240,162);
	text("take", 21,162);
	text("ignore", 169,90);
	fill(138,43,226);
	stroke(139,0,0);
	textFont(RonsFont);
	// text("I", 13,90);
	fill(255,127,80);
	stroke(0,0,128);
	textFont(Ballpointprint);
	// text("go", 248,194);
	fill(240,230,140);
	stroke(139,0,139);
	textFont(RonsFont);
	// text("sure", 289,126);
	push();
	fill(138,43,226);
	stroke(25,25,112);
	textFont(Diggity);
	// text("how", 361,126);
	pop();
	fill(255,140,0);
	stroke(107,142,35);
	textFont(Ballpointprint);
	// text("our", 522,90);
	fill(153,50,204);
	stroke(128,0,0);
	// text("for", 354,194);
	fill(138,43,226);
	stroke(255,215,0);
	textFont(Melissa);
	// text("I'm", 211,126);



}
