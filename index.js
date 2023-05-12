var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
var counter1=0;
var counter2=0
var flag=false;
flag1=true;
var count=0;
$(document).keydown(function(event) {
  if (!started) {
    if (((event.key).toLowerCase() == "a" && flag1)  ||  (event.key).toLowerCase() == "r"  ) {
      $(".heading").text("level 0");
      $(".sub").remove();
      $(".heading").css("margin-bottom", "100px");
      nextSequence();
      flag=true;
      $("body").removeClass("game-over");
    }
    started = true;
    flag=true;
    flag1=false;
    count++;
  }
});


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);

  $(".after").remove();




}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


$(".btn").on("click", function() {
  if(flag){
  var userChosenpattern = $(this).attr("id");
  userClickedPattern.push(userChosenpattern);
  playSound(userChosenpattern);
  animatePress(userChosenpattern);
  check();
}

});
function check(){
  if (gamePattern[counter1] == userClickedPattern[counter1]) {
    if(gamePattern.length==userClickedPattern.length){
    level++;
    $(".heading").text("level " + level);
      setTimeout(function(){nextSequence();},500);
    counter1++;

  }
  }
  else{

    $("body").addClass("game-over");
    playSound("wrong");
    $(".heading").text("Opps!!")
    $("h1").css("margin-bottom","0px");
    $(".heading").after('<h4 class="after">Press <span><h1>R</h1></span> to Re-start the Game</h4>');
    flag=false;
    started=false;
    Restart();

  }


}

function Restart(){

  var gamePattern = [];
  var userClickedPattern = [];
  var level = 0;
  var started = false;
  var counter1=0;
  var counter2=0
  var flag=false;

}
function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");

  }, 100);
}
