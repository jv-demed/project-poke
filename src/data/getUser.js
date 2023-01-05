import { getInfo } from '../infra/getInfo';

export async function getUser(login){
    const user = await getInfo({
        filter: {
            type: 'user',
            fields: {
                login: {
                    eq: login,
                }
            }
        }
    });
    return user[0];
}