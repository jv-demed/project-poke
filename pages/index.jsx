import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form } from '../src/components/global/Form'
import { TextInput } from '../src/components/global/TextInput';
import { authService } from '../src/services/authService';

const LoginStyled = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    justify-content: center;
`


export default function Login(){
    
    const router = useRouter();
    const [user, setUser] = useState({
        login: '',
        password: ''
    });

    return(
        <LoginStyled>
            <Form onSubmit={(e) => {
                e.preventDefault();
                authService(user).then((res) => {
                    res ? 
                    router.push('/'+user.login)
                    :
                    alert('Usuário ou senha incorretos!');
                })
            }}>
                <TextInput type='txt' info='login' setInfo={setUser} obj={user}>
                    Login
                </TextInput>
                <TextInput type='password' info='password' setInfo={setUser} obj={user}>
                    Senha
                </TextInput>
                <button>Entrar</button>
            </Form>
            <Link href='/cadastro'>
                <span>Clique para se cadastrar</span>
            </Link>
        </LoginStyled>
    )
}