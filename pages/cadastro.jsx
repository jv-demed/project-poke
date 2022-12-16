import styled from 'styled-components';
import { useState } from 'react';
import { createUser } from '../src/data/users';
import { Form } from '../src/components/global/Form';
import { TextInput } from '../src/components/global/TextInput';
import { LinkBtn } from '../src/components/btns/LinkBtn';
import { RegisterBtn } from '../src/components/btns/RegisterBtn';

const CadastroStyled = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    .btns{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`

export default function Cadastro(){

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <CadastroStyled>
            <Form>
                <TextInput title='Login' type='text' setInfo={setLogin} />
                <TextInput title='Senha' type='password' setInfo={setPassword} />
                <div className="btns">
                    <LinkBtn title='Voltar' link='/' />
                    <RegisterBtn login={login} password={password} />
                </div>
            </Form>
        </CadastroStyled>
    )
}