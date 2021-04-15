
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var roofObj;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofObj=new Roof(400,250,230,20);

bobObj1=new Bob(320,575,40);
bobObj2=new Bob(360,575,40);
bobObj3=new Bob(400,575,40);
bobObj4=new Bob(440,575,40);
bobObj5=new Bob(480,575,40);

roofObj=new Roof(400,250,230,20);
rope1=new Rope(bobObj1.body,roofObj.body,-80,0);
rope2=new Rope(bobObj2.body,roofObj.body,-40,0);
rope3=new Rope(bobObj3.body,roofObj.body,0,0);
rope4=new Rope(bobObj4.body,roofObj.body,40,0);
rope5=new Rope(bobObj5.body,roofObj.body,80,0);

	Engine.run(engine);
  
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,
                                                        {x:-50,y:-45});
}
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  roofObj.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObj1.display();
  bobObj2.display();

  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  //keyPressed();
  
  drawSprites();
 
}

