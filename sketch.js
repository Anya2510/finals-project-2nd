
//creating variables
var bg , player_img , player , player_jump , invisibleGround , player_run;
var  enemy_jump,enemy_run,enemy;
function preload (){
bg=loadImage("image/bg.png");
player_img=loadAnimation("image/fight1.png","image/fight2.png","image/fight3.png","image/stand1.png","image/stand2.png")
player_jump=loadAnimation("image/jump1.png","image/jump2.png","image/jump3.png")
player_run=loadAnimation("image/run1.png","image/run2.png","image/run3.png","image/run5.png")
enemy_run=loadAnimation("image/enemy/run_000.png","image/enemy/run_001.png","image/enemy/run_002.png","image/enemy/run_003.png","image/enemy/run_004.png","image/enemy/run_005.png")
enemy_jump=loadAnimation("image/enemy/jump_000.png","image/enemy/jump_001.png","image/enemy/jump_002.png","image/enemy/jump_003.png","image/enemy/jump_004.png","image/enemy/jump_005.png")
} 
function setup (){
var canvas=createCanvas(1200,600);
player=createSprite(200,500,50,50);
player.addAnimation("img",player_img)
player.scale=1.5;
player.addAnimation("jump",player_jump)
invisibleGround=createSprite(600,500,1200,50);
invisibleGround.visible=false;
player.addAnimation("run",player_run)
}
console.log(player.y);
function draw (){
  background(bg);
if (keyDown("space")){
  player.changeAnimation("jump",player_jump);
  player.velocityY=-10;
}
else{
  player.changeAnimation("img",player_img);
}
if (keyDown("RIGHT_ARROW")){
  player.changeAnimation("run",player_run);
  player.velocityX=10;
}
else{
  player.velocityX=0;
}
player.setCollider("circle",0,0,20)
player.collide(invisibleGround);
player.velocityY=player.velocityY+2
//player.debug=true;
spawnEnemies();
spawnEnemies2();
  drawSprites();
}
function spawnEnemies(){
  if(World.frameCount%60===0){
  var rand=Math.round(random(150,600));
 var enemy=createSprite(1200,rand,50,50);
enemy.addAnimation("run",enemy_run);
enemy.scale=0.4;
  enemy.velocityX=-10;
}
}

function spawnEnemies2 (){
  if(World.frameCount%40===0){
    var rand1=Math.round(random(100,1000));
    var enemy1=createSprite(rand1,0,50,50);
    enemy1.addAnimation("run",enemy_run);
    enemy1.scale=0.4;
    enemy1.velocityY=10;
  }
}