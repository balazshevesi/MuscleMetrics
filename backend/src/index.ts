import { Hono } from "hono";
import { auth } from "./utils/auth";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://localhost:5173", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.on(["post", "get"], "/api/auth/**", (c) => auth.handler(c.req.raw));

// app.get("/api/auth/test", (c) => {
//   return c.json({
//     c: JSON.stringify(c),
//   });
// });

app.get("/", (c) => {
  return c.json({
    c: JSON.stringify(c),
  });
});

export default app;
