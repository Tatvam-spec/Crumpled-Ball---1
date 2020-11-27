
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1, wall2, wall3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1 = createSprite(600, 600, 5, 50);
	wall2 = createSprite(605, 650, 50, 5);
	wall3 = createSprite(655, 700, 5, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  




  drawSprites();
 
}



