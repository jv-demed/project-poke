import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form } from '../src/components/global/Form';
import { TextInput } from '../src/components/global/TextInput';
import { LinkBtn } from '../src/components/btns/LinkBtn';
import { registerService } from '../src/services/registerService';

const CadastroStyled = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    .btns{
        display: flex;
        gap: 15px;
        justify-content: space-between;
        margin-top: 10px;
        width: 100%;
    }
`

export default function Cadastro(){

    const router = useRouter();
    const [user, setUser] = useState({
        login: '',
        password: ''
    });

    return(
        <CadastroStyled>
            <Form onSubmit={(e) => {
                e.preventDefault();
                registerService(user).then((res) => {
                    res ? 
                    router.push(`./${res.login}/inicial`)
                    :
                    alert('Usuário já existe!');
                });
            }}>
                <TextInput type='txt' info='login' setInfo={setUser} obj={user}>
                    Login
                </TextInput>
                <TextInput type='password' info='password' setInfo={setUser} obj={user}>
                    Senha
                </TextInput>
                <div className="btns">
                    <LinkBtn title='Voltar' link='/' />
                    <button>Cadastrar</button>
                </div>
            </Form>
        </CadastroStyled>
    )
}