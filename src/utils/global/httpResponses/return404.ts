import { FastifyReply } from "fastify";
import { IResultOperation } from "../../../models/interfaces/IResultOperations";

export const return404 = (
	response: FastifyReply,
	message: string,
	data: any,
) => {
	return response.code(404).send({
		isSuccessful: false,
		message: message,
		data: data,
	} as IResultOperation);
};
