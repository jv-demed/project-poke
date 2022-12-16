import Link from 'next/link';
import styled from 'styled-components';
import { createUser } from '../../data/users';

const RegisterBtnStyled = styled.div`
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

export function RegisterBtn({ login, password }){
    return(
        <RegisterBtnStyled onClick={() => createUser(login, password)}>
            <Link className='btn' href={`/${login}`}>
                Cadastrar
            </Link>
        </RegisterBtnStyled>
    )
}