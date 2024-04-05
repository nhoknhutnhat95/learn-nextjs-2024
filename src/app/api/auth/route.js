export async function GET(request) {
    // const data = await request.json()
    console.log(request.headers);
    const data = request.headers.get('authorization')
    console.log(data);
    return Response.json(data)
}