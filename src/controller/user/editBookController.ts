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
const editBookController = async (request: any, response: any) => {
	const { userId, bookId, title, author, category, price, description } =
		request.body;

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

		const updatedUserBook = {
			...users[userIndex].createBooks[userBookIndex],
			title: title || users[userIndex].createBooks[userBookIndex].title,
			author: author || users[userIndex].createBooks[userBookIndex].author,
			category:
				category || users[userIndex].createBooks[userBookIndex].category,
			price: price || users[userIndex].createBooks[userBookIndex].price,
			description:
				description || users[userIndex].createBooks[userBookIndex].description,
		};

		users[userIndex].createBooks[userBookIndex] = updatedUserBook;

		const bookIndex = books.findIndex(book => book.id === bookId);

		if (bookIndex !== -1) {
			books[bookIndex] = updatedUserBook;
		}

		writeUsersToFile(users);
		writeBooksToFile(books);

		return return200(response, "Book updated successfully", updatedUserBook);
	} catch (error) {
		console.error("Error in editBookController", error);
		return return500(response, "An error occurred while editing the book", "");
	}
};

export { editBookController };
