import Link from 'next/link';
import styled from 'styled-components';

const LinkBtnStyled = styled.div`
    background: white;
    border: 1px solid gray;
    border-radius: 3px;
    display: flex;
    .btn{
        padding: 2px 10px;
        width: 100%;
    }
    :hover{
        background: #e7e7e7;
    }
`

export function LinkBtn({ title, link }){
    return(
        <LinkBtnStyled>
            <Link className='btn' 
                href={link}
            >
                {title}
            </Link>
        </LinkBtnStyled>
    )
}