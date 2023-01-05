import { addInfo } from '../infra/addInfo';
import { getNatures } from '../data/getNatures';
import { pokemonsId } from '../assets/datoCms';

export async function createPokemon(specie, level){
    const nature = await defineNature();
    const stats = defineStats(specie);
    console.log(specie)
    const poke = await addInfo({
        item_type: { 
            type: 'item_type', 
            id: pokemonsId
        },
        specie: specie.id,
        level: level,
        nature: nature.id,
        hp: stats.hp,
        attack: stats.attack,
        defense: stats.defense,
        sp_attack: stats.spAttack,
        sp_defense: stats.spDefense,
        speed: stats.speed
    })
    return poke
}

async function defineNature(){
    const natures = await getNatures();
    const random = Math.floor(Math.random() * (natures.length));
    return natures[random];
}

function defineStats(specie, level, nature){
    const stats = {
        attack: variationStats(specie.base_attack),
        defense: variationStats(specie.base_defense),
        spAttack: variationStats(specie.base_sp_attack),
        spDefense: variationStats(specie.base_sp_defense),
        speed: variationStats(specie.base_speed),
    }
    const upStats = {
        
    }
    return stats;
}

function variationStats(base){
    return (base * variationStats()).toFixed(2);
}