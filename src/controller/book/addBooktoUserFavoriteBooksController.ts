import { return400 } from "../../utils/global/httpResponses/return400";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";
import { IBook } from "../../models/interfaces/IBook";
import { IUser } from "../../models/interfaces/IUser";
import { readBooksFromFile } from "../../utils/global/fileOperation/fileHelpersBooks";
import {
	readUsersFromFile,
	writeUsersToFile,
} from "../../utils/global/fileOperation/fileHelpersUser";
const addBookToUserFavoriteBooksController = async (
	request: any,
	response: any,
) => {
	const { userId, bookId } = request.body;

	if (!userId || !bookId) {
		return return400(response, "User ID and Book ID are required", "");
	}

	try {
		const users = readUsersFromFile();
		const books = readBooksFromFile();

		const userIndex = users.findIndex((user: IUser) => user.id === userId);
		const bookIndex = books.findIndex((book: IBook) => book.id === bookId);

		if (userIndex === -1) {
			return return400(response, "User not found", "");
		}

		if (bookIndex === -1) {
			return return400(response, "Book not found", "");
		}

		const user = users[userIndex];
		const book = books[bookIndex];

		if (user.favoriteBooks.find((favBook: IBook) => favBook.id === bookId)) {
			return return400(
				response,
				"Book is already in the user's favorite books",
				"",
			);
		}
		user.favoriteBooks.push(book);
		users[userIndex] = user;
		writeUsersToFile(users);

		return return200(
			response,
			"Book added to favorite books successfully",
			user,
		);
	} catch (error: any) {
		console.error("Error in addBookToUserFavoriteBooksController", error);
		return return500(
			response,
			"An error occurred while adding the book to favorite books",
			"",
		);
	}
};

export { addBookToUserFavoriteBooksController };
