import { buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {

    return Promise.all(heroesIds.map( buscarHeroe ));
}

//     const heroesArr = [];
    
//     for(const id of heroesIds) {
//         heroesArr.push(buscarHeroe(id));
//     }
    
//     return await Promise.all(heroesArr);
// };