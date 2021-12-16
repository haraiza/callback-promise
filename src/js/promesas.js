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


export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No exite un heroe con el id ${id}`);
        }
    });
}



export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw `No exite un heroe con el id ${id}`;

        //throw Error(`No exite un heroe con el id ${id}`); // Si no se cual es el error entonces se usaria este
    }

}




const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesaLenta'), 2000)
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesaMedia'), 1500)
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesaRapida'), 1000)
});

export {
    promesaLenta, promesaMedia, promesaRapida
}