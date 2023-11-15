import { FastifyReply, FastifyRequest } from "fastify";
import { searchBooksController } from "../../../controller/book/searchBooksControllser";

async function searchBookSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await searchBooksController(request, response);
}

export { searchBookSchema };
