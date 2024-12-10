/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * 
 * @param {string} word - word provided 
 * @returns {number} - number of vowels found in the word provided 
 */

function numVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let countVowels = 0;
    for (let i = 0; i < word.length; i++) {
        const currentLetter = word[i];
        if (vowels.includes(currentLetter)) {
            countVowels++;
        }
    }
    return countVowels;
}

// Invoca la funzione qui e stampa il risultato in console
const result = numVowels(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)