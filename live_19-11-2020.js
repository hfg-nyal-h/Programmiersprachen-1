
/* Wiederholung - Funktionen mit und ohne Parameterübergabe */

let zahlen = []
let zahlenZwei = []
let zahlenDrei = []

let zahlEins = 0
let zahlZwei = 0
let zahlDrei = 0


// array füllen
zahlen = fillArray(100)
zahlenZwei = fillArray(100)
zahlenDrei = fillArray(100)

// zufällige zahl aus dem array holen
zahlEins = zahlen[getRandomInt(zahlen.length)]
zahlZwei = zahlenZwei[getRandomInt(zahlenZwei.length)]
zahlDrei = zahlenDrei[getRandomInt(zahlenDrei.length)]

// zahl größer als 50?
let checkZahlEins
checkZahlEins = checkNumber(zahlEins, 50, 27)
console.log(checkZahlEins)

let checkZahlZwei
checkZahlZwei = checkNumber(zahlZwei, 50, 27)
console.log(checkZahlZwei)

let checkZahlDrei
checkZahlDrei = checkNumber(zahlDrei, 50, 27)
console.log(checkZahlDrei)



// funktion, die ein array mit den zahlen von 1 bis 100 füllt
function fillArray(max) {
    let array = []
    for(let i = 1; i < max; i++) {
        array[i-1] = i
    }
    return array
}

// funktion, die eine zahl auf ihre größe überprüft
function checkNumber(givenNb, compNb, add) {
    if(givenNb > compNb) {
        return givenNb 
    } else {
        givenNb = givenNb + add
        return 'Zahl wurde geändert zu ' + givenNb
    }
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
