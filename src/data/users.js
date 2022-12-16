import { client, masterClient } from './datoCms';

export async function getUsers(){
    return await client.items.list({
        filter: {
            type: 'user'
        }
    })
}

export async function getUserByLogin(login){
    return await client.items.list({
        filter: {
            type: 'user',
            fields: {
                login: {
                    eq: login
                }
            }
        }
    });
}

export async function createUser(login, password){
    await masterClient.items.create({
        item_type: { type: 'item_type', id: '851832' },
        login: login,
        password: password
    });
}