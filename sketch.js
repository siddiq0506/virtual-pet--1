//Create variables here
var hungryDog,happyDog,dog,database,foodStock;
function preload()
{
  //load images here
  hungryDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  

  dog = createSprite(250,300,20,20);
  dog.addImage(hungryDog)

  dog.scale = 0.4 ;

  database = firebase.database();

 database.ref("food").on("value",function(data){
  foodStock = data.val();
 });
                                             
 

}
  

function draw() {  

  background("yellow")
  

if(keyDown(UP_ARROW)){
  writeStock(foodStock);
  dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
textSize(25)
text("food remaining:" + foodStock,130,150);

text("Press Up Arrow Key To Feed Drago",130,120);



}

function writeStock(x){

if(x<0){
  x = 0;
}
  else{
    x = x-1
  }

  database.ref("/").update({
    food:x
  })

}

