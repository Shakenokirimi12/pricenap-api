export async function handle_PUT_Products(request, env) {
    let testresponsejson = {
        "message": "Success!",
        "status_Code": "NO-S-T01"
    }
    return new Response(JSON.stringify(responsejson), await headerBuilder(200))
}