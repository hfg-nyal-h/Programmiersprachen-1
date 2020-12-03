
const words = ['continental', 'selection', 'bible', 'scramble', 'abstract']


let CountA = 0
let CountB = 0
let CountC = 0
let CountE = 0


for (let w = 0; w < 4; w++) {
4
    let currentword = words[w]
console.log ('The current word is' + " " + currentword)

for (let i = 0; i < 10; i++) {

if (words[w][i] === 'a') { 
  CountA = CountA + 1
} else if(words[w][i] === 'b'){
  CountB++
} else if(words[w][i] === 'c'){
  CountC++
} else if(words[w][i] === 'e')
    CountE ++
}


// Test ob funktioniert console.log (CountA, CountB, CountC, CountE)

console.log ('The word' + ' ' + words[w] + ' ' + 'contains' + ' ' + CountA + ' ' + 'As' + ' ' + CountB + ' ' + "Bs" + ' ' + 
    CountC + ' ' + 'Cs' + ' ' + CountE + ' ' + 'Es')



CountA = 0
CountB = 0
CountC = 0
CountE = 0

}