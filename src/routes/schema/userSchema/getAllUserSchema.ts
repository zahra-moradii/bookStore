import { FastifyReply, FastifyRequest } from "fastify";
import { getUserByIdController } from "../../../controller/user/getUserByIdController";
import { getAllUserController } from "../../../controller/user/getAllUserController";

async function getAllUserSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await getAllUserController(request, response);
}

export { getAllUserSchema };
