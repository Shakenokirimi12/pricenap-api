import { headerBuilder } from "../headerBuilder.mjs"

export async function handle_POST_Stores(request, env) {
    let testresponsejson = {
        "message": "Success!",
        "status_Code": "NO-S-T01"
    }
    return new Response(JSON.stringify(testresponsejson), await headerBuilder(200))
}
