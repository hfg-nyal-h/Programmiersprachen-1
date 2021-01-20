//HTML Elements

let werIstDranDiv = document.querySelector(".werIstDran");
let buttonResetDiv =document.querySelector(".resetButton");

console.log(werIstDranDiv);
console.log(buttonResetDiv);



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
    console.log("Hey")
    }
  //Änder das Stylesheet des spielfelds so ab, dass die neue Anzahl an felder angepasst wird
  const Layout = $(".spielfeld").css( "grid-template-columns", "repeat(" + spielfeldNumber + ", 1fr)" );
  }