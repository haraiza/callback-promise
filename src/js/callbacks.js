const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a la picadura de arañas'
    }
}


//! Funcionamiento de Callback 

//* Primero: recibe id y lo guarda en 'heroe'
//* Segundo, el 'callback' del archivo en callback.js le envia el heroe al 
//* segundo paramentro en index.js (heroe)
//* Tercero, se ejecuta desde index.js el console.log(heroe)
export const buscarHeroe = (id, callback) => {
    console.warn('Callback');
    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    }
    else {
        callback(`No existe un heroe con el id ${id}`, '');
    }
};



