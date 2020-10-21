
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	side1=new Ground(500,height-45,200,10);
	side2=new Ground(400,height-85,15,100);
	side3= new Ground(600,height-85,15,100);
	paper= new Box(200,100,20);
	Engine.run(engine);
	var options={
		isStatic:false,
		restituition:0.5,
		density:1.2
	}
	function keyPressed(){
		if(keyCode===UP_ARROW){
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		}
	}
}


display()
{
	var pos =this.body.position;
	pos.x=mouseX;
	pos.y=mouseY;
	var angle= this.body.angle;
	push  ();
	translate(pos.x,pos.y);
	rotate (angle);
	rectMode(CENTER);
	fill(255,0,0);
	rect(0,0, this.width, this.height);
	pop();}	
;

function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  side2.display();
  side3.display();
  paper.display();
 
}
