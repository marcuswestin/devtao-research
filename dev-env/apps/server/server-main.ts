const PORT: number = parseInt(process.env.PORT!);
const NODE_ENV = process.env.NODE_ENV ?? "development";

const random = Math.random();

const server = Bun.serve({
    port: PORT,
    fetch() {
        return new Response("Welcome to Bun 8! " + random);
    },
});

console.log(`[${NODE_ENV}] Serving http://localhost:${server.port}`);