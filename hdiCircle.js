//store the data
var table;

var rangeLow = 0.;
var rangeHigh = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noLoop();
  noFill();
  strokeWeight(2);
  // textAlign(CENTER);
  textSize(18);
  //load data into string array
  table = loadTable("GDI.txt", "tsv", "header", showData);

}

//call back function when table is loaded
function showData() {
  //count the rows in our table
  background(255);
  strokeWeight(.1);
  // ellipse(x1,y1,x2,y2);

  var count = table.getRowCount();
  var rowHeight = 20;
  var j = 2 * PI / count;
  for (var r = 0; r < count; r++) {

    // loop through all the columns

    var valf = table.getString(r, 3);
    var valm = table.getString(r, 4);
    // display the text on the canvas
    valf = parseFloat(valf);
    valm = parseFloat(valm);

    var femaleRadius = map(valf, rangeLow, rangeHigh, 0, windowHeight / 1.01);
    var maleRadius = map(valm, rangeLow, rangeHigh, 0, windowHeight / 1.01);
    arc(windowWidth / 2, windowHeight / 2, femaleRadius, femaleRadius, r * j, r * j + j, PIE);
    arc(windowWidth / 2, windowHeight / 2, maleRadius, maleRadius, r * j, r * j + j, PIE);

  }
}