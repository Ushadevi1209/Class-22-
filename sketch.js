const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var options = {
    isStatic: true
    }
    ground = Bodies.rectangle(180,390,500,20,options);
    World.add(world,ground);
    var ball_options = {
    restitution: 1.0
    }
    ball = Bodies.circle(50,50,20,ball_options);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode();
   rect(ground.position.x,ground.position.y,50,50);
   ellipse(ball.position.x,ball.position.y,20,20);
}
