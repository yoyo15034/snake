var snake;
var foodGroup;
var edges;

var score;
function preload(){

}


function setup(){
  createCanvas(300,300)
  foodGroup=createGroup();
  snake=createSprite(200,200,10,10);
  snake.shapeColor="white";
  score=0;
  edges=createEdgeSprites()
}


function draw(){

  background("black");

  textSize(18)
  text("Food : "+score,180,30)

  snake.bounceOff(edges);

  if(snake.isTouching(edges)){
    text("YOU LOOSE!!" , 100 ,150);
  }

  //movements of snake
  if (keyDown("up")) {
    snake.velocityX= 0;
    snake.velocityY=-4;
  }
  if (keyDown("down")) {
    snake.velocityX= 0;
    snake.velocityY=4;
  }
  if (keyDown("right")) {
    snake.velocityX= 4;
    snake.velocityY= 0;
  }
  if (keyDown("left")) {
    snake.velocityX= -4;
    snake.velocityY= 0;
  }
  
  
  for(var i=0; i<foodGroup.length ;i++){
      if (foodGroup.get(i).isTouching(snake)){
    foodGroup.get(i).destroy();
    score=score+2;
  }
 }
 
 if(score>=10){
  fill("red")
  textSize(16)
 text("YOU WON!!" , 80 ,200);
}

  foodRandom();
  
  drawSprites();
  
}
function foodRandom (){
  if(frameCount % 130===0){
  food=createSprite(random(20,280),random(20,280),10,10);
  food.shapeColor="red"
  foodGroup.add(food)
  }
  
}



