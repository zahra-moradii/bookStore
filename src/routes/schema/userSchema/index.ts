import { addBookToUserFavoriteBookSchema } from "../bookSchema/addBookToUserFavoriteBookSchema";
import { addBookToUserOrderSchema } from "../bookSchema/addBookToUserOrderSchema";
import { addCommentOnBookSchema } from "../bookSchema/addCommentOnBookSchema";
import { createBookSchema } from "./createBookSchema";
import { deleteBookSchema } from "./deleteBookSchema";
import { editBookSchema } from "./editBookSchema";
import { editUserSchema } from "./editUserSchema";
import { getAllBooksSchema } from "../bookSchema/getAllBooksSchema";
import { getBookByIdSchema } from "../bookSchema/getBookByIdSchema";
import { getUserByIdSchema } from "./getUserByIdSchema";
import { loginSchema } from "./loginSchema";
import { searchBookSchema } from "../bookSchema/searchBookSchema";
import { signUpSchema } from "./signUpSchema";
import { getAllUserSchema } from "./getAllUserSchema";

function userRoutes(fastify: any, options: any, done: any) {
	fastify.post("/user/singUp", signUpSchema);
	fastify.post("/user/login", loginSchema);
	fastify.put("/user/editPersonalData", editUserSchema);
	fastify.get("/user/:id", getUserByIdSchema);
	fastify.get("/user/getAll", getAllUserSchema);
	fastify.post("/user/createBook", createBookSchema);
	fastify.put("/user/editBook", editBookSchema);
	fastify.delete("/user/deleteBook", deleteBookSchema);
	done();
}

export { userRoutes };
