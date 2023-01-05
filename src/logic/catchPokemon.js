import { getUser } from '../data/getUser';
import { updateInfo } from '../infra/updateInfo';

export async function catchPokemon(login, poke){
    const user = await getUser(login);
    return await updateInfo(user.id, {
        pokemons: [...user.pokemons, poke.id]
    });
}