import { headerBuilder } from "../headerBuilder.mjs"

export async function handle_POST_Products(request, env) {
    if (request.method == "POST") {
        let testresponsejson = {
            "message": "Success!",
            "status_Code": "NO-S-T01"
        }
        return new Response(JSON.stringify(testresponsejson), await headerBuilder(200))
    }
}
