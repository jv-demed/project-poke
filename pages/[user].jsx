import styled from 'styled-components';
import { getUserByLogin } from '../src/data/users';
import { getPokeByPokedex } from '../src/data/pokemons';
import { StartingAdventure } from '../src/components/journey/StartingAdventure';

const UserStyled = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
`

export default function User(props){

    const user = props.user;
    console.log(props.context)

    if(user.pokemons.length == 0){
        return <StartingAdventure user={user} pokes={props.startPokes} />
    }

    return(
        <UserStyled>
            <h1>{user.login}</h1>
        </UserStyled>
    )

}

export async function getServerSideProps(context){
    const user = await getUserByLogin(context.params.user);
    const startPokes = [
        await getPokeByPokedex(1),
        await getPokeByPokedex(4),
        await getPokeByPokedex(7)
    ]
    return {
        props: {
            user: user[0],
            startPokes: startPokes.map(poke => poke[0])
        }
    }
}