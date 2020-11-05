
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    red1 = new Dustbin(200,300,50,50);
    red2 = new Dustbin(510,610,20,100);
    
	groundSprite=createSprite(width/2, height-35, width,10);

    
    red3= new Dustbin(310,610,20,100);
    paper= new Paper(100,height,10)
	
	Engine.run(engine);
  
}

function draw(){
	rectMode(CENTER)
    background(0);
    Engine.update(engine);
    red1.display();
    red2.display();
	ground.display();
	
	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.setStatic(paper,false);
	 }
   }
