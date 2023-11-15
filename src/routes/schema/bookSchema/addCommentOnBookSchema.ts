import { FastifyReply, FastifyRequest } from "fastify";
import { addCommentOnBookController } from "../../../controller/book/addComentOnBookController";

async function addCommentOnBookSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await addCommentOnBookController(request, response);
}

export { addCommentOnBookSchema };
