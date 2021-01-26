//HTML Elements

let werIstDranDiv = document.querySelector(".werIstDran");
let buttonResetDiv =document.querySelector(".resetButton");

//console.log(werIstDranDiv);
//console.log(buttonResetDiv);

let currentPlayer = "url('circle.png')";

const playerX= "url('cancel.png')";
const playerO= "url('circle.png')";

//Es wurde KEIN Spielfeld generiert
let layoutUpdate = false;

//Platzhalter zum generieren der Spielfeldgröße
let spielfeldNumber = [];
//Hier wird die Größe des Spielfelds angegeben (n x n)

function generateSpielfeld() {

  //Die Zahl die im Eingabefeld Input steht wird verwendet
  spielfeldNumber = Number(document.getElementById("input").value);
    //herunterrechnen, neue Felder minus die vorhandenen
    /*
    for (let i = 0; i < (spielfeldNumber * spielfeldNumber-9); i++) {
    // Erstelle ein div container mit der Klasse gitter
    const Feld = $("<div></div>").appendTo(".spielfeld").addClass("gitter")
    console.log("so viele divs")
    }
*/
//let j = 1;
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
  const layout = $(".spielfeld").css( "grid-template-columns", "repeat(" + spielfeldNumber + ", 1fr)" );
  // Es wurde ein Spielfeld generiert
  layoutUpdate = true;
 // console.log(layoutUpdate); 

}

let numItems = $('.spielfeld').children('div').length;

//console.log(numItems);

  // Wechsel der Spieler pro click, mit schleife?
  // Maximale Spielzüge aus value oder aus anzahl der gitter divs

  //function aufrufen (Beginn der Schleife mit erstem Click auf ein Feld -> anfangs jedoch mit Button Start)
  //Schleife die definiert wie oft der Prozess sich wiederholen soll. i ist in dem Falle die Anzahl der Divs die zur verfügung stehen
    // schleife die 1 addiert
        //jquery befehl dass ich beim clicken ein neues Feld clicken kann
    //schleife die 1 wieder subtrahiert
//und wieder zum anfang der schleife


$(".spielfeld").on("click", "div", function(){
  $(this).css("background",currentPlayer);
if (currentPlayer === playerO) {

currentPlayer = playerX ;
 
}else if (currentPlayer === playerX){

currentPlayer = playerO;
}
})