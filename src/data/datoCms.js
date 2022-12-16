import { buildClient } from '@datocms/cma-client';
import { useState, useEffect } from 'react';

const readToken = '8704f83ef8f51a0ed2cce698d61364'
const masterToken = '3ab1c4b6d6081b5ef0d75723cf78d1';

export const client = buildClient({ apiToken: readToken });
export const masterClient = buildClient({ apiToken: masterToken });

export function getData(query){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': 'df1743707db25f9d95a2bea5b58437',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 'query': `query{${query}}` })
        })
        .then(res => res.json())
        .then(complete => setData(complete.data))    
    }, []);
    return data;
}

async function getDataById(filter){
    return await client.items.list({
        filter: {
            ids: filter
        }
    });
}