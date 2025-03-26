/**
 * Jeu du nombre mystère
 * @author  Steve Fallet
 * @version 2.0
 * @since   2018-09-09 (date de création)
 */

'use strict';

console.log('js');

let formulaire = document.getElementById('frmNbMystere');
let saisieUtilisateur = document.getElementById('inpUserNb');
//let boutonDeviner = document.getElementById('btnDeviner');
let msgInfoNbMystere = document.getElementById('txtInfoMystere');

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

formulaire.addEventListener('submit', () => {

    let nbMystere = tireNombre(100, 50);
    let nbDeviner = saisieUtilisateur.value;

    console.log('Nombre mystère : ', nbMystere);
    console.log('Nombre deviné : ', nbDeviner);

   if (nbDeviner != null) {
       alert(nbDeviner);
       if (nbDeviner < nbMystere) {
           msgInfoNbMystere.innerText = 'Le nombre est plus grand!';
           console.log('>');
       }

       if (nbDeviner > nbMystere) {
           msgInfoNbMystere.innerText = 'Le nombre est plus petit!';
           console.log('<');
       }

       if (nbDeviner >= nbMystere) {
           msgInfoNbMystere.innerText = 'Félicitation!';
           console.log('=');
       }
   } else {
       alert('Saisie incorrecte!');
       return false;
   }
});