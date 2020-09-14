var fixedRect, movingRect;
var bullet1,bullet2,wall1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  bullet1 = createSprite(20,300,20,20)
  bullet1.shapeColor = "yellow";
  bullet2 = createSprite(20,500,20,20)
  bullet2.shapeColor = "yellow";
  wall1 = createSprite(1000,400,50,400)

  bullet1.velocityX = +5;
  bullet2.velocityX = +5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}



function draw() {
  background(0,0,0); 
  
  bounceoff(fixedRect,movingRect);
  bounceoff(wall1,bullet1);
  bounceoff(wall1,bullet2);

  

 
  drawSprites();
}



function bounceoff(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2) {
  object2.velocityX = object2.velocityX * (-1);
  object1.velocityX = object1.velocityX * (-1);
}
if (object2.y - object1.y < object1.height/2 + object2.height/2
  && object1.y - object2.y < object1.height/2 + object2.height/2){
  object2.velocityY = object2.velocityY * (-1);
  object1.velocityY = object1.velocityY * (-1);
}
}