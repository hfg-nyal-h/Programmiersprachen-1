/*
nächste Teilaufgabe zum Passwort-Generator:
Legt die gewünschte Länge der Passwörter in einer Konstante fest.
Nun erweitert euren Code so, dass nach dem Kombinieren der zwei Wörter die Länge des Passworts überprüft wird.
Ist das Passwort kürzer als die gewünschte Länge, soll ein weiteres zufälliges Wort aus einem der beiden Arrays angehängt werden.
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


let words1 = ["ebenfalls", "trommel", "sinken", "auge", "beil", "dunstig", "feld", "bogen", "kartell", "western"]
let words2 = ["rebell", "zufall", "muttermal", "wiege", "unterkunft", "befürworten", "privatgelände", "gegen", "jade", "pyramiden"]
let buchstaben = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j" , "k", "l", "m", "n", "o", "p", "q", "r" ]

const länge = 12

for (let i = 1; i < 20; i++) {

let word1 = words1[getRandomInt(words1.length)]
let word2 = words2[getRandomInt(words2.length)]
let buchstabe = buchstaben[getRandomInt(buchstaben.length)]

let random = Math.random()

if (random > 0.5) {
    // vor dem word1 darf kein let stehen, sonst wird dort kein buchstabe hinzugefügt falls eszu wenig buchstaben sidn
   word1 = words1[getRandomInt(words1.length)] + words2[getRandomInt(words2.length)]
    console.log("Das " +i + ". Passwort lautet: " + word1)

//hier eine weitere abfrage reinmachen of passwortlänge denn in ordnung ist
// hier check ich ob meine wort länge größer ist als die const länge
    if (word1.length > länge){
        console.log("Die Passwortlänge ist in Ordnung")
    } else if(word1.length < länge) {
    console.log("Dem Passwort werden zufällige Buchstabe hinzugefügt bis die länge in Ordnung ist.")
//hier habe ich eine schleife hinzugefügt, und es wird so lange ein buchstabe hinzugefügt bis die länge passt 
// anstatt i<10 steeht hier word1.length < länge, denn somit wiederholt er es so lange bis die känge passt.
// Das funktioiert aber nur, weil ich ein satz darunter word1 = ...ein buchstabe zu word1 hinzufüge
// davor darf kein let stehen, sonst wird kein Buchstabe hinzugefügt.+
for (let i = 0; word1.length < länge; i++) {
    buchstabe = buchstaben[getRandomInt(buchstaben.length)]
    word1 = word1 + buchstabe
    console.log("Es wurde ein: "+buchstabe+ " hinzugefügt, das Passwort lautet nun: "+ word1)
    }
}
    


} else if(random < 0.5) {
    word2 = words2[getRandomInt(words2.length)] + words1[getRandomInt(words1.length)]
    console.log("Das " +i + ". Passwort lautet: " + word2)
}


//DAS GLEICHE WIE OBEN NUR BEI DER ELSE IF PROBIERT.. KLAPPT ABER NICHT GANZ, EVTL. WEIL ICH BEI ELSE IF KEINE WEITERE IF ABFRAGE MACHEN KANN

   if (word2.length > länge){
        console.log("Die Passwortlänge ist in Ordnung")
    } else if(word2.length < länge) {
    console.log("Dem Passwort " +word2+" werden zufällige Buchstabe hinzugefügt bis die länge in Ordnung ist.")

for (let i = 0; word2.length < länge; i++) {
    buchstabe = buchstaben[getRandomInt(buchstaben.length)]
    word2 = word2 + buchstabe
    console.log("Es wurde ein: "+buchstabe+ " hinzugefügt, das Passwort lautet nun: "+ word2)
            
}
}
}
