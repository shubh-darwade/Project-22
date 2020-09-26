var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,helipad;
var soldier,soldierImg,zombie,zombieImg,missioncomp,missioncompImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	soldierImg=loadImage("soldier.png");
	zombieImg=loadImage("zombie.png");
	missioncompImg=loadImage("completed.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	zombie=createSprite(100,610,20,10);
	zombie.addImage(zombieImg)
	zombie.scale=0.2;

    soldier=createSprite(250,460,20,10);
	soldier.addImage(soldierImg)
	soldier.scale=0.2;
	 
	missioncomp=createSprite(width/2,200,10,10);
	missioncomp.addImage(missioncompImg);
	missioncomp.scale=1;
	missioncomp.visible=false;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.5,isStatic:true});
	World.add(world, packageBody);
		
	helipad =Bodies.rectangle(width/2,500,width,10,{isStatic:true})
    World.add(world, helipad);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 rect(width/2,515,450,10)
 rect(620,589,10,140)
 rect(180,589,10,140)

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y ;
  


  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	missioncomp.visible=true;
	
  }
}


