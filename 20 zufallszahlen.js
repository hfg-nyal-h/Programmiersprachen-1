/* AUFGABE 1:

Deklariert ein leeres Arry. (leeres Array ist [])
Befüllt das Array mit 10 Zufallszahlen zwischen 0 und 20. (-> Schleife)
Gebt nach dem Füllen das Array aus. (-> console.log  nach der Schleife)


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

let zahlen = []

for (let i = 0; i < 10; i++) {
    zahlen[i] = getRandomInt(20)

}


console.log(zahlen)

*/

/*  Aufgabe 2:
Schreibt eine zweite Schleife, die für jede Zahl im Array überprüft, ob die Zahl größer 10 ist. Wenn ja, soll von der Zahl 1 abgezogen werden, wenn nein, soll 1 aufaddiert werden.
Gebt nach der Schleife den Array noch mal aus. */

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

let zahlen = []

for (let i = 0; i < 10; i++) {
    zahlen[i] = getRandomInt(20)

if (zahlen[i] >= 11) {
    zahlen[i]--
    console.log ('Die neue Zahl ist die ' + ' '+ zahlen[i] + ' ' + ', es wurde 1 von der Ursprünglichen Zahl subtrahiert')
}else if (zahlen[i] <= 9){
    zahlen[i]++
    console.log ('Die neue Zahl ist die ' + ' '+ zahlen[i] + ' ' + ', es wurde 1 zur Ursprünglichen Zahl addiert')
}else if (zahlen[i] == 10){
    zahlen[i]
    console.log ('Die zahl beträgt ' +" "+ zahlen[i]+' '+ 'und bleibt gleich')
}

}


console.log('          '+ zahlen +' '+ '(Kontrolle)')