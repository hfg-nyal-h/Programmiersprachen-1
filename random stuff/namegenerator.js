
/*
Legt zwei Arrays an, einmal mit 10 Vornamen und einmal mit 5 Nachnamen.
Schreibt eine Funktion, die euch aus beiden Arrays einen zufälligen Namen sucht.
Legt für jede "Person" einen Array an, der Vor- und Nachname enthält.
Speichert euch insgesamt 5 Personen und überprüft, ob jemand den gleichen Nachnamen hat.
Wenn ja, soll ausgegen werden, dass diese beiden Personen verwandt sind.
Wenn alle Personen miteinander verwandt sind, soll etwas besonderes ausgegeben werden. */

//Arrays anlegen

let vornamen = ["Mike", "Klaus", "Fritz", "Harald", "Alfons", "Reiner", "Fabio", "Lukas", "Johann", "Martin"]

let nachnamen = ["Baumgärtner", "Stegmeier", "Meyer", "Schmied", "Tyson"]

//Funktion schreiben und zufälligen Namen suchen

        //Funktion getRandomInt
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
        //Zufälligen Namen holen

vorname1 = vornamen[getRandomInt(vornamen.length)]
nachname1 = nachnamen[getRandomInt(nachnamen.length)]

    vorname2 = vornamen[getRandomInt(vornamen.length)]
    nachname2 = nachnamen[getRandomInt(nachnamen.length)]

         vorname3 = vornamen[getRandomInt(vornamen.length)]
        nachname3 = nachnamen[getRandomInt(nachnamen.length)]
        
            vorname4 = vornamen[getRandomInt(vornamen.length)]
            nachname4 = nachnamen[getRandomInt(nachnamen.length)]

                 vorname5 = vornamen[getRandomInt(vornamen.length)]
                 nachname5 = nachnamen[getRandomInt(nachnamen.length)]

//Neues Array anlegen let ... = [] mit dem generiertem Vor und Nachname 5x

let name1 = vorname1 +" "+ nachname1
let name2 = vorname2 +" "+ nachname2
let name3 = vorname3 +" "+ nachname3
let name4 = vorname4 +" "+ nachname4
let name5 = vorname5 +" "+ nachname5

console.log(name1)
console.log(name2)
console.log(name3)
console.log(name4)
console.log(name5)
//Prüfen mit if abfrage ob jemand den gleichen Nachnamen hat

        //zwei den gleichen nachnamen haben, dann sind die miteinander verwand

if (nachname1 == nachname2) {
    console.log(vorname1 + " und " +vorname2+" sind miteinadner Verwand")
} 
if (nachname1 == nachname3) {
    console.log(vorname1 + " und " +vorname3+" sind miteinadner Verwand")
} 
if (nachname1 == nachname4) {
    console.log(vorname1 + " und " +vorname4+" sind miteinadner Verwand")
} 
if (nachname1 == nachname5) {
    console.log(vorname1 + " und " +vorname5+" sind miteinadner Verwand")
} 
if (nachname2 == nachname3) {
    console.log(vorname2 + " und " +vorname3+" sind miteinadner Verwand")
} 
if (nachname2 == nachname4) {
    console.log(vorname2 + " und " +vorname4+" sind miteinadner Verwand")
} 
if (nachname2 == nachname5) {
    console.log(vorname2 + " und " +vorname5+" sind miteinadner Verwand")
} 
if (nachname3 == nachname4) {
    console.log(vorname3 + " und " +vorname4+" sind miteinadner Verwand")
} 
if (nachname3 == nachname5) {
    console.log(vorname3 + " und " +vorname5+" sind miteinadner Verwand")
}
if (nachname4 == nachname5) {
    console.log(vorname4 + " und " +vorname5+" sind miteinadner Verwand")
}



//Wenn zwei den glecihen Nachnamen haben, sind die Personen miteinander Verwandt und es soll etwas besonderes passieren

