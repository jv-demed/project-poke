import styled from 'styled-components';
import { Type } from './Type';
import { imgs } from '../../assets/imgs';
import { getData } from '../../data/datoCms';

const PokeInfoBasicStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
    img{
        width: 100%;
    }
    .name{
        color: white;
        font-size: 1.4rem;
    }
    .type{
        font-size: 0.8rem;
    }
    .description{
        font-size: 1rem;
    }
`

export function PokeInfoBasic({ poke }){
    return(
        <PokeInfoBasicStyled>
            <img src={poke ? poke.sprite : imgs.hiddenPoke} alt='Pokemon' />
            <span className='name'>{poke ? poke.name : '???'}</span>
            <Type name={poke ? poke.types[0] : '?'} />
            {/* <span className='description'>{poke.description}</span> */}
        </PokeInfoBasicStyled>
    )
}