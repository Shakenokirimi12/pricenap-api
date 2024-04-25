import { headerBuilder } from "../headerBuilder.mjs"

export async function handle_PUT_Stores(request, env) {
    let testresponsejson = {
        "message": "Success!",
        "status_Code": "NO-S-T01"
    }
    return new Response(JSON.stringify(responsejson), await headerBuilder(200))
}