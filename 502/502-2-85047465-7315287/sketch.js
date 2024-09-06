/*

Officer: 7315287
CaseNum: 502-2-85047465-7315287

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var EvidenceA = {
	Bit0: [ "protect", "charge", "sneeze"], 
	Bit1: [ "start", "plug", "plug"], 
	Bit2: [ "protect", "Edsger", "ALGOL"], 
	Bit3: [ "tug", "start", "radiate"], 
	Bit4: [ "mend", "protect", "syndicate"], 
	Bit5: [ "Governor Zuckerberg", "protect", "sneeze"], 
	Bit6: [ "sneeze", "charge", "charge"], 
	Bit7: [ "$200,000", "radiate", "clip"], 
	Bit8: [ "mend", "radiate", "plug"], 
	Bit9: [ "succeed", "meddle", "campaign"]
};

var EvidenceB = {
	Bit0: [ "Hopper", "stuff", "plug"], 
	Bit1: [ "fence", "start", "radiate"], 
	Bit2: [ "consider", "charge", "fence"], 
	Bit3: [ "hurry", "stuff", "mend"], 
	Bit4: [ "tug", "smile", "sneeze"], 
	Bit5: [ "sneeze", "succeed", "hit"], 
	Bit6: [ "radiate", "charge", "mend"], 
	Bit7: [ "stuff", "meddle", "mend"], 
	Bit8: [ "charge", "sneeze", "a donation"], 
	Bit9: [ "radiate", "plug", "meddle"]
};

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
  redactedText = "Dear "+ EvidenceA.Bit5[0]+" I am sure that something could be worked out in terms of "+ EvidenceB.Bit8[2]+" for your "+ EvidenceA.Bit9[2]+". How does "+ EvidenceA.Bit7[0]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+ EvidenceB.Bit0[0]+" needs to be out of the picture. She’s caused enough trouble. Get the "+ EvidenceA.Bit4[2]+" to organise the "+ EvidenceB.Bit5[2]+" but I’d prefer it you don’t mention me or "+ EvidenceA.Bit2[2]+" I owe them enough favours already. Your old friend, "+ EvidenceA.Bit2[1];

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
