const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,music;
var girl;
var snow,olaf;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  music=loadSound("music.mp3")
}

function setup(){
    var canvas = createCanvas(3000,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    girl = new Girl(900,100,70,70);
   

    olaf = new Olaf(200,200,80,80);
    snow = new Snow(200,200,80,80);
}

function draw(){
    background(backgroundImg)
    Engine.update(engine);
 
    ground.display();
      girl.display();
      
    
     olaf.display();
     snow.display();
     music.play() ;   
}

function keyPressed(){

  if(keyCode===LEFT_ARROW){
    girl.velocityX=-5;
    
  }
}

//function keyPressed(){
 // if(keyCode === 32 && bird.body.speed<1){
   //   bird.trajectory=[];
    // slingshot.attach(bird.body);
 // Matter.Body.setPosition(bird.body,{x:200,y:50});

 // }
//}