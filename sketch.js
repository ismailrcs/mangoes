
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var mango,grnd,stone,tree,boy1,boy;


function preload()
{
  
  
  boy1=loadImage("Plucking mangoes/boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  ground = new Ground(600,height,1200,20);

  boy = createSprite(100,20,50,50);
  boy = loadImage("boy1")
  tree1 = new Tree(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  tree1.display();
  drawSprites();
 
}



