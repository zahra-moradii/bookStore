import { FastifyReply, FastifyRequest } from "fastify";
import { createBookController } from "../../../controller/user/createBookController";
import { deleteBookController } from "../../../controller/user/deleteBookController";

async function deleteBookSchema(
  request: FastifyRequest,
  response: FastifyReply,
) {
  await deleteBookController(request, response);
}

export { deleteBookSchema };
