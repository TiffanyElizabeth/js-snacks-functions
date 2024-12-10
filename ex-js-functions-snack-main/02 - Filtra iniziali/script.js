/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Filter a given list of words making a new array with only the words that begin with a given letter
 * @param {array} words - the given list of words
 * @param {string} letter - the letter by which we will filter the given words 
 * @returns {array} words from the given array that begin with the given letter
 */
function filterByFirstLetter (words, letter) {
    const filteredWords = [];
    for(let i = 0; i < words.length; i++) {
        const selectedWord = words [i];
        if (letter === selectedWord[0]) {
            filteredWords.push(selectedWord)
        }
    }
    return filteredWords;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByFirstLetter(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]