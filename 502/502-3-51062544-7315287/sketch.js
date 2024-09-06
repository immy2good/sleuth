/*

Officer: 7315287
CaseNum: 502-3-51062544-7315287

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var ADocument = [
{
	Element0: ["bake", "plug", "rejoice", "consider"], 
	Element1: ["plug", "sneeze", "protect", "sail"], 
	Element2: ["ALGOL", "consider", "charge", "mend"]
},
{
	Element0: ["tug", "ALGOL fish wholesalers", "meddle", "Edsger"], 
	Element1: ["tug", "fence", "hurry", "play"], 
	Element2: ["fence", "hurry", "succeed", "fence"]
},
{
	Element0: ["tug", "play", "bake", "development"], 
	Element1: ["stuff", "charge", "radiate", "consider"], 
	Element2: ["protect", "tug", "succeed", "tug"]
},
{
	Element0: ["play", "sail", "syndicate", "play"], 
	Element1: ["meddle", "plug", "mend", "consider"], 
	Element2: ["play", "start", "clip", "bake"]
},
{
	Element0: ["sail", "charge", "consider", "bake"], 
	Element1: ["play", "smile", "consider", "stuff"], 
	Element2: ["tug", "meddle", "stuff", "$200,000"]
}];

var BDocument = [
{
	Element0: ["meddle", "hurry", "radiate", "tug"], 
	Element1: ["sneeze", "smile", "mend", "stuff"], 
	Element2: ["play", "tug", "smile", "radiate"]
},
{
	Element0: ["you", "meddle", "consider", "rejoice"], 
	Element1: ["Governor Zuckerberg", "smile", "sneeze", "charge"], 
	Element2: ["charge", "sail", "plug", "succeed"]
},
{
	Element0: ["hurry", "fence", "plug", "bake"], 
	Element1: ["meddle", "fence", "rejoice", "protect"], 
	Element2: ["plug", "radiate", "stuff", "start"]
},
{
	Element0: ["start", "bake", "bake", "hurry"], 
	Element1: ["radiate", "plug", "play", "clip"], 
	Element2: ["play", "fence", "clip", "meddle"]
},
{
	Element0: ["protect", "bake", "meddle", "COBOL"], 
	Element1: ["consider", "mend", "donation", "sail"], 
	Element2: ["protect", "consider", "protect", "mend"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
//   redactedText = "My dearest ++++++, I have just received your very generous ++++++++ of ++++++++. Thank you. This will be invaluable to our campaign. +++++ is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of +++ or ++++++++++++++++++++++ to the +++++++++. Your new +++++++++++ at the +++++ can now proceed without impediment. Yours sincerely, +++++++++++++++++++";

redactedText = "My dearest "+ ADocument[1].Element0[3]+" I have just received your very generous "+ BDocument[4].Element1[2]+" of "+ ADocument[4].Element2[3]+" Thank you. This will be invaluable to our campaign. "+ ADocument[0].Element2[0]+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+ BDocument[1].Element0[0]+" or "+ ADocument[1].Element0[1]+" to the "+ ADocument[3].Element0[2]+". Your new "+ ADocument[2].Element0[3]+" at the "+ BDocument[4].Element0[3]+" can now proceed without impediment. Yours sincerely, "+ BDocument[1].Element1[0];

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
