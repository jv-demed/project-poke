import { getInfo } from '../infra/getInfo';

export async function authService({ login, password }){
    const user = await getInfo({
        filter: {
            type: 'user',
            fields: {
                login: {
                    eq: login
                },
                password: {
                    eq: password
                }
            }
        }
    });
    return user[0];
}