var hero, boy, button, button2, paddle, paddle2, ball, computerscore, playerscore, edges, obstaclesGroup

var gameState = "level";
var Pongstate = "serve";
var time,t;
function preload() {
  //backgrounds

  bc1Img = loadImage("bc1.png")
  fireImg = loadImage("fire.png")
  obImg1 = loadImage("ob1.png")
  obImg2 = loadImage("ob2.png")
  obImg3 = loadImage("ob3.png")

  heroImg = loadImage("hero1.png")

  boy1 = loadImage("kidHappy.png")
  boy2 = loadImage("kidSad.png")
  playImg = loadImage("play.png")
  gameoverImg = loadImage("gameover.png")
}



function setup() {
  createCanvas(400, 400);

  bc1 = createSprite(200, 200)
  bc1.addImage(bc1Img)
  bc1.scale = 2.2
  bc1.visible = false

  hero = createSprite(50, 50);
  hero.addAnimation("flying", heroImg);
  hero.scale = 0.4;
  hero.visible = false

  boy = createSprite(370, 350)
  boy.addImage(boy2)
  boy.scale = 0.4;
  boy.visible = false

  playbutton = createSprite(210, 358)
  playbutton.addImage(playImg)
  playbutton.scale = 0.5

  gameover = createSprite(200, 200)
  gameover.addImage(gameoverImg)
  gameover.visible = false


  //groups
  obGroup = new Group();
  fireGroup = new Group();
   time=20;
  
}


function draw() {
  background("white")

  bc1.visible = true
  if (mousePressedOver(playbutton)) {
    gameState = "level1"
  }


  if (gameState === "level1") {
    //background("red")
    bc1.visible = false
    playbutton.visible = false
    hero.visible = true
    boy.visible = true
    maze();
    //hero movement
    heromove()
    // heroSlow()
    fire()
    //obs()
    if (hero.isTouching(boy)) {
      gameState = "level2";
    }
    if(fireGroup.isTouching(hero)){
      t=time-World.seconds
      if(t>0){
        text(t,200,50)
      }
      else{
        text("Time is up",150,60);
        hero.velocityX=0;
        hero.velocityY=0;
        hero.x=200;
        hero.y=200;
        fireGroup.destroyEach();
      }
    }

  }

  if (gameState === "level2") {
    maze().visible = false;
    fire.destroyEach();
    background(0)
  }

  drawSprites();
  text(mouseX + "," + mouseY, mouseX, mouseY)
}
function maze() {
  //var cardboard1 = createSprite(10, 70, 100, 20);
  //cardboard1.shapeColor = "brown";
  var cardboard2 = createSprite(100, 50, 20, 100);
  cardboard2.shapeColor = "brown";
  var cardboard3 = createSprite(150, 100, 120, 20);
  cardboard3.shapeColor = "brown";
  var cardboard4 = createSprite(50, 250, 20, 100);
  cardboard4.shapeColor = "brown";
  var cardboard5 = createSprite(130, 210, 100, 20);
  cardboard5.shapeColor = "brown";
  var cardboard6 = createSprite(10, 250, 100, 20);
  cardboard6.shapeColor = "brown";
  var cardboard7 = createSprite(200, 50, 20, 100);
  cardboard7.shapeColor = "brown";
  var cardboard8 = createSprite(150, 20, 100, 20);
  cardboard8.shapeColor = "brown";
  var cardboard9 = createSprite(250, 70, 20, 100);
  cardboard9.shapeColor = "brown";
  var cardboard10 = createSprite(270, 150, 100, 20);
  cardboard10.shapeColor = "brown";
  var cardboard11 = createSprite(330, 50, 100, 20);
  cardboard11.shapeColor = "brown";
  var cardboard12 = createSprite(340, 125, 20, 100);
  cardboard12.shapeColor = "brown";
  //var cardboard13 = createSprite(220, 250, 20, 100);
  //cardboard13.shapeColor = "brown";
  var cardboard14 = createSprite(330, 210, 150, 20);
  cardboard14.shapeColor = "brown";
  var cardboard15 = createSprite(100, 300, 20, 100);
  cardboard15.shapeColor = "brown";
  var cardboard16 = createSprite(140, 310, 90, 20);
  cardboard16.shapeColor = "brown";
  var cardboard17 = createSprite(10, 122, 50, 20);
  cardboard17.shapeColor = "brown";
  var cardboard18 = createSprite(175, 352, 20, 100);
  cardboard18.shapeColor = "brown";
  var cardboard19 = createSprite(280, 250, 20, 100);
  cardboard19.shapeColor = "brown";
  var cardboard20 = createSprite(350, 270, 120, 20);
  cardboard20.shapeColor = "brown";
  var cardboard21 = createSprite(250, 390, 100, 20);
  cardboard21.shapeColor = "brown";
 // var cardboard22 = createSprite(330, 370, 20, 100);
  //cardboard22.shapeColor = "brown";

}

function heromove() {
  if (keyDown("up")) {
    hero.y = hero.y - 7;
  }
  if (keyDown("down")) {
    hero.y = hero.y + 7;
  }
  if (keyDown("left")) {
    hero.x = hero.x - 7;
  }
  if (keyDown("right")) {
    hero.x = hero.x + 7;
  }
}
function fire() {
  if (World.frameCount % 28 === 0) {

    var fires = createSprite(random(10, 400), random(10, 400), 20, 20)
    fires.velocityX = -3;
    fires.addImage(fireImg)
    fires.scale = 0.2;
    fires.lifetime = 30
    fireGroup.add(fires)
  }
}
