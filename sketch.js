var wall,car;
var weight,speed;

function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 200, 30,200);
  car=createSprite(100,200,30,30);
  car.shapeColor="white";
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(0); 
  if(wall.x-car.x < car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5* weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}