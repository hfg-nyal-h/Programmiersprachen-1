//HTML Verknüpfungen

let spielerEins = document.getElementById("inputEins").value; // Namenseingabe ü. Inputfeld Spieler 1
let spielerZwei = document.getElementById("inputZwei").value; // Namenseingabe ü. Inputfeld Spieler 2
const btnGenerate = document.getElementById("btnGenerate");   
const btnReset = document.getElementById("btnReset");

//variablen
let random = Math.random()              //zahl zwischen 0 und 1 generieren
let isGameLive = false;                 // Spiel ist aktiv -> sodass Spielfeld nicht generiert werden kann
let currentPlayer = [];                 // deklaration für abwechselnde Spielerauswahl 
let spielfeldGroesse = [];              //Deklaration der Spielfeldgröße wird später aus der Value des Inputfelds: inputSpielfeldGroesse geholt
//constanten
const playerX= "x";      // Currentplayer greift darauf zu | Später wird beim Click auf ein Div der inhalt von playerX/playerO als neue Klasse 
const playerO= "o";       // definiert, dass für die Gewinnermittlung notwendig ist


//Zufällig generieren wer Beginnt
if (random > 0.5) {                          
    currentPlayer = playerX;              
   $(".werIstDran").text(spielerEins+" ist dran")  //Wenn zufalls Zahl kleiner als 0.5 dann soll playerX anfangen
  } else if (random <= 0.5) {
    currentPlayer = playerO;
    $(".werIstDran").text(spielerZwei+ " ist dran") //groesser als 0.5 dann soll playerO anfangen
  }


//Spielfeld mit dynamischen n x n Feld generieren
btnGenerate.addEventListener("click", function(){                                           //generieren bei Buttonclick
  let  spielfeldGroesse = Number(document.getElementById("inputSpielfeldGroesse").value);    //Zahl aus input verwenden ( siehe Zeile 12)

if (isGameLive === true) { 
  $("#btnGenerate").attr("disabled", true).click(function(){                                //Button Generieren ausschalten während aktiv
  alert("Das Spielfeld kann nur neu generiert werden, wenn das Spiel nicht am laufen ist! Drück Reset")
});
}else {
  $('.spielfeld').empty();

  // Verschachtelte for Schleife 
  for (let i = 0; i < spielfeldGroesse; i++) {                              // i zählt spalte
    for (let j = 0; j < spielfeldGroesse ; j++) {                           // j zählt zeile
    let newId = j+"_"+i;
    $(".spielfeld").append("<div id=" + newId + " class='gitter'></div>"); //neue divs bilden Spielfeld
    } 
  }
  $(".spielfeld").css( "grid-template-columns", "repeat(" + spielfeldGroesse + ", 1fr)" ); //Grid auf neue Anzahl anpassen
}});

//Events bei click auf Spielfeld
$(".spielfeld").on("click", "div", function(){
  this.classList.add(currentPlayer),                //bei click klasse "x" oder "o" hinzufügen
  $(this).css("pointer-events" , "none"),           // unclickbar (wegen no pointer event) nachdem geclickt
                                                    //coordinate spliten wegen übersicht
  console.log("Field with coordinates " + this.id.split("_")[0] + "|" + this.id.split("_")[1] + " is set to " + currentPlayer);

  isGameLive = true;
  let x = Number(this.id.split("_")[0]);           // der x wert soll den tatsächliches wert des ID entsprechen (nullte stelle)
  let y = Number(this.id.split("_")[1]);           // der y wert soll den tatsächliches wert des ID entsprechen  (erste stelle)
                                                  // unübersichtliches aufrufen mit [][] wird erspart

  checkWinner(x, y, currentPlayer);               //Gewinnerkennung bei click

  //Abwechselnde Spielzüge
  if (currentPlayer === playerO) {
    currentPlayer = playerX ;
    $(".werIstDran").text(spielerEins+" ist dran") 
  }
  else if (currentPlayer === playerX){
    currentPlayer = playerO;
    $(".werIstDran").text(spielerZwei+" ist dran")
  }
});

//Button Aufruf
  btnReset.addEventListener("click", function(){
    reset()
  });


//Player Name Input
$("#inputEins").on('inputSpielfeldGroesse', function () {
  spielerEins = document.getElementById("inputEins").value;     //Eingabe in Value Feld entspricht dann SpielerEins
  if (currentPlayer === playerX) {
      $(".werIstDran").text(spielerEins + " ist dran");
  }
});
$("#inputZwei").on('inputSpielfeldGroesse', function () {
  spielerZwei = document.getElementById("inputZwei").value;     //Eingabe in Value Feld entspricht dann SpielerZwei
  if (currentPlayer === playerO) {
      $(".werIstDran").text(spielerZwei + " ist dran");
  }
});
/*

FUNCTIONS


*/

//Gewinnerkennung
function checkWinner(x, y, currentPlayer){
  let spielfeldGroesse = Number(document.getElementById("inputSpielfeldGroesse").value); 

  let isHorizontal = checkHorizontal(y, spielfeldGroesse, currentPlayer) 
  let isVertical = checkVertical(x, spielfeldGroesse, currentPlayer)
  let isDiagonal = checkDiagonal(spielfeldGroesse, currentPlayer)
  let allFieldsused = checkAllFields(spielfeldGroesse);

  if (isHorizontal|| isDiagonal || isVertical) {                   //Wenn Eintrifft dann gewinnt currentplayer


  if(currentPlayer ===playerX){
    $(".werHatGewonnen").text(spielerEins + " hat gewonnen");
    $("#counterErgebnisEins").append("<img src='strich.png' alt='strich.png' id='counterSymbol'/>");//count gewinner mit strich
  
  }
    else if(currentPlayer === playerO){
      
      $(".werHatGewonnen").text(spielerZwei + " hat gewonnen");
      $("#counterErgebnisZwei").append("<img src='strich.png' alt='circle.png' id='counterSymbol'/>");// count gewinner
    }
    gameZuEnde();                                 //countdown und fade

  } else if (allFieldsused) {
    $(".werHatGewonnen").text("Unentschieden!!"); //keinen Gewinner
    gameZuEnde();                                 //countdown und fade
  }
}

/*  Bei den folgenden check Funktionen wird geprüft ob sich horizontal oder Vertikal oder diagonal die selben
    Symbole nebeneinander angeordnet sind. Wenn dies der fall ist, wird ein return true; wiedergegeben
    was wiederum heißt, dass ein Spieler gewonnen hat
*/
  // Gewinnerkennung Horizontal
function checkHorizontal(y, spielfeldGroesse, currentPlayer){
  for (let i=0; i<spielfeldGroesse; i++) {                                //zugriff auf werte in horizontaler (i)
    let value = document.getElementById(i + "_" + y).classList.item(1);   //y= erste Stelle id (Y-Achse, Zeile 58) der id. //classList.item(1)=zugriff auf die zweite Klasse, x oder o
                   // classList.item(1)= was ist die zweite klasse? x oder o | i=check horizontal alle divs | y=bleib in der spalte wie der geclickte div
    if (value !== currentPlayer) {                                         // check ob im feld bereits anderes symbol ist -> kein gewinn in der aktuellen Zeile
      return false;                                                       //wenn horizontal anderes symbol als currentplayer dann verlass die schleife
    }
  }
  return true;                                                        
}
  // Gewinnerkennung Vertikal
function checkVertical(x, spielfeldGroesse, currentPlayer){
  for (let i = 0; i < spielfeldGroesse; i++) {
    let value = document.getElementById(x + "_" + i).classList.item(1); //blein vertikal fix aber check horizontal
    if (value !== currentPlayer) {                                      //check ob anderes Symbol -> kein gewinn in aktueller spalte
      return false;                                                    // anderes symbol -> verlass die schleife
    }
  }
  return true;
}
  // Gewinnerkennung Diagonal 2x
function checkDiagonal(spielfeldGroesse, currentPlayer){
  let isLeftTopToRightBottom = true; // Zwei gewinnmöglichkeiten bei einer Funktion
  let isRightTopToLeftBottom = true; // eine Wenn eine von beide returned wird dann gewinnt einer
  
  for (let i = 0; i < spielfeldGroesse; i++) {                          // Felder durchlaufen
    let value = document.getElementById(i + "_" + i).classList.item(1); //Diagonal von Links oben -> Rechts unten ist i gleich z.B 0_0, 1_1,..
    if (value !== currentPlayer) {
      isLeftTopToRightBottom = false;
      break;                        //break verlässt nur den bereich und nicht die ganze Schleife
    }
  }  
  let j=0;    //spalte auf 0 setzen und einfach erhöhen -> keine unnötige verschachtelte Schleife
  for (let i = spielfeldGroesse-1; i >= 0; i--) {                       // Oben rechts nach unten Links muss Schleife rückwärts laufen!
      let value = document.getElementById(i + "_" + j).classList.item(1); 
      if (value !== currentPlayer) {
        isRightTopToLeftBottom = false;
        break;
      }
    j++;    //spalte erhöhen
  }
  return isLeftTopToRightBottom || isRightTopToLeftBottom;
}

  //Prüft ob alle Felder geclickt wurden
function checkAllFields(spielfeldGroesse) {
  for (let i=0; i<spielfeldGroesse; i++) {                              // alle horizontalen Felder durchlaufen
    for (let j=0; j<spielfeldGroesse; j++) {                             // alle Sekrechten Felder durchlaufen
      let value = document.getElementById(i + "_" + j).classList.item(1);
      if (value === null) {                                               // Wenn ein Feld nicht geclickt wurde dann ist Wert null und schleife wird verlassen
        return false;
      }
    }
  }
  return true;                                                          //Wenn alles geclickt wurde dann true
}

//Button Reset
function reset(){
  $("#spielfeld").children("div").css({
    "pointer-events" : "all",           //erlaube Mouse events (clickbar)
  }).removeClass([ "x", "o" ])          //entfernt Klassen bei reset
  $(".werHatGewonnen").text("");        //text leeren
  $(".werIstDran").fadeTo("slow", 1.0); //Einfaden 
  isGameLive = false;                   //Spielfeld kann generiert werden
}

// Gewinner oder Unentschieden
function gameZuEnde(){                              // Wenn einer gewonnen hat oder Unentschieden
  countdown();                                       // Startet Countdown für auto Reset
  $(".werIstDran").fadeTo("slow", 0.0);             //verwirrung eliminieren wenn einer gewonnen
  $(".spielfeld").css({"pointer-events" : "none"}); //buttonclick Spielfeld aus
}

//countdown
function countdown(){
var timeleft = 30;                                      //Countdownzeit auf 30 Sekunden
var downloadTimer = setInterval(function(){         
  if(timeleft === 0){                                   //hier gleiche aufrufe wie bei reset button
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = ""; 
    highlight();                                        //Button reset highlighten, dass es aussieht als hätte man geclicked
    reset()                                             //nach ablauf countdown felder wieder freiräumen
    
    } else if ( isGameLive === false){                 
      $("#countdown").text("");                         //Wenn spielfeld zurueckgesetzt wurde soll Text auch verschinden
      timeleft = 0;                                     //zeit soll auf 0 gestellt werden, wenn nicht läuft die zeit trotzdem weiter
      return;

    } else {
    document.getElementById("countdown").innerHTML = timeleft + " sekunden bis zum Reset"; //was angezeigt wird
    }
  
 
  timeleft -= 1;            //Wie viel zeit abgezogen werden soll bei einem Takt von 0.99 sec
}, 990);                    //nicht ganz 1 sek
}

// highlight
function highlight(){
  $('#btnReset').addClass("highlight");          //im class highlight befindet sich die animation
  setTimeout(function () {
        $('#btnReset').removeClass('highlight'); //class nach 2 sec entfernen
  }, 2000);
}
