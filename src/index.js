import { headerBuilder } from "./modules/headerBuilder.mjs";
import { handle_GET_Products } from "./modules/products/prodcuts_get.mjs";
import { handle_POST_Products } from "./modules/products/prodcuts_post.mjs";
import { handle_PUT_Products } from "./modules/products/prodcuts_put.mjs";
import { handle_GET_Stores } from "./modules/stores/stores_get.mjs";
import { handle_POST_Stores } from "./modules/stores/stores_post.mjs";
import { handle_PUT_Stores } from "./modules/stores/stores_put.mjs";

export default {
	async fetch(request, env, ctx) {
		if (request.method == "OPTIONS") {
			return new Response("", await headerBuilder(200));
		}
		const { pathname } = new URL(request.url);
		if (pathname.includes("/v1/")) {
			if (pathname === "/v1/products") {
				if (request.method == "POST") {
					console.log("/products/:POSTが投げられました。");
					return await handle_POST_Products(request, env);
				}
				if (request.method == "GET") {
					console.log("/products/:GETが投げられました。");
					return await handle_GET_Products(request, env);
				}
				if (request.method == "PUT") {
					console.log("/products/:PUTが投げられました。");
					return await handle_PUT_Products(request, env);
				}
			}
			if (pathname === "/v1/stores") {
				if (request.method == "POST") {
					console.log("/stores/:POSTが投げられました。");
					return await handle_POST_Stores(request, env);
				}
				if (request.method == "GET") {
					console.log("/stores/:GETが投げられました。");
					return await handle_GET_Stores(request, env);
				}
				if (request.method == "PUT") {
					console.log("/stores/:PUTが投げられました。");
					return await handle_PUT_Stores(request, env);
				}
			}
		}
		else {
			let errorjson = {
				"message": "You are using wrong version of pricenap API.",
				"status_code": "NO-CE-M01"
			}
			return new Response(JSON.stringify(errorjson), await headerBuilder(400))
		}
	},
};

