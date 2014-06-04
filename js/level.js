
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0], //level 1//
          [0,0,0,0,3,3,0,0,0,0,0],
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
          [0,2,2,2,0,0,2,2,2,0,0],
          [0,2,2,2,0,0,2,2,2,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]], 
     3:  [[0,0,0,0,0,0,0,0,0,0,0], //level 3//
          [0,0,0,0,0,0,0,0,0,0,0]
          [0,0,0,0,0,0,0,3,3,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
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
    'alien1': { sx: 0,  sy: 0,  w: 23, h: 18, cls: Alien, frames: 1 }, // Pixel co ordinates for the sprite sheet.
    'alien2': { sx: 0,  sy: 18, w: 24, h: 15, cls: Alien, frames: 1 }, 
    'alien3': { sx: 0,  sy: 35, w: 35, h: 20, cls: Alien, frames: 1 },  
    'player': { sx: 0,  sy: 50, w: 45, h: 36, cls: Player, frames: 3 },
    'missile': { sx: 0, sy: 86, w: 3,  h: 14, cls: Missile }
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



