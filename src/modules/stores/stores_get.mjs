import { headerBuilder } from "../headerBuilder.mjs"

export async function handle_GET_Stores(request, env) {
    const { searchParams } = new URL(request.url)
    let name = searchParams.get('name');
    let name_start = searchParams.get('name_start');
    let name_end = searchParams.get('name_end');
    let price_max = searchParams.get('price_max');
    let price_min = searchParams.get('price_min');
    let store_name = searchParams.get('store_name');
    let store_id = searchParams.get('store_id');
    if (searchParams.has('geolocation_lat') && searchParams.has('geolocation_lon')) {
        let geolocation_lat = searchParams.get('geolocation_lat');
        let geolocation_lon = searchParams.get('geolocation_lon');
    }
    else {
        return new Response(JSON.stringify([{ "message": "You can't get values only with latitude or only with longtitude.", "status_Code": "ST-CE-M11" }]), await headerBuilder(200))
    }
    return new Response(JSON.stringify(testresponsejson), await headerBuilder(200))
}