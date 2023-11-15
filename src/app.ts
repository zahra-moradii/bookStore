import fastify from "fastify";
import { register } from "./plugins";

const server = fastify({
  logger: true,
});

register(server);

server.listen(
  { port: 3003, host: "localhost" },
  async (err: any, address: any) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`[SERVER] Server listening at ${address}`);
  },
);
