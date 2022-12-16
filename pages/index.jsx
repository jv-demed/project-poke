import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getUsers } from '../src/data/users';
import { auth } from '../src/data/auth';
import { Form } from '../src/components/global/Form'
import { TextInput } from '../src/components/global/TextInput';
import { LinkBtn } from '../src/components/btns/LinkBtn';
import { login } from '../src/services/authService';

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
                login(user)
                .then(() => router.push('/'+user.login))
                .catch(() => alert('Usuário ou senha incorretos!'));
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

// export async function getServerSideProps(){
//     return {
//         props: {
//             users: await getUsers()
//         }
//     }
// }

              {/* <LinkBtn title='Entrar' link={auth(users, login, password) ? `/${login}` : '/'} />  */}