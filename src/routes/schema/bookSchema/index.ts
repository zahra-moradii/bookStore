import { addBookToUserFavoriteBookSchema } from "../bookSchema/addBookToUserFavoriteBookSchema";
import { addBookToUserOrderSchema } from "../bookSchema/addBookToUserOrderSchema";
import { addCommentOnBookSchema } from "../bookSchema/addCommentOnBookSchema";
import { getAllBooksSchema } from "../bookSchema/getAllBooksSchema";
import { getBookByIdSchema } from "../bookSchema/getBookByIdSchema";
import { searchBookSchema } from "../bookSchema/searchBookSchema";

function bookRoutes(fastify: any, options: any, done: any) {
	fastify.get("/book/getAll", getAllBooksSchema);
	fastify.get("/book/:id", getBookByIdSchema);
	fastify.post("/book/search", searchBookSchema);
	fastify.post("/book/addToUserFavorite", addBookToUserFavoriteBookSchema);
	fastify.post("/book/addToUserOrder", addBookToUserOrderSchema);
	fastify.post("/book/addComment", addCommentOnBookSchema);
	done();
}

export { bookRoutes };
