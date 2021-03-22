var player,playerImg,bg,bgImg;
var score=0;
function preload()
{
bgImg=loadImage("images/snow pic1.jpg");
playerImg=loadImage("images/character1-removebg-preview.png");
}


function setup() {
  createCanvas(1300,600);
  bg=createSprite(650,300);
  bg.addImage("background",bgImg);
  bg.scale=1.5;
  bg.x=bg.width/2;
  player=createSprite(400, 500, 50, 50);
  player.addImage("player",playerImg);
  player.scale=0.5;
  player.velocityX=5;
}

function draw() {
  background("white");
  score=score+1;
  fill("red");
  text("Score : "+score,500,500);
  console.log(score);

  if (bg.x<0){
    bg.x=bg.width/2;

  }
  drawSprites();
}