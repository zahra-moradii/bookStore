import { FastifyReply } from "fastify";
import { IResultOperation } from "../../../models/interfaces/IResultOperations";

export const return201 = (
	response: FastifyReply,
	message: string,
	data: any,
) => {
	return response.code(201).send({
		isSuccessful: true,
		message: message,
		data: data,
	} as IResultOperation);
};
