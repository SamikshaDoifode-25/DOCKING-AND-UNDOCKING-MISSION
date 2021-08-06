var iss, internationalSpaceStation;
var spacebg;
var spacecraft1, spaceCraft, spacecraft2, spacecraft3,  spacecraft4;
var hasDocked = false;
function preload(){
  iss=loadImage("images/iss.png");
  spacebg=loadImage("images/spacebg.jpg");
spacecraft1=loadImage("images/spacecraft1.png");
spacecraft2=loadImage("images/spacecraft2.png");
spacecraft3=loadImage("images/spacecraft3.png");
spacecraft4=loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  internationalSpaceStation = createSprite(400, 200);
  internationalSpaceStation.addImage(iss);

  spaceCraft=createSprite(345, 330, 50, 50);
spaceCraft.addImage(spacecraft1);
spaceCraft.scale=0.2;

}

function draw() {
  background(spacebg);  

if(!hasDocked){
  
spaceCraft.x=spaceCraft.x+(random(-1, 1));

if(keyDown("left")){
spaceCraft.addImage(spacecraft3);
spaceCraft.scale=0.2;
spaceCraft.x -= 5;
}

if(keyDown("right")){
  spaceCraft.addImage(spacecraft4);
  spaceCraft.scale=0.2;
  spaceCraft.x += 5;
  }

  if(keyDown("down")){
    spaceCraft.addImage(spacecraft2);
    spaceCraft.scale=0.2;
    }

    if(keyDown("up")){
      spaceCraft.addImage(spacecraft2);
      spaceCraft.scale=0.2;
      spaceCraft.y -= 5;
  }
}

  if(spaceCraft.y<=(iss.y+70) && spaceCraft.x<=(iss.x-10)){

    hasDocked=true;
    textSize(20);
    fill("white");
text("Docking Successful", 200, 380);
}

  drawSprites();
}