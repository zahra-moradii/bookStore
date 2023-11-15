import { FastifyReply, FastifyRequest } from "fastify";
import { getUserByIdController } from "../../../controller/user/getUserByIdController";

async function getUserByIdSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await getUserByIdController(request, response);
}

export { getUserByIdSchema };
