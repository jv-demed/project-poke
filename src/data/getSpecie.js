import { getInfo } from '../infra/getInfo';

export async function getSpecie(pokedex){
    const specie = await getInfo({
        filter: {
            type: 'specie',
            fields: {
                pokedex: {
                    eq: pokedex,
                }
            }
        }
    });
    return specie[0];
}