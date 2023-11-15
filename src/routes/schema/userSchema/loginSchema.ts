import { FastifyReply, FastifyRequest } from "fastify";
import { loginController } from "../../../controller/user/loginController";

async function loginSchema(request: FastifyRequest, response: FastifyReply) {
  await loginController(request, response);
}

export { loginSchema };
