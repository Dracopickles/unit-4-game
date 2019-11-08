// making variables for crystals, 

var crystalNumbersOne = Math.floor(Math.random() * 12)+1;

var crystalNumbersTwo = Math.floor(Math.random() * 12)+1;

var crystalNumbersThree = Math.floor(Math.random() * 12)+1;

var crystalNumbersFour = Math.floor(Math.random() * 12)+1;

let gameNumber = Math.floor(Math.random() * 102)+19;

let userScore = 0;

let wins = 0;

let loses = 0;

// create a function that displays all your stats
const gameStartStats = function() {
$("#current-number").text(gameNumber);
console.log(gameNumber);
$("#usersNumber").text("Your Score: ",userScore);
console.log(userScore);
crystalMaker();
}

const crystalMaker = function() {
  let numberOptions = [crystalNumbersOne, crystalNumbersTwo, crystalNumbersThree, crystalNumbersFour];

  for (let i = 0; i < numberOptions.length; i++) {
    let imageCrystal = $("<img>");

    imageCrystal.addClass("crystalImage");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);


    $("#crystals").append(imageCrystal);
  }
}

let crystalClick = function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  
  userScore += crystalValue;
}

// create a function that resets game in the reset funtion you want to 
//set the total score back to zero and generate new random numbers. 
// and have it call first function for reset
const gameReset = function() {
  $("current-number").text(gameNumber);
  $("#users-number").text("Your Score: ",userScore);
  gameStartStats();
  crystalMaker();
} 

// create a function to check for the win and the first part is to 
//have a if statement to check if there number is equal to the gamenumber
//if so add to win and if they win call the reset function at the end
//and a else if, if the user score is greater then the number they lose
//increase there loses and call the reset the function
const checkingTheWin = function() {

  if (userScore === gameNumber){
    wins++,
    gameReset();

    document.getElementById("win-counter").innerHTML = " " + wins;
  }
  else if (userScore >= gameNumber){
    loses++,
    gameReset();
    document.getElementById("lose-counter").innerHTML = " " + loses;
  }

}

//create a document ready function at the bottom
//create on.clicks for crystals to be tied to there variables and reset function

gameStartStats();

$(".crystalImage").on("click", crystalClick);
checkingTheWin();
