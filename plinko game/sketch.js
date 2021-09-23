const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);



  ground = new Ground (0,775,1000,25);
 
}

function draw() {
  background(0);  
  ground.display();
  //Engine.update(engine);
  fill ("white")
  text(mouseX + ',' + mouseY, mouseX, mouseY);
 
}