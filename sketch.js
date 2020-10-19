const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world
var box,ground

function setup() {
  createCanvas(1800,1000);
  engine=Engine.create();
  world=engine.world;

  var options={
    restitution:4,
    density:200
  }

  box=Bodies.circle(1200,200,30,options);
  World.add(world,box);

  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(900,980,1800,20,option);
  World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  drawSprites();
  ellipseMode(CENTER);
  ellipse(box.position.x,box.position.y,100)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1800,20) 


}