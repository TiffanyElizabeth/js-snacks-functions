/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * 
 * @param {string} name - the name of the user
 * @returns {string} - a message saying "Ciao + the name of the user"
 */
function helloUser(name) {
    return `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
const result = helloUser(userName);
console.log(result);


//Risultato atteso se si passa 'Mario': // ciao Mario