var PLAY = 1
var END = 0


var monkey, monkeyrunning
var banana, bananaimage, obstacle, obstacleimage
var foodgroup, obstaclegroup, ground
var score
var gameState = PLAY
obstaclegroup
function preload() {


  monkeyrunning = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 500);

  ground = createSprite(10, 350, 450, 10)
  // ground.velocityX=-4;

  obstaclegroup = new Group()

 // Background = createSprite(0, 0, 500, 500)
 // Background.shapeColor = "yellow"

  monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkeyrunning);
  monkey.scale = 0.1
  
bananagroup=new Group()
  
  


  score = 0

}

function draw() {
  background("yellow")
  if (gameState === PLAY) {


    if (ground.x < 0) {
      ground.x = ground.width / 2
    }
  
    if(keyDown("space")&& monkey.y >=220)
{
  monkey.velocityY=-12;
}
    
    monkey.velocityY = monkey.velocityY + 0.8

    text("Score: " + score, 400, 400);



    if (frameCount % 100 === 0) {
      //obstaclegroup.add(obstacle)
      //obstacle = createSprite(600,165,10,40)
      obstacle = createSprite(400, 315, 50, 50)
      obstacle.addAnimation("stopper", obstacleImage)
      obstacle.scale = 0.2
      obstacle.velocityX = -4
      
        obstaclegroup.add(obstacle)
    }

    monkey.collide(ground)
   //monkey.collide(bananagroup)
    
   
  if (frameCount % 100 === 0){
   banana = createSprite(500, 200, 10, 20)
  banana.addAnimation("fruit", bananaImage)
  banana.scale = 0.1
  banana.velocityX = -4;    
  bananagroup.add(banana)}
  if(bananagroup.isTouching(monkey)){
  bananagroup.destroyEach()
    
    score=score+2 
  }
    
    if (obstaclegroup.isTouching(monkey)) {
      gameState = END
    }  
    
    
    drawSprites();
  }

  if (gameState === END) {
text("END",250,250);
    //monkey.velocityX = 0
    //ground.velocityX = 0
    obstaclegroup.setVelocityXEach(0);
   // banana.velocityX = 0
    score = 0
  }
}