const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var push;
var ball1,ball2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 pushb = createImg("push.png")
 pushb.position(50,50)
 pushb.size(50,50)
 pushb.mouseClicked(down)
  rectMode(CENTER);

  ellipseMode(RADIUS);
  ball1 = new Ball(200,200,50)
  ball2 = new Ball(100,100,25)

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ball1.display()
  ball2.display()
}
function down(){
  Matter.Body.applyForce(ball1.body,{x:0,y:0},{x:0,y:-0.05})
Matter.Body.applyForce(ball2.body,{x:0,y:0},{x:2,y:1.5})

}
