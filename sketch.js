var helicopterIMG, helicopterSprite
var packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{  
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
} 

/*
function setup() {
	var canvas = createCanvas(800,700);
		//rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 50,50);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var change = {
		isStatic: true
	}


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,ball_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650,width, 10,change );
	 World.add(world, ground);
	 
	 var ball_options = {
		 restitution:3
	}


	Engine.run(engine);
	console.log(packageBody)
	console.log(packageBody.position.x)
	console.log(packageBody.position.y)

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 // rect(ground.position.x,ground.position.y,800,10)


  ellipseMode(RADIUS)
  ellipse(packageBody.position.x,packageBody.position.y,20,20)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  
    
  }
}*/







function setup(){
	//Matter.Body.setStatic(false)
	var canvas = createCanvas(600,600);
	 engine = Engine.create();
	 world = engine.world;

	 packageSprite=createSprite(width/2, 80, 50,50);
	 packageSprite.addImage(packageIMG)
	 packageSprite.scale=0.2

	 helicopterSprite=createSprite(width/2, 200, 10,10);
	 helicopterSprite.addImage(helicopterIMG)
	 helicopterSprite.scale=0.6
 
	var change={   
 
	   isStatic: true
 
	}

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

   

	ground = Bodies.rectangle(width/2,550,width,50,change); 
	World.add(world,ground);
 
	var ball_options={
	   restitution:0.6,isStatic:true}

	packageBody=Bodies.circle(width/2,200,5,ball_options);
	World.add(world,packageBody);
	
		packageBody.x = width/2
		packageBody.y = 200  
		packageBody.depth=helicopterSprite
 	    helicopterSprite.depth = helicopterSprite+1
	
	
    Engine.run(engine)
	console.log(packageBody);
	console.log(packageBody.position.x)
	console.log(packageBody.position.y);
 }
 
 function draw(){
 background(0);
 Engine.update(engine);
	 rectMode(CENTER);
	  packageSprite.x= packageBody.position.x 
     packageSprite.y= packageBody.position.y
	 ellipseMode(RADIUS)
	 ellipse(packageBody.position.x,packageBody.position.y,20,20)
	 drawSprites();

	 if(keyCode=== DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);}
 }


