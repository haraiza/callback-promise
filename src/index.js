import { buscarHeroe } from './js/callbacks'
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// Estandar del callback
//* Los callback siempre envian 2 variables como resultado. 
//* Si no encuentra el heroe enviara el err con el mensaje
//* si lo encuentra entonces dejara nulo el err y regresara el heroe
buscarHeroe(heroeId1, (err, heroe) => {

    if (err) {
        console.error(err);
    }
    else {
        console.info(heroe);
    }

});

console.log('Fin del programa');


