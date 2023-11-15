import { FastifyReply, FastifyRequest } from "fastify";
import { getAllBooksController } from "../../../controller/book/getAllBooksController";
import { addBookToUserFavoriteBooksController } from "../../../controller/book/addBooktoUserFavoriteBooksController";

async function addBookToUserFavoriteBookSchema(
	request: FastifyRequest,
	response: FastifyReply,
) {
	await addBookToUserFavoriteBooksController(request, response);
}

export { addBookToUserFavoriteBookSchema };
