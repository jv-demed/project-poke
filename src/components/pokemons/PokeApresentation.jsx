import styled from 'styled-components';
import { Type } from '../type/Type';
import { imgs } from '../../assets/imgs';

const PokeApresentationStyled = styled.div`
    align-items: center;
    background-color: #bebebe;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 20px;
    width: 250px;
    img{
        width: 100%;
    }
    .name{
        font-size: 1.6rem;
    }
    .type{
        font-size: 0.8rem;
    }
    .description{
        background-color: white;
        border-radius: 5px;
        font-size: 1rem;
        padding: 10px;
        width: 100%;
    }
`

export function PokeApresentation({ poke }){
    return(
        <PokeApresentationStyled>
            <img src={poke ? poke.sprite : imgs.hiddenPoke} alt='Pokemon' />
            <span className='name'>{poke ? poke.name : '???'}</span>
            <div className="types">
                {poke ? poke.types.map((type, i) => {
                    return(
                        <Type id={type} key={`type-${i}`} />
                    )
                }) : ''}
            </div>
            <div className='description'>{poke ? poke.description : '...'}</div>
        </PokeApresentationStyled>
    )
}