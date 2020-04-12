class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    baby1 = createSprite(1000,50);
    baby1.addImage("baby1",baby1_img);
    baby2 = createSprite(1000,250);
    baby2.addImage("baby2",baby2_img);
    baby3 = createSprite(1000,450);
    baby3.addImage("baby3",baby3_img);
    baby4 = createSprite(1000,650);
    baby4.addImage("baby4",baby4_img);
    baby = [baby1,baby2,baby3,baby4];
  }

  play(){
    form.hide();
    

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("#c68767");
      image(track,-displayWidth*4,0,displayWidth*5,displayHeight);
      //score
      textSize(20);
    text("Score "+score,50,50);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var y = -100;
      var x;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 200;
        //use data form the database to display the cars in y direction
        x = displayWidth - allPlayers[plr].distance;
        console.log(allPlayers[plr].distance);
        baby[index-1].x = x;
        baby[index-1].y = y;

        if (index === player.index){
          baby[index - 1].shapeColor = "red";
          camera.position.x = baby[index-1].x;
          camera.position.y = displayHeight/2
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyCode=32) /*baby1.x==800 || baby1.x==500 && baby1.y==200 || baby1.y==100 || baby2.x==800 || baby2.x==500 && baby2.y==200 || baby2.y==100*/
  {
    text("yo",950,50);
  baby1.velocityY=-12 
  baby2.velocityY=-12 ;   

  score=score+1;
  }
    baby1.velocityY=baby1.velocityY+0.8  
    baby2.velocityY=baby2.velocityY+0.8;

   
    

   if(player.distance>3800)
   {

    gameState=2;
   }

    drawSprites();
  }
 end()
 {
console.log("Game Ended");
game.update(2);



 } 
}
