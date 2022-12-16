import styled from 'styled-components';

const TypeStyled = styled.div`
    align-items: center;
    //background-color: ${props => props.bgType};
    border-radius: 3px;
    //color: ${props => props.colorType};
    display: flex;
    font-size: 0.7rem;
    justify-content: center;
    line-height: 18px;
    width: 75px;
`

export function Type({ name }){
    return(
        <TypeStyled>
            {name}
        </TypeStyled>
    )
}