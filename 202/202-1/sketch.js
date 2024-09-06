/*

Officer: 7315287
CaseNum: 202-1-51545282-7315287

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dark Cyan filled text with a Lime Green outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(659,586);
	textFont(letterFont);
	textSize(37);
}

function draw()
{
	background(255);

	fill(184,134,11);
	stroke(32,178,170);
	// text("and", 560,191);
	fill(250,128,114);
	stroke(0,139,139);
	// text("?", 312,111);
	fill(139,0,0);
	stroke(0,255,255);
	// text("kissed", 481,154);
	fill(210,105,30);
	stroke(218,165,32);
	// text("darling", 50,37);
	fill(75,0,130);
	stroke(178,34,34);
	// text("you", 89,191);
	fill(178,34,34);
	stroke(255,165,0);
	// text("store", 391,269);
	fill(255,127,80);
	stroke(255,215,0);
	// text("the", 551,232);
	fill(135,206,235);
	stroke(139,0,0);
	// text("last", 432,154);
	fill(127,255,0);
	stroke(255,165,0);
	// text("?", 580,269);
	fill(124,252,0);
	stroke(0,206,209);
	// text("ing", 420,111);
	fill(0,139,139);
	stroke(50,205,50);
	text("hold", 41,191);
	text("united", 185,111);
	text("up", 344,191);
	fill(0,191,255);
	stroke(0,0,128);
	// text("arms.", 193,191);
	fill(64,224,208);
	stroke(0,255,127);
	// text("much", 125,269);
	fill(0,0,205);
	stroke(0,0,128);
	// text("Even", 10,308);
	fill(160,82,45);
	stroke(210,105,30);
	// text("we", 114,111);
	fill(255,215,0);
	stroke(128,128,0);
	// text("thi", 54,232);
	fill(222,184,135);
	stroke(139,0,139);
	// text("I", 258,191);
	fill(220,20,60);
	stroke(255,255,0);
	// text("of", 160,232);
	fill(106,90,205);
	stroke(50,205,50);
	// text("on", 456,111);
	stroke(210,105,30);
	// text("When", 9,111);
	fill(165,42,42);
	stroke(128,0,128);
	// text("your", 488,111);
	fill(0,128,0);
	// text("spring,", 132,308);
	fill(107,142,35);
	stroke(34,139,34);
	// text("tare", 291,191);
	fill(34,139,34);
	stroke(255,0,0);
	// text("it", 308,154);
	fill(152,251,152);
	stroke(184,134,11);
	// text("be", 154,111);
	fill(0,255,127);
	stroke(107,142,35);
	// text("the", 407,191);
	fill(25,25,112);
	stroke(255,69,0);
	// text("My", 9,37);
	fill(0,0,205);
	stroke(154,205,50);
	// text("return.", 12,154);
	fill(100,149,237);
	stroke(46,139,87);
	// text("sm", 514,308);
	fill(233,150,122);
	stroke(0,139,139);
	// text("longing", 505,269);
	fill(0,255,127);
	stroke(0,128,0);
	// text("I", 285,269);
	fill(0,139,139);
	stroke(0,100,0);
	// text("only", 112,232);
	fill(0,191,255);
	stroke(128,0,0);
	// text("since", 332,154);
	fill(205,133,63);
	stroke(0,191,255);
	// text("at", 375,191);
	fill(107,142,35);
	stroke(0,0,128);
	// text("all", 544,308);
	fill(165,42,42);
	stroke(218,165,32);
	// text("to", 9,191);
	fill(0,255,255);
	stroke(255,255,0);
	// text("I'm", 333,111);
	fill(34,139,34);
	stroke(148,0,211);
	// text("side,", 410,308);
	fill(255,0,255);
	stroke(124,252,0);
	// text("around", 476,232);
	fill(30,144,255);
	stroke(0,255,127);
	// text("in", 131,191);
	fill(255,127,80);
	stroke(255,69,0);
	// text("do", 252,269);
	fill(205,133,63);
	stroke(154,205,50);
	// text("long", 596,154);
	fill(199,21,133);
	stroke(0,139,139);
	// text("feels", 12,347);
	fill(0,139,139);
	stroke(255,255,0);
	// text("you", 434,232);
	fill(0,0,205);
	stroke(128,128,0);
	// text("months", 198,154);
	fill(255,255,0);
	stroke(218,165,32);
	// text("Forever", 9,421);
	fill(128,0,0);
	stroke(0,100,0);
	// text("the", 90,308);
	fill(220,20,60);
	stroke(50,205,50);
	// text("x", 73,495);
	fill(0,139,139);
	stroke(25,25,112);
	// text("without", 211,308);
	fill(178,34,34);
	stroke(50,205,50);
	// text("we", 392,154);
	fill(0,191,255);
	stroke(153,50,204);
	// text("my", 155,191);
	fill(128,0,0);
	stroke(0,128,128);
	// text("can", 10,232);
	fill(64,224,208);
	stroke(0,0,128);
	// text("you", 298,308);
	stroke(210,105,30);
	// text("How", 75,269);
	fill(0,250,154);
	stroke(255,0,0);
	// text("town", 573,308);
	fill(255,105,180);
	stroke(139,69,19);
	// text("I", 288,232);
	fill(0,128,0);
	stroke(255,165,0);
	// text("night", 449,191);
	fill(127,255,212);
	stroke(0,255,127);
	// text("to", 359,269);
	fill(64,224,208);
	stroke(50,205,50);
	// text("Bob,", 124,37);
	fill(0,139,139);
	text("bank", 374,111);
	text("is", 282,154);
	text("place", 14,269);
	fill(123,104,238);
	stroke(127,255,0);
	// text("desolate.", 71,347);
	fill(173,255,47);
	stroke(0,255,255);
	// text("this", 466,308);
	fill(218,165,32);
	stroke(0,0,255);
	// text("s", 278,191);
	fill(240,128,128);
	// text("having", 364,232);
	fill(147,112,219);
	stroke(165,42,42);
	// text("Daisy", 9,495);
	fill(238,130,238);
	stroke(0,0,255);
	// text("have", 305,269);
	fill(107,142,35);
	stroke(139,0,0);
	// text("again", 252,111);
	fill(0,139,139);
	stroke(154,205,50);
	// text("I", 576,154);
	fill(135,206,250);
	stroke(0,0,139);
	// text("this", 457,269);
	fill(139,0,139);
	stroke(0,0,128);
	// text("nk", 80,232);
	fill(128,0,128);
	stroke(128,0,0);
	// text("sky,", 507,191);
	fill(255,105,180);
	stroke(165,42,42);
	// text("How", 87,154);
	fill(255,0,0);
	stroke(148,0,211);
	// text("I", 604,191);
	fill(128,128,0);
	stroke(0,0,139);
	// text("yours,", 95,421);
	fill(205,133,63);
	stroke(32,178,170);
	// text("miss", 308,232);
	fill(153,50,204);
	stroke(75,0,130);
	// text("will", 73,111);
	fill(72,209,204);
	stroke(139,0,139);
	// text("in", 66,308);
	fill(152,251,152);
	stroke(0,100,0);
	// text("you.", 192,232);
	fill(148,0,211);
	stroke(255,69,0);
	// text("longer", 183,269);
	fill(173,216,230);
	stroke(0,191,255);
	// text("my", 372,308);
	fill(165,42,42);
	stroke(139,69,19);
	// text("many", 137,154);
	fill(0,0,128);
	stroke(46,139,87);
	// text("swift", 540,111);
	fill(219,112,147);
	stroke(255,69,0);
	// text("?", 555,154);
	fill(233,150,122);
	stroke(128,0,0);
	// text("How", 238,232);
	fill(0,206,209);
	stroke(210,105,30);
	// text("at", 340,308);



}
