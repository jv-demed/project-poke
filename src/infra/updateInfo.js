import { buildClient } from "@datocms/cma-client";
import { masterToken } from '../assets/datoCms';

export async function updateInfo(id, query){
    const client = buildClient({ apiToken: masterToken });
    return await client.items.update(id, query)
    .then(res => res)
    .catch(err => console.log(err));
}