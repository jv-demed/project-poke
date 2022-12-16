import { client } from './datoCms';

export async function getPokedex(){
    return await client.items.list({
        filter: {
            type: 'pokemon'
        },
        order_by: 'pokedex_ASC'
    });
}

export async function getPokeByPokedex(id){
    return await client.items.list({
        filter: {
            type: 'pokemon',
            fields: {
                pokedex: {
                    eq: id
                }
            }
        }
    });
}

export async function getPokeByName(name){
    return await client.items.list({
        filter: {
            type: 'pokemon',
            fields: {
                name: {
                    eq: name
                }
            }
        }
    });
}