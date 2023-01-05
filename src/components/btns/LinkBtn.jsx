import Link from 'next/link';
import styled from 'styled-components';

const LinkBtnStyled = styled.button`
    display: flex;
    .link{
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 100%;
    }
`

export function LinkBtn({ title, link }){
    return(
        <LinkBtnStyled>
            <Link className='link' href={link}>
                {title}
            </Link>
        </LinkBtnStyled>
    )
}