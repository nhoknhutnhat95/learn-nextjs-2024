export async function GET(req) {
    console.log(req.headers);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
        },
    })
    const data = await res.json()

    return Response.json({ data })
}