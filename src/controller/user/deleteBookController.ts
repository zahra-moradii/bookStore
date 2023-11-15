import { return400 } from "../../utils/global/httpResponses/return400";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";
import { IUser } from "../../models/interfaces/IUser";
import {
	readBooksFromFile,
	writeBooksToFile,
} from "../../utils/global/fileOperation/fileHelpersBooks";
import {
	readUsersFromFile,
	writeUsersToFile,
} from "../../utils/global/fileOperation/fileHelpersUser";
const deleteBookController = async (request: any, response: any) => {
	const { userId, bookId } = request.body;

	if (!userId || !bookId) {
		return return400(response, "User ID and Book ID are required", "");
	}

	try {
		const users = readUsersFromFile();
		const books = readBooksFromFile();

		const userIndex = users.findIndex((u: IUser) => u.id === userId);

		if (userIndex === -1) {
			return return400(response, "User not found", "");
		}

		const userBookIndex = users[userIndex].createBooks.findIndex(
			(book: any) => book.id === bookId,
		);

		if (userBookIndex === -1) {
			return return400(response, "Book not found in user's created books", "");
		}

		users[userIndex].createBooks.splice(userBookIndex, 1);

		const bookIndex = books.findIndex(book => book.id === bookId);

		if (bookIndex !== -1) {
			books.splice(bookIndex, 1);
		}
		writeUsersToFile(users);
		writeBooksToFile(books);

		return return200(response, "Book deleted successfully", {});
	} catch (error) {
		console.error("Error in deleteBookController", error);
		return return500(response, "An error occurred while deleting the book", "");
	}
};

export { deleteBookController };
