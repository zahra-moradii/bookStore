import { FastifyReply, FastifyRequest } from "fastify";
import { addBookToUserOrderController } from "../../../controller/book/addBookToUserOrderController";

async function addBookToUserOrderSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await addBookToUserOrderController(request, response);
}

export { addBookToUserOrderSchema };
