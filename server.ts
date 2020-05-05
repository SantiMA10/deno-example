import { serve } from "https://deno.land/std/http/server.ts";
const PORT = parseInt(Deno.env.get("PORT") || '', 10) || 8080;
const s = serve({ port: PORT });
console.log(`Listen on: ${PORT}`);

for await (const req of s) {
  const body = JSON.stringify(await fetch('https://reqres.in/api/users?page=2').then((res) => res.json()))
  req.respond({ body, status: 200 });
}