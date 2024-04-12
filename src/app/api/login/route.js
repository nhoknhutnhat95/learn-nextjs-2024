export async function POST(req) {
    console.log('api key', process.env.API_KEY);
    const body = await req.json()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/shop/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.API_KEY,
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()

    return Response.json({ data })
}