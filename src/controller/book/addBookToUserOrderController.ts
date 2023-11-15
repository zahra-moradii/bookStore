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
const addBookToUserOrderController = async (request: any, response: any) => {
	const { userId, bookId } = request.body;

	if (!userId || !bookId) {
		return return400(response, "User ID and Book ID are required", "");
	}

	try {
		const users = readUsersFromFile();
		const books = readBooksFromFile();

		const userIndex = users.findIndex((u: IUser) => u.id === userId);
		const bookIndex = books.findIndex((b: IBook) => b.id === bookId);

		if (userIndex === -1) {
			return return400(response, "User not found", "");
		}

		if (bookIndex === -1) {
			return return400(response, "Book not found", "");
		}

		const user = users[userIndex];
		const bookToAdd = books[bookIndex];
		const isBookInOrder = user.orderBooks.some(
			(book: IBook) => book.id === bookId,
		);

		if (isBookInOrder) {
			return return400(response, "Book is already in the order", "");
		}

		user.orderBooks.push(bookToAdd);
		writeUsersToFile(users);

		return return200(response, "Book added to user's order successfully", user);
	} catch (error) {
		console.error("Error in addBookToUserOrderController", error);
		return return500(
			response,
			"An error occurred while adding the book to user's order",
			"",
		);
	}
};

export { addBookToUserOrderController };
