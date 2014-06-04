
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0], //level 1//
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,1,1,0,1,1,1,0,0],
          [0,0,1,1,1,0,1,1,1,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     2:  [[0,0,0,0,0,0,0,0,0,0,0], //level 2//
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,2,2,2,0,0,2,2,2,0,0],
          [0,2,2,2,0,0,2,2,2,0,0],
          [0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]], 
     3:  [[0,0,0,0,0,0,0,0,0,0,0], //level 3//
          [0,0,0,0,0,0,0,0,0,0,0]
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,2,2,2,0,0,0,2,2,2,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,1,1,1,1,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]], 
     
      // this changes how many aliens per leve. 1 is the blue ufo, 2 is the orange, 3 is the bigger white one. 
  
  
  };

/* sprite data of sprite sheet */ 
  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 38, h: 22, cls: Alien, frames: 3 }, // Pixel co ordinates for the sprite sheet.
    'alien2': { sx: 0,  sy: 22, w: 38, h: 22, cls: Alien, frames: 3 }, 
    'alien3': { sx: 0,  sy: 33, w: 33, h: 20, cls: Alien, frames: 2 },  
    'player': { sx: 0,  sy: 84, w: 42, h: 53, cls: Player, frames: 3 },
    'missile': { sx: 0, sy: 143, w: 5,  h: 14, cls: Missile }
   /* 'sheild': { sx: 0,  sy: 53, w: 45, h: 32, cls: Shield }, */

  }

  
  /* MENU LIST */ 
  function startGame() {
    var screen = new GameScreen("UFO ATTACK","press space to start mission",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }


/* End of game message */

  function endGame() {
    var screen = new GameScreen("Game Over","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


/* player wins message */

  function winGame() {
    var screen = new GameScreen("Player Wins!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }



  $(function() {
    GameAudio.load({ 'fire' : 'media/laser.ogg', 'die' : 'media/explosion.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
         
                                        { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



