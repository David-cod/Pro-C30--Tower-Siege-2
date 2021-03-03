const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ground,stand1,stand2,block1,polygon,slingshot;

function preload(){


}
function setup(){
    var canvas=createCanvas(1200,800);
    engine=Engine.create();
    world=engine.world;

    polygon=new Polygon(200,200,6,30);
    slingshot=new Slingshot(polygon.body,{x:200,y:200});
    ground= new Ground(600,height,1200,20);
    stand1= new Ground(500,600,300,20)
    stand2= new Ground(900,400,300,20)
    block1=new Block(430,580,40,40,0);
    block2=new Block(470,580,40,40,0);
    block3=new Block(510,580,40,40,0);
    block4=new Block(550,580,40,40,0);
    block5=new Block(450,540,40,40,0);
    block6=new Block(490,540,40,40,0);
    block7=new Block(530,540,40,40,0);
    block8=new Block(470,500,40,40,0);
    block9=new Block(510,500,40,40,0);
    block10=new Block(490,460,40,40,0);

    block11=new Block(830,380,40,40,0);
    block12=new Block(870,380,40,40,0);
    block13=new Block(910,380,40,40,0);
    block14=new Block(950,380,40,40,0);
    block15=new Block(850,340,40,40,0);
    block16=new Block(890,340,40,40,0);
    block17=new Block(930,340,40,40,0);
    block18=new Block(870,300,40,40,0);
    block19=new Block(910,300,40,40,0);
    block20=new Block(890,260,40,40,0);
    

}

function draw(){
    background(0);
    Engine.update(engine)
    textSize(24);
    text("Drag and Release the Stone to launch it towards the blocks",200,200);
    ground.display();
    polygon.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();





}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){

    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body);

    }

}