import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { SpinLoader } from '../global/SpinLoader';
import { getType } from '../../data/getType';

const TypeStyled = styled.div`
    align-items: center;
    background-color: ${props => props.bg};
    border-radius: 3px;
    color: ${props => props.font};
    display: flex;
    font-size: 0.7rem;
    justify-content: center;
    line-height: 18px;
    width: 75px;
`

export function Type({ id }){

    const [type, setType] = useState();

    useEffect(() => {
        setType(null);
        getType(id).then(res => setType(res));
    }, [id]);

    if(type){
        return(
            <TypeStyled 
                bg={() => getColors(type.name).bg}
                font={() => getColors(type.name).color}
            >
                {type.name}
            </TypeStyled>
        )
    }else{
        return(
            <TypeStyled>
                <SpinLoader size={'18px'} />
            </TypeStyled>
        )
    }

}

function getColors(type){
    switch(type){
        case 'Gordo': return { bg: ({ theme }) => theme.types.gordo, color: 'black' }
        case 'Maromba': return { bg: ({ theme }) => theme.types.maromba, color: 'black' }
        case 'Nerdola': return { bg: ({ theme }) => theme.types.nerdola, color: 'white' }
    }
}