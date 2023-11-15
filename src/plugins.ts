import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";
import routes from "./routes/schema";

export const register = (server: FastifyInstance) => {
  server.register(cors, {
    origin: "*",
  });

  server.register(routes);
  return server;
};
