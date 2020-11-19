const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1,box2,box3,box4,box5;
var ground1;
var pig1;
var log1;

var bird1

function setup() {
  createCanvas(1200,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300,PI/2);

  box5 = new Box(810,160,70,70)
  log3 = new Log(760,120,150,PI/7)
  log4 = new Log(870,120,150,-PI/7)
  ground1 = new Ground(600,height,1200,20);

  bird1 = new Bird(100,100)

}

function draw() {
  background("black");  
  Engine.update(myEngine);
  
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird1.display();
}