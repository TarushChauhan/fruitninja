var PLAY=1;
var END=0;
var Gamestate=1
var  fruit,fruit1,fruit2,fruit3,fruit4,fruit
var monster,monsterImage
var gameover
var knife_sound, gameover_sound
var sword, swordImage

var score

function preload(){
swordImage=loadImage("sword.png")
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  monsterImage=loadAnimation("alien1.png","alien2.png")
  gameover=loadImage("gameover.png")
  knife_sound=loadSound("knifeSwooshSound.mp3")
  gameover_sound=loadSound("gameover.mp3")
 
}
function setup(){
  createCanvas(600,600)
  
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale=0.7;
  
  score=0
  fruitGroup=createGroup()
  enemyGroup=createGroup()
  
  sword.setCollider("rectangle",0,0,40,40)
  
  score=0;
  fruitGroup=new Group()
  enemyGroup=new Group()
  
}

function draw(){
  background("lightblue")
  
  if(Gamestate===PLAY){
    sword.y=World.mouseY;
    sword.x=World.mouseX;
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2
    knife_sound.play();
  }
 fruits()
  enemy()
 
  if(enemyGroup.isTouching(sword)){
    Gamestate=END;
  }
   
   }
  
   if(Gamestate===END){
    gameover_sound.play();
   fruitGroup.destroyEach();
  enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0)
    enemyGroup.setVelocityXEach(0)
    sword.addImage(gameover)
    sword.x=200;
    sword.y=200;
     
     
  }
  
  
  drawSprites()
  
   
 text("score :"+score,270,30)
  textSize=20; 

}
function fruits(){
  
if(frameCount%80===0){
  fruit=createSprite(400,200,20,20)
  fruit.scale=0.2
  
  r=Math.round(random(1,4));
  if (r===1){
 fruit.addImage(fruit1)
  } else if(r===3){
   fruit.addImage(fruit2) 
  }else if (r===3){
    fruit.addImage(fruit3)
  }else {
    fruit.addImage(fruit4)
  }
    
  fruit.y=Math.round(random(50,340))  
    
 fruit.velocityX=-7   
 fruit.setLifetime=100
  
  fruitGroup.add(fruit);
  
  
   position = Math.round (random(1,2))
    fruit=createSprite(400,200,20,20)
    fruit.addImage(fruit1)
  fruit.scale=0.3
  fruit.y=Math.round(random(50,340)) 
   fruitGroup.add(fruit);
    
    if(position==1)
    {
    fruit.x=400
      fruit.velocityX=-(7+(score/4))
       }
    else
    {
    if(position==2)  {
       fruit.x=0
      
      
      
      
      
      fruit.velocityX=(7+(score/4))
       } 
    }
} 
}

function enemy(){
 if(frameCount%200===0) {
monster=createSprite(400,400,20,20) 
monster.addAnimation("moving",monsterImage)    
monster.y=Math.round(random(100,300));  
monster.velocityX=-3
monster.setLifetime=500
   
   enemyGroup.add(monster);
    }
  
  
}

