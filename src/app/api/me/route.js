import { headers } from "next/headers"

export async function GET(request) {

    const data = await fetch('http://localhost:30001/v1/api/account/me', {
        headers: {
            'x-api-key': '672acce5c1d4545500c082cc7bc8d346f7eabda878bb82337eccd21b5bf68a801a99ff16cae34872cca021aa704ba38e1aedf7371ccad84b3fe7b5f57a1911aa',
            'x-client-id': headers().get('x-client-id'),
            'authorization': headers().get('authorization'),
            "Content-Type": "application/json",
        }
    })

    return Response.json(await data.json())
}