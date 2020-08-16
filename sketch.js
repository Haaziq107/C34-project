//Create variables here
var dog, happyDog, database, foodS, foodStock,dogsad;
var NOTE;

function preload(){
  //load images here
  dogsad=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog = createSprite(250,250);
  dog.addImage(dogsad);
  dog.scale=0.1;

  var foodStockRef=database.ref('Food');
  foodStockRef.on("value",readStock);
  textSize (15)
  fill("black");
}

function draw() {  
  background(46, 139, 87);
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
  text("Note:Press UP_ARROW key To Feed Drago Milk! ",100, 100);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
});
}
  