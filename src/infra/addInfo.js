import { buildClient } from "@datocms/cma-client";
import { masterToken } from '../assets/datoCms';

export async function addInfo(query){
    const client = buildClient({ apiToken: masterToken });
    return await client.items.create(query)
    .then(res => res)
    .catch(err => console.log(err));
}