import { headers } from "next/headers"

export async function GET(request) {

    const data = await fetch('http://localhost:30001/v1/api/account/me', {
        headers: {
            'x-api-key': process.env.API_KEY,
            'x-client-id': headers().get('x-client-id'),
            'authorization': headers().get('authorization'),
            "Content-Type": "application/json",
        }
    })

    return Response.json(await data.json())
}