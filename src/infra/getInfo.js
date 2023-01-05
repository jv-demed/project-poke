import { buildClient } from '@datocms/cma-client';
import { readToken } from '../assets/datoCms';

export async function getInfo(query){
    const client = buildClient({ apiToken: readToken });
    return await client.items.list(query);
}