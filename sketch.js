var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  // creating boy running
  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples ();
  createOrange ();
  createRed ();

 drawSprites();
}

function createApples() {

  if (frameCount % 50 == 0) {
    
    apple = createSprite (350, 40, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 3;
    apple.x = Math.round (random (0,400));
    apple.y = Math.round (random (0,200));

  }

}

function createOrange() {

  if (frameCount % 80 == 0) {

    orangeL = createSprite (30,40, 10, 10);
    orangeL.addImage(orangeImg);
    orangeL.scale=0.08;
    orangeL.velocityY = 3;
    orangeL.x = Math.round (random (0,400));
    orangeL.y = Math.round (random (0,200));
  }
   
}

function createRed() { 

  if (frameCount % 80 == 0) {

    redL = createSprite(100,40, 10, 10);
    redL.addImage(redImg);
    redL.scale=0.06;
    redL.velocityY = 3;
    redL.x = Math.round (random(0,400));
    redL.y = Math.round (random(0,200));

  }
}
