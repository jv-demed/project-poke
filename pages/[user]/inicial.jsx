import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { PokeApresentation } from '../../src/components/pokemons/PokeApresentation';
import { Pokeball } from '../../src/components/pokeball/Pokeball';
import { getSpecie } from '../../src/data/getSpecie';
import { createPokemon } from '../../src/logic/createPokemon';
import { catchPokemon } from '../../src/logic/catchPokemon';

const InicialStyled = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100vh;
    justify-content: center;
    button{
        border: none;
        border-radius: 4px;
        padding: 4px 0;
        width: 250px;
    }
    .pokeballs{
        display: flex;
        gap: 25px;
        margin-top: 10px;
    }
`

export default function Inicial({ login, pokes }){

    const router = useRouter();
    const [choice, setChoice] = useState(null);

    return(
        <InicialStyled>
            <PokeApresentation poke={choice} /> 
            {choice ? 
                <button onClick={() => {
                    createPokemon(choice, 5)
                    .then(res => {
                        catchPokemon(login, res)
                    })
                    //router.push('/'+login);
                }}>
                    Escolher
                </button>
                :
                ''
            }
            <div className="pokeballs">
                <Pokeball poke={pokes[0]} choice={choice} setChoice={setChoice} />
                <Pokeball poke={pokes[1]} choice={choice} setChoice={setChoice} />
                <Pokeball poke={pokes[2]} choice={choice} setChoice={setChoice} />
            </div>
        </InicialStyled>
    )
}

export async function getServerSideProps(context){
    const pokes = [
        await getSpecie(1),
        await getSpecie(4),
        await getSpecie(7)
    ]
    return {
        props: {
            login: context.params.user,
            pokes: pokes
        }
    }
}