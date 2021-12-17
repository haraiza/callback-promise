import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
export const obtenerHeroesArr = async () => {
    
    return Promise.all(heroesIds.map(buscarHeroe));
}

//     const heroesArr = [];

//     for(const id of heroesIds) {
//         heroesArr.push(buscarHeroe(id));
//     }

//     return await Promise.all(heroesArr);
// };

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    }
    catch (err) {
        console.log('CATCH!!');
        
        // throw err; //Pudiera usar esto en vez del return 
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
}

const heroesPromesas = heroesIds.map(id => buscarHeroe(id));

export const heroesCiclo = async () => {
    
    console.time('HeroesCiclo');
    
    //*Este codigo manda llamar a los 3 heroes primero 
    //*y luego los manipula uno por uno con el forEach
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    //*Este codigo hace lo mismo que el de arriba pero mas claro
    for await(const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');
}



export const heroIfAwait = async(id) => {
    if( (await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('No es el mejor de todos');
    }

}



