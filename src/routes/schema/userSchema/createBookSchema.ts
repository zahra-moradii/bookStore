import { FastifyReply, FastifyRequest } from "fastify";
import { createBookController } from "../../../controller/user/createBookController";

async function createBookSchema(
  request: FastifyRequest,
  response: FastifyReply,
) {
  await createBookController(request, response);
}

export { createBookSchema };
