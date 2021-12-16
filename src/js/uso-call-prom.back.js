import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas'
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';


// Estandar del callback
//* Los callback siempre envian 2 variables como resultado. 
//* Si no encuentra el heroe enviara el err con el mensaje
//* si lo encuentra entonces dejara nulo el err y regresara el heroe
buscarHeroeCallback(heroeId1, (err, heroe) => {

    if (err) {
        console.error(err);
    }
    else {
        console.info(heroe);
    }

});
console.log('Termine el callback');



console.warn('Promise');

// //! Multiple promesas pero de forma ineficiente y complicada
// buscarHeroe(heroeId1)
//     .then(heroe1 => {
//         buscarHeroe(heroeId2)
//             .then(heroe2 => {
//                 console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//             })
//     });


//! Forma clara y con destructuracion de hacer lo mismo que arriba
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
    }).catch(err => {
        alert(err)
    }).finally(() => {
        console.log('Se termino el promise.all')
    });


console.log('Fin del programa');



