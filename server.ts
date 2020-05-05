import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 8000 });

for await (const req of s) {
  const body = JSON.stringify(await fetch('https://reqres.in/api/users?page=2').then((res) => res.json()))
  req.respond({ body, status: 200 });
}