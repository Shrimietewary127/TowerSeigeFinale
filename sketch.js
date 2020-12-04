const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var polygon,ground2;
var score=0;
var bg; 
function preload(){

  getBackgroundImg();


}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
	world = engine.world;
  
 
  ground=new Ground(450,300,250,10);
  ground2=new Ground(390,400,950,10);

    box1=new Box(390,235,30,40);
    box2=new Box(420,235,30,40);
    box3=new Box(450,235,30,40);
    box4=new Box(480,235,30,40);
    box5=new Box(510,235,30,40);
    box6=new Box(405,195,30,40);
    box7=new Box(435,195,30,40);
    box8=new Box(465,195,30,40);
    box9=new Box(495,195,30,40);
box10= new Box(450,155,30,40)

    polygon=Bodies.circle(50,200,20);
  World.add(world,polygon)
  
   slingshot=new SlingShot(this.polygon,{x:100,y:200})


}

function draw() {
   

  if(bg){
    background(bg);
  }
  else{
    background("red")

  }
  text("Score:"+score,650,40)
  Engine.update(engine);
ground2.display();
 ground.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();

 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();

 ellipseMode(RADIUS);
 fill('yellow')
 
 ellipse(polygon.position.x,polygon.position.y,20,20);
 
 slingshot.display();
 
  drawSprites();
}

  
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode===32){
    slingshot.attach(polygon);
  } 
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "blue";
  }
  else{
      bg = "black";
  }

  //backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
}