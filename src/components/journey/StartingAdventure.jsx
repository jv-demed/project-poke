import styled from 'styled-components';
import { useState } from 'react';
import { JourneyTitle } from '../global/JourneyTitle';
import { PokeInfoBasic } from '../pokemons/PokeInfoBasic';
import { Pokeball } from '../pokeball/Pokeball';
//import { catchPokemon } from '../../data/catchPokemon';

const StartingAdventureStyled = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100vh;
    padding: 20px 0;
    .choiceArea{
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 40px;
        .pokeballs{
            display: flex;
            gap: 25px;
        }
    }
`

export function StartingAdventure({ pokes }){

    const [choice, setChoice] = useState(null);

    return(
        <StartingAdventureStyled>
            <JourneyTitle>Escolha seu pokémon inicial!</JourneyTitle>
            <div className='choiceArea'>
                <PokeInfoBasic poke={choice} />
                <div className="pokeballs">
                    <Pokeball poke={pokes[0]} choice={choice} setChoice={setChoice} />
                    <Pokeball poke={pokes[1]} choice={choice} setChoice={setChoice} />
                    <Pokeball poke={pokes[2]} choice={choice} setChoice={setChoice} />
                </div>
                {/* <button onClick={() => catchPokemon(user.id, user.pokemons ,choice)} >
                    Escolher
                </button> */}
            </div>
        </StartingAdventureStyled>
    )
}