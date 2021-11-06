noseX = "";
noseY = "";


function preload() {
    mario_gameover = loadSound("gameover.wav");
    mario_jump = loadSound("jump.wav");
    mario_coin = loadSound("coin.wav");
    mario_kick = loadSound("kick.wav");
    mario_die = loadSound("mariodie.wav");
    world_start = loadSound("world_start.wav");//variable holding the music played at the start of the game
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas_var = createCanvas(1240,336);//dimensions specific for mario game
    canvas_var.parent('canvas_element');//parent() is a p5.js function used to put canvas or any p5.js component like webcam 
    //live view inside a HTML div.
    //syntax: p5.js component.parent(html element)
    

    instializeInSetup(mario);//will load all the variables and functions needed for the mario game
    
    // Code for accessing the webcam and fixing its size
    video_var = createCapture(VIDEO);
    video_var.size(800,400);
    video_var.parent('game_console');//placing the webcam live view inside the html element

    //initializing the posenet model
    poseNet_var = ml5.poseNet(video_var, modelLoaded);
    //executing the posenent model.
    poseNet_var.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
    }
  }
   
function draw() {
    game();
}






