//HTML Elements

let werIstDranDiv = document.querySelector(".werIstDran");
let buttonResetDiv =document.querySelector(".resetButton");

//console.log(werIstDranDiv);
//console.log(buttonResetDiv);

let random = Math.random()

const playerX= "url('cancel.png')";
const playerO= "url('circle.png')";

let spielerEins = document.getElementById("inputEins").value;
let spielerZwei = document.getElementById("inputZwei").value;

let gameStatus = false;

let currentPlayer = [];

const btnGenerate = document.getElementById("btnGenerate");






//Zufall wer als erstes dran kommt
if (random > 0.5) {
    
currentPlayer = playerX;
$(".werIstDran").text(spielerEins+" ist dran")

} else if (random <= 0.5) {
 
currentPlayer = playerO;
$(".werIstDran").text(spielerZwei+ " ist dran")

}

//Es wurde KEIN Spielfeld generiert
let layoutUpdate = false;

//Platzhalter zum generieren der Spielfeldgröße
let spielfeldNumber = [];
//Hier wird die Größe des Spielfelds angegeben (n x n)


btnGenerate.addEventListener("click", function(){

  //Die Zahl die im Eingabefeld Input steht wird verwendet
  spielfeldNumber = Number(document.getElementById("input").value);

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
  $(this).css({"background": currentPlayer,  // set background to currentPlayer X oder currentPlayer O
              "pointer-events" : "none",    // unclickbar (wegen no pointer event) nachdem geclickt
});
if (currentPlayer === playerO) {

currentPlayer = playerX ;
$(".werIstDran").text(spielerEins+" ist dran")
//Spiel ist im gange
gameStatus = true;
console.log(gameStatus)
 
}else if (currentPlayer === playerX){

currentPlayer = playerO;
$(".werIstDran").text(spielerZwei+" ist dran")
//Spiel ist im gange
gameStatus = true;
}
})


//reset Button
$("#btnReset").click(function(){

$("#spielfeld").children("div").css({
      "background": "black",  // set background to currentPlayer X oder currentPlayer O
      "pointer-events" : "all",
})
gameStatus = false;
});


//Spielername Input


$("#inputEins").on('input', function () {
   spielerEins = document.getElementById("inputEins").value;
});

$("#inputZwei").on('input', function () {
  spielerZwei = document.getElementById("inputZwei").value;
});