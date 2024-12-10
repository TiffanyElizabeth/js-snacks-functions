/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Make an array with the first letter of each word in a given list
 * 
 * @param {array} words - given list of words
 * @returns {array} letters - first letter of each word in the given list
 */
function firstLetter(words) {
    const letters = [];
    for (let i = 0; i < words.length; i++) {
        letters.push(words[i][0])
    }
    return letters;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]