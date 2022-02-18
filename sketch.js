
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground
var left
var right
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(200,650,1500,15)
left=new Ground(450,608,15,70)
right=new Ground(750,608,15,70)



	var ball_options={
		
		resitution:0.5,
		friction:0,
		density:0.8,
		isStatic:false
		
	}

	ball=Bodies.circle(200,640,10,ball_options);
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10,10)
ground.show()
left.show()
right.show()
Engine.update(engine)
  background();
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
if(keyCode === "UP_ARROW")
Matter.Body.applyForce(ball,ball.position,{x:80,y:-80})
//Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})


}

