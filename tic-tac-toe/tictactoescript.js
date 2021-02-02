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



//Zufällig generieren wer Beginnt
if (random > 0.5) {
    
currentPlayer = playerX;
$(".werIstDran").text(spielerEins+" ist dran")

} else if (random <= 0.5) {
  currentPlayer = playerO;
  $(".werIstDran").text(spielerZwei+ " ist dran")
}



//Hier wird die Größe des Spielfelds angegeben (n x n)

btnGenerate.addEventListener("click", function(){

  //Die Zahl die im Eingabefeld Input steht wird verwendet
let  spielfeldNumber = Number(document.getElementById("input").value);

//Wenn Spiel im gange ist Button disablen
  if (gameStatus === true) { 

    $("#btnGenerate").attr("disabled", true).click(function(){
      alert("Das Spielfeld kann nur neu generiert werden, wenn das Spiel nicht am laufen ist! Drück Reset")
    });

    //Wenn nicht dann Spielfeld enerieren
  } else {


$('.spielfeld').empty();

    for (let i = 0; i < spielfeldNumber; i++) {
      // i zählt Zeile
      for (let j = 0; j < spielfeldNumber ; j++) {
        // j zählt Spalte
          let newId = 'Zeile'+j+'Spalte'+i  
          $(".spielfeld").append("<div id=" + newId + " class='gitter'></div>");
      }
     
    }

  //Änder das Stylesheet des spielfelds so ab, dass die neue Anzahl an felder angepasst wird
 $(".spielfeld").css( "grid-template-columns", "repeat(" + spielfeldNumber + ", 1fr)" );
  // Es wurde ein Spielfeld generiert
  layoutUpdate = true;
 // console.log(layoutUpdate); 
  }
});


//let numItems = $('.spielfeld').children('div').length;


// Abwechselnde Spielzüge

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
 
}else if (currentPlayer === playerX){

currentPlayer = playerO;
$(".werIstDran").text(spielerZwei+" ist dran")
//Spiel ist im gange
gameStatus = true;
checkWinner();
}
})


//reset Button
$("#btnReset").click(function(){

$("#spielfeld").children("div").css({
      //"background": "black",  // set background to currentPlayer X oder currentPlayer O
      "pointer-events" : "all",
}).removeClass([ "x", "o" ]) //entfernt Klassen bei reset
gameStatus = false;
});


//Spielername Input

$("#inputEins").on('input', function () {
   spielerEins = document.getElementById("inputEins").value;
});

$("#inputZwei").on('input', function () {
  spielerZwei = document.getElementById("inputZwei").value;
});

//Gewinnerkennung


//let divNumber = [];

/*
//schleife größe der Gewinnerkennung
for (let g = 0; g < (Number(document.getElementById("input").value) * Number(document.getElementById("input").value)+1); g++) {
  console.log(divNumber);
   divNumber = g

}
*/
function checkWinner(){

const gitterDivs = document.querySelectorAll('.gitter');


const Zeile0Spalte0 = gitterDivs[0].classList.item(1);
const Zeile1Spalte0 = gitterDivs[1].classList.item(1);
const Zeile2Spalte0 = gitterDivs[2].classList.item(1);

console.log(Zeile0Spalte0);
console.log(Zeile1Spalte0);
console.log(Zeile2Spalte0);

if ((Zeile0Spalte0 && Zeile0Spalte0 === Zeile1Spalte0 && Zeile0Spalte0 === Zeile2Spalte0)) {
  console.log ("xo hat gewonnen")
}
}