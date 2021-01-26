//HTML Elements

let werIstDranDiv = document.querySelector(".werIstDran");
let buttonResetDiv =document.querySelector(".resetButton");

//console.log(werIstDranDiv);
//console.log(buttonResetDiv);

let random = Math.random()

const playerX= "url('cancel.png')";
const playerO= "url('circle.png')";

let gameStatus = false;

let currentPlayer = [];


if (random > 0.5) {
    
currentPlayer = playerX;
$(".werIstDran").text("Spieler X ist dran")

} else if (random <= 0.5) {
 
currentPlayer = playerO;
$(".werIstDran").text("Spieler O ist dran")

}

//Es wurde KEIN Spielfeld generiert
let layoutUpdate = false;

//Platzhalter zum generieren der Spielfeldgröße
let spielfeldNumber = [];
//Hier wird die Größe des Spielfelds angegeben (n x n)



function generateSpielfeld() {

  //Die Zahl die im Eingabefeld Input steht wird verwendet
  spielfeldNumber = Number(document.getElementById("input").value);

//Wenn Spiel im gange ist Button disablen
  if (gameStatus === true) { 

    $("#btnGenerate").attr("disabled", true).click(function(){
      alert("Das Spielfeld kann nur ein mal generiert werden und nur dann, wenn das Spiel nicht am laufen ist! Drücke den Reset button um das Spiel zurückzsuetzen")
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
}


//let numItems = $('.spielfeld').children('div').length;


// Abwechselnde Spielzüge

$(".spielfeld").on("click", "div", function(){
  $(this).css({"background": currentPlayer,  // set background to currentPlayer X oder currentPlayer O
              "pointer-events" : "none",    // unclickbar (wegen no pointer event) nachdem geclickt
});
if (currentPlayer === playerO) {

currentPlayer = playerX ;
$(".werIstDran").text("Spieler X ist dran")
//Spiel ist im gange
gameStatus = true;
console.log(gameStatus)
 
}else if (currentPlayer === playerX){

currentPlayer = playerO;
$(".werIstDran").text("Spieler O ist dran")
//Spiel ist im gange
gameStatus = true;
}
})
