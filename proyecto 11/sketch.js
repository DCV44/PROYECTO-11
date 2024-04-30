var sea;
var ship;

function preload(){
  shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200, 200);
  sea.scale = 0.2;

  sea.addImage(seaImg);
  sea.velocityX = -2;
  
  ship = createSprite(200, 200);
  ship.scale = 0.3;

  ship.addAnimation("ship", shipAnimation);
}

function draw() {
  background("blue");
  
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
  
  
  drawSprites();
}
