import { FastifyInstance } from "fastify";
import { userRoutes } from "./userSchema";
import { bookRoutes } from "./bookSchema";

export default async function routes(app: FastifyInstance) {
	app.register(userRoutes);
	app.register(bookRoutes);
}
