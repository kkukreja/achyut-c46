var backgroundImg;

var player, playerImage;

function preload() {
  backgroundImg = loadImage("Images/background.gif");
  playerImage = loadImage("Images/Soccer player.gif")
  
}

function setup() {

  createCanvas(400,400);

  player = new Player(200, 200, 120, 120)
  
  
}

function draw() {

  background(255);


  player.show();
}
