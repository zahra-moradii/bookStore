import { FastifyReply, FastifyRequest } from "fastify";
import { editUserController } from "../../../controller/user/editUserController";

async function editUserSchema(request: FastifyRequest, response: FastifyReply) {
  await editUserController(request, response);
}

export { editUserSchema };
