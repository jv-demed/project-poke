import { buildClient } from '@datocms/cma-client';

export default async function auth(req, res){
    const client = buildClient({ apiToken: process.env.API_TOKEN });
    const user = req.body;
    await client.items.list({
        filter: {
            type: 'user',
            fields: {
                login: {
                    eq: user.login
                },
                password: {
                    eq: user.password
                }
            }
        }
    }).then((res) => console.log(res));
}