import { getInfo } from '../infra/getInfo';

export async function getNatures(){
    return await getInfo({
        filter: {
            type: 'nature'
        },
    });
}