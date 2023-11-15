import { FastifyReply, FastifyRequest } from "fastify";
import { getAllBooksController } from "../../../controller/book/getAllBooksController";

async function getAllBooksSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await getAllBooksController(request, response);
}

export { getAllBooksSchema };
