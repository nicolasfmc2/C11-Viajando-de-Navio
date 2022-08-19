var mar,marImg
var navio,navioImg
function preload(){
  navioImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  marImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite (0,200,400,400)
  mar.addImage("mar",marImg);
  mar.scale = 0.3;
  
  navio = createSprite(100,200,30,30)
  navio.addAnimation("navio",navioImg);
  navio.scale = 0.25;
}

function draw() {
  background("blue");
    
  mar.velocityX = -3
  
    if(mar.x < 0 ){
      mar.x = mar.width/8;
     }
     
     drawSprites();
}


