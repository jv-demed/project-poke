import { usersId } from '../assets/datoCms';
import { addInfo } from '../infra/addInfo';

export async function registerService({ login, password }){
    return await addInfo({
        item_type: { 
            type: 'item_type', 
            id: usersId
        },
        login: login,
        password: password
    });
}