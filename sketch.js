
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(900,330,200,20);
  box2 = new Box(790,290,20,100);
	box3 = new Box(1010,290,20,100);
	ground = new Ground(0,350,2500,20);
  paper = new Paper(35,300,40);

  Engine.run(engine);

} 


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  


  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85});

}

}



