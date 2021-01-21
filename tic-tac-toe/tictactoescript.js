//HTML Elements

let werIstDranDiv = document.querySelector(".werIstDran");
let buttonResetDiv =document.querySelector(".resetButton");

//console.log(werIstDranDiv);
//console.log(buttonResetDiv);

let currentPlayer = "yellow";

const playerOne= "x";
const playerTwo= "o";
//Es wurde KEIN Spielfeld generiert
let layoutUpdate = false;


//Platzhalter zum generieren der Spielfeldgröße
let spielfeldNumber = [];
//Hier wird die Größe des Spielfelds angegeben (n x n)

function generateSpielfeld() {
  //Die Zahl die im Eingabefeld Input steht wird verwendet
  spielfeldNumber = Number(document.getElementById("input").value);
    //herunterrechnen, neue Felder minus die vorhandenen
    for (let i = 0; i < (spielfeldNumber * spielfeldNumber-9); i++) {
    // Erstelle ein div container mit der Klasse gitter
    const Feld = $("<div></div>").appendTo(".spielfeld").addClass("gitter")
    console.log("so viele divs")
    }
  //Änder das Stylesheet des spielfelds so ab, dass die neue Anzahl an felder angepasst wird
  const layout = $(".spielfeld").css( "grid-template-columns", "repeat(" + spielfeldNumber + ", 1fr)" );
  // Es wurde ein Spielfeld generiert
  layoutUpdate = true;
  console.log(layoutUpdate); 

  $(".spielfeld").on("click", "div", function(){
    $(this).css("backgroundColor",currentPlayer);
 if (currentPlayer === "yellow") {

  currentPlayer = "red";
   
 }else if (currentPlayer === "red"){

  currentPlayer = "yellow";
}
})
}

  // Wechsel der Spieler pro click, mit schleife?
  // Maximale Spielzüge aus value oder aus anzahl der gitter divs

  //function aufrufen (Beginn der Schleife mit erstem Click auf ein Feld -> anfangs jedoch mit Button Start)
  //Schleife die definiert wie oft der Prozess sich wiederholen soll. i ist in dem Falle die Anzahl der Divs die zur verfügung stehen
    // schleife die 1 addiert
        //jquery befehl dass ich beim clicken ein neues Feld clicken kann
    //schleife die 1 wieder subtrahiert
//und wieder zum anfang der schleife


  function changePlayer() {

    if (layoutUpdate === true) {

      let numGitter = $('.gitter').length; //Anzahl der gitter
      let numItems = $('.spielfeld').children('div').length;
/*
          for (let i = 0; i < numGitter/2; i++) {
            console.log(numItems+"moin, Loopf geht von vorne los");

              $(".gitter").click(function(){
                $(this).css("backgroundColor","yellow");

console.log("Das wird Gelb")
              $(".gitter").click(function(){
                 $(this).css("backgroundColor","red");
console.log("Das wird rot")

              });
              });
          }
          */
          }else {
            console.log("Käse");
}
}


