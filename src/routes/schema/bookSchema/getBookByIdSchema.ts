import { FastifyReply, FastifyRequest } from "fastify";
import { getBookByIdController } from "../../../controller/book/getBookByIdController";

async function getBookByIdSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await getBookByIdController(request, response);
}

export { getBookByIdSchema };
