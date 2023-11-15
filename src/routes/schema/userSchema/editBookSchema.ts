import { FastifyReply, FastifyRequest } from "fastify";
import { editBookController } from "../../../controller/user/editBookController";

async function editBookSchema(request: FastifyRequest, response: FastifyReply) {
  await editBookController(request, response);
}

export { editBookSchema };
