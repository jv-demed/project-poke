import { getInfo } from '../infra/getInfo';

export async function getType(id){
    const type = await getInfo({
        filter: {
            ids: id,
        },
    });
    return type[0];
}