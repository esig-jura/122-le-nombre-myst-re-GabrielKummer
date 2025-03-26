/**
 * Jeu du nombre mystère
 * @author  Steve Fallet
 * @version 2.0
 * @since   2018-09-09 (date de création)
 */

'use strict';

//let formulaire = document.getElementById('frmNbMystere');
let saisieUtilisateur = document.getElementById('inpUserNb');
let boutonDeviner = document.getElementById('btnDeviner');
let msgInfoNbMystere = document.getElementById('txtInfoMystere');

let nbEssais = 0;

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let nbMystere = tireNombre(0, 100);

boutonDeviner.addEventListener('click', (event) => {
    event.preventDefault();

    let nbDeviner = parseInt(saisieUtilisateur.value);

    console.log('Nombre mystère : ', nbMystere);
    console.log('Nombre deviné : ', nbDeviner);

   if (nbDeviner != null) {
       nbEssais++;
       saisieUtilisateur.value = "";

       if (nbDeviner === nbMystere) {
           msgInfoNbMystere.innerText = 'Félicitation! \n Vous avez trouvez en ' + nbEssais + ' essais.';
       }

       if (nbDeviner < nbMystere) {
           msgInfoNbMystere.innerText = 'Le nombre est plus grand!';
       }

       if (nbDeviner > nbMystere) {
           msgInfoNbMystere.innerText = 'Le nombre est plus petit!';
       }
   } else {
       alert('Saisie incorrecte!');
       return false;
   }
});