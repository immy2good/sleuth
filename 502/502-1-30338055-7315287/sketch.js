/*

Officer: 7315287
CaseNum: 502-1-30338055-7315287

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var Record_A = [
	{Detail_0: "succeed", Detail_1: "fence", Detail_2: "Governor Zuckerberg"}, 
	{Detail_0: "play", Detail_1: "plug", Detail_2: "sail"}, 
	{Detail_0: "succeed", Detail_1: "tug", Detail_2: "protect"}, 
	{Detail_0: "tug", Detail_1: "mend", Detail_2: "Edsger"}, 
	{Detail_0: "fence", Detail_1: "bake", Detail_2: "sneeze"}, 
	{Detail_0: "meddle", Detail_1: "stuff", Detail_2: "meddle"}, 
	{Detail_0: "rejoice", Detail_1: "rejoice", Detail_2: "play"}, 
	{Detail_0: "play", Detail_1: "play", Detail_2: "meddle"}, 
	{Detail_0: "fence", Detail_1: "meddle", Detail_2: "stuff"}, 
	{Detail_0: "syndicate", Detail_1: "stuff", Detail_2: "play"}
];

var Record_B = [
	{Detail_0: "radiate", Detail_1: "play", Detail_2: "stuff"}, 
	{Detail_0: "start", Detail_1: "smile", Detail_2: "COBOL"}, 
	{Detail_0: "Hopper’s", Detail_1: "succeed", Detail_2: "rejoice"}, 
	{Detail_0: "succeed", Detail_1: "meddle", Detail_2: "capital"}, 
	{Detail_0: "start", Detail_1: "sail", Detail_2: "she has"}, 
	{Detail_0: "rejoice", Detail_1: "a donation", Detail_2: "succeed"}, 
	{Detail_0: "start", Detail_1: "delicate", Detail_2: "sail"}, 
	{Detail_0: "sail", Detail_1: "start", Detail_2: "radiate"}, 
	{Detail_0: "bake", Detail_1: "romantic", Detail_2: "protect"}, 
	{Detail_0: "protect", Detail_1: "protect", Detail_2: "hurry"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + Record_A[3].Detail_2 + " Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about  " + Record_B[2].Detail_0+ "  intervention. I suspect that  " + Record_B[4].Detail_2+ "  a  " + Record_B[8].Detail_1+ "  interest at the  " + Record_B[1].Detail_2+ "  I and the  " + Record_A[9].Detail_0+ "  appreciate your many contributions over the years. However, this is a most  " + Record_B[6].Detail_1+ "  matter which would require significant  " + Record_B[3].Detail_2+ "  for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps  " + Record_B[5].Detail_1 + "  to my forthcoming campaign would help. Yours sincerely,"+ Record_A[0].Detail_2;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
