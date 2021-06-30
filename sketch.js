var runner,runnerrunning;
var path1
var ls
var rs

function preload(){
  //pre-load images
  track=loadImage('path.png')
  runner1=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
    path1=createSprite(200,200,400,400)
    path1.velocityY=3
    runner=createSprite(200,200,10,10)
    runner.scale=0.05
    path1.addImage(track);
    ls=createSprite(100,200,5,400)
    runner.addAnimation('running',runner1) 
    rs=createSprite(300,200,5,400)
    rs.visible=false;
    ls.visible=false
}
function draw() {
  background("black");
  runner.x=World.mouseX

if(path1.y>400){
  path1.y=height/2
}
runner.collide(rs);
runner.collide(ls);


drawSprites()

}
