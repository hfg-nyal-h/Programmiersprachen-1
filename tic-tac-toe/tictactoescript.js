//HTML Verknüpfungen

let spielerEins = document.getElementById("inputEins").value;
let spielerZwei = document.getElementById("inputZwei").value;
const btnGenerate = document.getElementById("btnGenerate");

//variablen
let random = Math.random()
let gameStatus = false;
let currentPlayer = [];
let layoutUpdate = false; //Es wurde KEIN Spielfeld generiert
let spielfeldNumber = [];//Platzhalter zum generieren der Spielfeldgröße

//constanten

const playerX= "x";
const playerO= "o";

//SpielfeldArray
/*
let spielfeldArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
*/


//Zufällig generieren wer Beginnt
if (random > 0.5) {
  currentPlayer = playerX;
  $(".werIstDran").text(spielerEins+" ist dran")
  } 
else if (random <= 0.5) {
  currentPlayer = playerO;
  $(".werIstDran").text(spielerZwei+ " ist dran")
  }




//Spielfeld generieren n x n 
btnGenerate.addEventListener("click", function(){
let  spielfeldNumber = Number(document.getElementById("input").value);    //Die Zahl die im Eingabefeld Input steht wird verwendet

//Wenn Spiel im gange ist Button disablen
if (gameStatus === true) { 
  $("#btnGenerate").attr("disabled", true).click(function(){
  alert("Das Spielfeld kann nur neu generiert werden, wenn das Spiel nicht am laufen ist! Drück Reset")
  });

} //Wenn nicht dann Spielfeld enerieren
else {
  $('.spielfeld').empty(); //vor generieren Spielfeld leeren

  // Verschachtelte for Schleife
  for (let i = 0; i < spielfeldNumber; i++) {
  // i zählt spalte
  for (let j = 0; j < spielfeldNumber ; j++) {
  // j zählt zeile
  //let newId = 'Zeile'+j+'Spalte'+i 
  let newId = j+"_"+i 
  $(".spielfeld").append("<div id=" + newId + " class='gitter'></div>");


  }}

  $(".spielfeld").css( "grid-template-columns", "repeat(" + spielfeldNumber + ", 1fr)" ); //style von spielfeld auf neues grid anpassen

  layoutUpdate = true; // Spielfeld wurde generiert
  }});



//Current Player, abwechselnde Spielzüge

$(".spielfeld").on("click", "div", function(){
  this.classList.add(currentPlayer), //bei click klasse "x" oder "o" hinzufügen
  $(this).css({"pointer-events" : "none"}); // unclickbar (wegen no pointer event) nachdem geclickt
  
  console.log("Field with coordinates " + this.id.split("_")[0] + "|" + this.id.split("_")[1] + " is set to " + currentPlayer)

  gameStatus = true;
  let x = Number(this.id.split("_")[0]);
  let y = Number(this.id.split("_")[1]);
  checkWinner(x, y, currentPlayer);

  if (currentPlayer === playerO) {
    currentPlayer = playerX ;
    $(".werIstDran").text(spielerEins+" ist dran")
  }
  else if (currentPlayer === playerX){
    currentPlayer = playerO;
    $(".werIstDran").text(spielerZwei+" ist dran")
  }
})

//Button Reset
$("#btnReset").click(function(){
  $("#spielfeld").children("div").css({
    "pointer-events" : "all",
  }).removeClass([ "x", "o" ]) //entfernt Klassen bei reset
  $(".werHatGewonnen").text("");
  $(".werIstDran").fadeTo("slow", 1.0);
  gameStatus = false;
});


//Player Name Input
$("#inputEins").on('input', function () {
  spielerEins = document.getElementById("inputEins").value;
  if (currentPlayer = playerX) {
      $(".werIstDran").text(spielerEins + " ist dran");
  }
});
$("#inputZwei").on('input', function () {
  spielerZwei = document.getElementById("inputZwei").value;
  if (currentPlayer = playerO) {
      $(".werIstDran").text(spielerZwei + " ist dran");
  }
});





//Gewinnerkennung
function checkWinner(x, y, currentPlayer){
  let size = Number(document.getElementById("input").value);

  let isHorizontal = checkHorizontal(y, size, currentPlayer)
  let isVertical = checkVertical(x, size, currentPlayer)
  let isDiagonal = checkDiagonal(size, currentPlayer)

  if (isHorizontal|| isDiagonal || isVertical) {


  if(currentPlayer ===playerX){
    $(".werHatGewonnen").text(spielerEins + " hat gewonnen");
    $("#counterErgebnisEins").append("<img src='strich.png' alt='strich.png' id='counterSymbol'/>");
  
  }
    else if(currentPlayer === playerO){
      
      $(".werHatGewonnen").text(spielerZwei + " hat gewonnen");
      $("#counterErgebnisZwei").append("<img src='strich.png' alt='circle.png' id='counterSymbol'/>");
    }

    countdown();
    $(".werIstDran").fadeTo("slow", 0.0);
    $(".spielfeld").css({"pointer-events" : "none"});
  }

}

function checkHorizontal(y, size, currentPlayer){
  // horizontal
  for (let i=0; i<size; i++) {
    let value = document.getElementById(i + "_" + y).classList.item(1);
    if (value != currentPlayer) {
      return false;
    }
  }
  return true;
}

function checkVertical(x, size, currentPlayer){
  // vertikal
  for (let i = 0; i < size; i++) {
    let value = document.getElementById(x + "_" + i).classList.item(1);
    if (value != currentPlayer) {
      return false;
    }
  }
  return true;
}

function checkDiagonal(size, currentPlayer){
  // diagonal
  let isLeftTopToRightBottom = true;
  let isRightTopToLeftBottom = true;
  
  for (let i = 0; i < size; i++) {
    let value = document.getElementById(i + "_" + i).classList.item(1);
    if (value != currentPlayer) {
      isLeftTopToRightBottom = false;
    }
  }

  for (let i = size-1; i >= 0; i--) {
    for (let j = 0; j < size; j++) {
      let value = document.getElementById(i + "_" + j).classList.item(1);
      if (value != currentPlayer) {
        isRightTopToLeftBottom = false;
      }
    }
  }
  return isLeftTopToRightBottom || isRightTopToLeftBottom;
}

//countdown

function countdown(){
var timeleft = 30;
var downloadTimer = setInterval(function(){
  if(timeleft === 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "";
      $("#spielfeld").children("div").css({
        "pointer-events" : "all",
      }).removeClass([ "x", "o" ])
      $(".werHatGewonnen").text("");
      $(".werIstDran").fadeTo("slow", 1.0);
      highlight();


      gameStatus = false;

    } else if ( gameStatus === false){
      $("#countdown").text("");
      timeleft = 0;
      return;

    } else {
    document.getElementById("countdown").innerHTML = timeleft + " sekunden bis zum Reset";
    }
  
 
  timeleft -= 1;
}, 990);
}
