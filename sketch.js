const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, b1, b2, b3, b4;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  ground = new Ground(240,793,480,10);
  b1 = new Borders(475,400,5,800);
  b2 = new Borders(5,400,5,800);
  b3 = new Borders(240,795,480,5);
  b4 = new Borders(240,5,480,5);

  for(var i = 0;i<=width;i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j= 40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j= 15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j= 40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j= 15; j<=width;j=j+50){
    plinkos.push(new Plinko(j,375));
  }``
  
}

function draw() {
  Engine.update(engine);
  background(0);  

  for(var i=0;i< plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var i=0;i< divisions.length;i++){
    divisions[i].display();
  }

  for(var i=0;i< particles.length;i++){
    particles[i].display();
  }

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  ground.display();
  drawSprites();
}