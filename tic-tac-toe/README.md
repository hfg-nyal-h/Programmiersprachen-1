TICTACTOE

Spiel

bei Tic Tac Toe handelt es sich um ein Two Player Spiel indem eine Bestimmte Anzahl (meist die Göße des Felds) in einer Reihe gesetzt werden muss um zu gewinnen.
Dies kann vertikal, horizontal oder diagonal erfolgen.

if (random > 0.5) 
hier wird zufällig entschieden werlcher spieler mit dem Zug anfangen darf.


btnGenerate

Ist dafür da das Spielfeld nach der wunschgröße zu generieren da es sich um ein interaktives Feld also n x n handelt.


$(".spielfeld").on("click", "div", function(){

Bei dem Click auf ein Feld des Spielfelds, wird dort je nachdem ein X oder O gesetzt. Zudem ist das Feld indem sich ein Symbol befindet gesperrt.

Nach jedem Setzen soll ausserdem geprüft werden ob einer das SPiel mit dem zug gewonnen haben könnte.

Nach dem check, wird der Aktuelle spieler gewechselt und somit ist der nächste dran.


 btnReset.addEventListener("click", function(){

Wenn Reset Knopf gedrückt wird dann Räum das Spielfeld auf.


$("#inputEins").on('inputSpielfeldGroesse', function () {

Hier kann der Name des Spielers eingegeben werden. 
Funktioniert für beide SPieler

function checkWinner()

prüft mit ob einer das Spiel gewonnen haben könnte indem es die anderen check Funktionen aufruft.

Bei einem Sieg wie bei einem Unentschieden wird das Spiel in 30 sekunden neu gestartet.

Bei einem Sieg bekommt der Sieger ein Strich als Piunktgewinn.


function checkHorizontal(y, spielfeldGroesse, currentPlayer)

Diese funktion prüft ob sich auf einem der Horizonalten Felder durchgehend das gleiche Symbol befindet.
Wenn das der Fall ist, haben wir einen Gewinner und somit ist die Runde zuende.


function checkVertical(x, spielfeldGroesse, currentPlayer)

Diese funktion prüft ob sich auf einem der Vertikalen Felder durchgehend das gleiche Symbol befindet.
Wenn das der Fall ist, haben wir einen Gewinner und somit ist die Runde zuende.


function checkDiagonal(spielfeldGroesse, currentPlayer)

Diese funktion prüft ob sich auf einem der Horizonalten Felder durchgehend das gleiche Symbol befindet.
Wenn das der Fall ist, haben wir einen Gewinner und somit ist die Runde zuende.


function checkAllFields(spielfeldGroesse) 

Diese funktion prüft ob alle felder belegt wurden
Wenn dies der Fall ist, haben wir keinen Gewinner somit ist die Runde unentschieden.
Das Spiel wird daraufhin in 30 sekunden gereseted aber Keiner erhält einen Punkt


function reset()

Setzt alle Felder zurück, macht die Buttons clickbar usw.
sorgt im grunde dafür, dass das Spiel wieder Spielbar ist
Die Punktzahl und die Namen bleinen erhalten

function gameZuEnde()                            
Gewinnt einer oder geht das Spiel unentschieden aus verblasst die anzeige wer als nächstes dran ist und ddas SPielfeld wird unclickbar.

function countdown()

Nach ablauf der festgelegten zeit (30sec), wird der Button reset ausgeführt und gehighlightet (UI)