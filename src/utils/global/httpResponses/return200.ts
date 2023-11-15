import { FastifyReply } from "fastify";
import { IResultOperation } from "../../../models/interfaces/IResultOperations";

export const return200 = (
	response: FastifyReply,
	message: string,
	data: any,
) => {
	return response.code(200).send({
		isSuccessful: true,
		message: message,
		data: data,
	} as IResultOperation);
};
