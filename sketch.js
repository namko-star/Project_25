
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var dustbinObject, paperObject, ground;

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(200, 420, 70);
	World.add(world, paperObject);
	dustbinObject = new Dustbin(1200,635);
	World.add(world, dustbinObject);
	ground = new Ground(width/2, 650, width, 10, {isStatic: true});
	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  paperObject.display();
  ground.display();
  dustbinObject.display();

  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:10, y:-10});
	}
}


