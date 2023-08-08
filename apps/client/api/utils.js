export const gqlFetch = async (endpoint, query) => {
    return await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ query }),
    }).then((r) => r.json());
}