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
  let newId = 'Zeile'+j+'Spalte'+i  
  $(".spielfeld").append("<div id=" + newId + " class='gitter'></div>");


  }}

  $(".spielfeld").css( "grid-template-columns", "repeat(" + spielfeldNumber + ", 1fr)" ); //style von spielfeld auf neues grid anpassen

  layoutUpdate = true; // Spielfeld wurde generiert
  }});



//Current Player, abwechselnde Spielzüge

$(".spielfeld").on("click", "div", function(){
  this.classList.add(currentPlayer), //bei click klasse "x" oder "o" hinzufügen
  $(this).css({"pointer-events" : "none",    // unclickbar (wegen no pointer event) nachdem geclickt
  });

if (currentPlayer === playerO) {

  currentPlayer = playerX ;
  $(".werIstDran").text(spielerEins+" ist dran")
  //Spiel ist im gange
  gameStatus = true;
  console.log(gameStatus)
  checkWinner();
  }
else if (currentPlayer === playerX){

  currentPlayer = playerO;
  $(".werIstDran").text(spielerZwei+" ist dran")
  //Spiel ist im gange
  gameStatus = true;
  checkWinner();
  }

})


//Button Reset
$("#btnReset").click(function(){

  $("#spielfeld").children("div").css({
  "pointer-events" : "all",
  })
  .removeClass([ "x", "o" ]) //entfernt Klassen bei reset
  gameStatus = false;
});


//Player Name Input

$("#inputEins").on('input', function () {
   spielerEins = document.getElementById("inputEins").value;
});

$("#inputZwei").on('input', function () {
  spielerZwei = document.getElementById("inputZwei").value;
});

//Gewinnerkennung


function checkWinner(){

const gitterDivs = document.querySelectorAll('.gitter');
var element = "";

for (let i = 0; i < 3; i++) {
  element = gitterDivs[i].classList.item(1);
  console.log(element)

}

const Zeile0Spalte0 = gitterDivs[0].classList.item(1);
const Zeile1Spalte0 = gitterDivs[1].classList.item(1);
const Zeile2Spalte0 = gitterDivs[2].classList.item(1);

//console.log(Zeile0Spalte0);
//console.log(Zeile1Spalte0);
//console.log(Zeile2Spalte0);


if ((Zeile0Spalte0 && Zeile0Spalte0 === Zeile1Spalte0 && Zeile0Spalte0 === Zeile2Spalte0)) {
  console.log ("xo hat gewonnen")
}
}
