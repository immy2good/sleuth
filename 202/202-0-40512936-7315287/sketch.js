/*

Officer: 7315287
CaseNum: 202-0-40512936-7315287

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Royal Blue text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(523,631);
	textFont(letterFont);
	textSize(31);
}

function draw()
{
	background(255);

	fill(218,112,214);
	// text("?", 321,93);
	// text("love.", 355,426);
	fill(160,82,45);
	// text("confession", 197,93);
	fill(0,0,139);
	// text("of", 91,295);
	// text("that", 21,426);
	fill(0,191,255);
	// text("the", 21,194);
	fill(233,150,122);
	// text("I", 93,393);
	// text("the", 208,127);
	fill(184,134,11);
	// text("from", 201,393);
	fill(0,0,128);
	// text("in", 173,127);
	fill(135,206,235);
	// text("one", 243,426);
	fill(144,238,144);
	// text("music", 360,158);
	fill(219,112,147);
	// text("May", 17,93);
	fill(238,232,170);
	// text("eyes.", 364,295);
	fill(75,0,130);
	// text("like", 147,158);
	// text("bless", 258,158);
	fill(0,0,255);
	// text("s", 471,393);
	fill(255,0,0);
	// text("Love", 17,488);
	fill(64,224,208);
	// text("person", 18,231);
	fill(75,0,130);
	// text("and", 84,488);
	fill(0,206,209);
	// text("fir", 18,361);
	fill(0,128,128);
	// text("my", 72,327);
	// text("the", 409,327);
	// text("you", 78,426);
	fill(128,0,0);
	// text("sunny", 117,327);
	fill(255,127,80);
	// text("make", 115,93);
	fill(34,139,34);
	// text("Ever", 18,264);
	// text("face,", 19,393);
	fill(65,105,225);
	text("a", 169,93);
	text("second", 401,393);
	fill(153,50,204);
	// text("x", 77,550);
	fill(178,34,34);
	// text("s", 88,264);
	fill(106,90,205);
	// text("lov", 64,31);
	fill(0,100,0);
	// text("the", 204,158);
	fill(50,205,50);
	// text("ince", 97,264);
	fill(25,25,112);
	// text("when", 434,93);
	fill(240,230,140);
	// text("lovely", 377,361);
	fill(240,128,128);
	// text("the", 284,194);
	// text("saw", 269,361);
	// text("last", 202,264);
	fill(255,99,71);
	// text("luckiest", 338,194);
	fill(210,105,30);
	// text("From", 343,327);
	fill(107,142,35);
	// text("were", 127,426);
	fill(135,206,235);
	// text("only", 406,264);
	// text("your", 303,231);
	fill(218,165,32);
	// text("darling,", 190,295);
	fill(139,0,139);
	// text("kisses,", 138,488);
	// text("hear", 430,127);
	// text("think", 23,295);
	fill(0,128,0);
	// text("voice", 77,158);
	// text("be", 236,194);
	// text("green", 282,295);
	fill(154,205,50);
	// text("your", 20,158);
	fill(0,100,0);
	// text("Oh", 17,31);
	fill(0,255,255);
	// text("our", 158,264);
	fill(255,105,180);
	// text("of", 428,158);
	fill(0,206,209);
	// text("few", 338,393);
	// text("moment", 83,361);
	fill(255,165,0);
	// text("must", 177,194);
	fill(186,85,211);
	// text("am", 61,127);
	fill(0,250,154);
	// text("ed", 312,158);
	// text("can", 357,264);
	fill(152,251,152);
	// text("I", 392,127);
	fill(127,255,0);
	// text("alive", 98,231);
	// text("true", 296,426);
	// text("quiet", 262,127);
	fill(65,105,225);
	text("April", 279,327);
	text("chosen", 360,231);
	text("date", 252,264);
	fill(222,184,135);
	// text("al", 104,127);
	fill(72,209,204);
	// text("your", 133,295);
	// text("Daisy,", 140,31);
	fill(147,112,219);
	// text("your", 320,361);
	fill(210,105,30);
	// text("Bob", 17,550);
	fill(72,209,204);
	// text("I", 222,231);
	// text("It", 355,93);
	fill(210,105,30);
	// text("I", 139,194);
	// text("is", 401,93);
	// text("that", 165,231);
	fill(218,165,32);
	// text("my", 198,426);
	fill(0,139,139);
	// text("one", 120,127);
	// text("in", 244,327);
	// text("I", 77,93);
	fill(72,209,204);
	// text("are", 20,327);
	fill(147,112,219);
	// text("that", 335,127);
	fill(0,139,139);
	// text("day", 188,327);
	fill(32,178,170);
	// text("ely", 89,31);
	fill(255,140,0);
	// text("knew", 131,393);
	fill(244,164,96);
	// text("I", 231,361);
	fill(255,165,0);
	// text("harp.", 75,194);
	fill(210,105,30);
	// text("I", 319,264);
	fill(72,209,204);
	// text("am", 260,231);
	fill(148,0,211);
	// text("those", 266,393);
	fill(135,206,250);
	// text("You", 440,295);
	fill(255,215,0);
	// text("that", 174,361);
	// text("st", 49,361);
	fill(255,165,0);
	// text("I", 23,127);



}
