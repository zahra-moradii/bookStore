import { FastifyReply, FastifyRequest } from "fastify";
import { signUpController } from "../../../controller/user/signUpController";

async function signUpSchema(request: FastifyRequest, response: FastifyReply) {
  await signUpController(request, response);
}

export { signUpSchema };
