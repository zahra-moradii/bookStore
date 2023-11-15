import { FastifyReply } from "fastify";
import { IResultOperation } from "../../../models/interfaces/IResultOperations";

export const return204 = (response: FastifyReply) => {
	return response.code(200).send({
		isSuccessful: true,
	} as IResultOperation);
};
