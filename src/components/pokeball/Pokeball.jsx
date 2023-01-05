import styled from 'styled-components';
import { imgs } from '../../assets/imgs';

const PokeballStyled = styled.div`
    img{
        width: 50px;
    }
`

export function Pokeball({ poke, choice, setChoice }){
    return(
        <PokeballStyled>
            <img 
                alt="Pokébola" 
                onClick={() => setChoice(poke)}
                src={choice == poke ? imgs.openPokeball : imgs.pokeball} 
            />
        </PokeballStyled>
    )
}