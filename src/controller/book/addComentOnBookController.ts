import { return400 } from "../../utils/global/httpResponses/return400";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";
import { IComment } from "../../models/interfaces/IComment";
import { IUser } from "../../models/interfaces/IUser";
import { IBook } from "../../models/interfaces/IBook";
import {
	readBooksFromFile,
	writeBooksToFile,
} from "../../utils/global/fileOperation/fileHelpersBooks";
import {
	readUsersFromFile,
	writeUsersToFile,
} from "../../utils/global/fileOperation/fileHelpersUser";
const addCommentOnBookController = async (request: any, response: any) => {
	const { userId, bookId, commentText } = request.body;

	if (!userId || !bookId || !commentText) {
		return return400(
			response,
			"User ID, Book ID, and comment text are required",
			"",
		);
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
		const book = books[bookIndex];

		const newComment: IComment = {
			userFirstName: user.firstName,
			userLastName: user.lastName,
			commentText: commentText,
		};

		book.comments.push(newComment);

		writeBooksToFile(books);

		return return200(
			response,
			"Comment added to book successfully",
			newComment,
		);
	} catch (error) {
		console.error("Error in addCommentOnBookController", error);
		return return500(
			response,
			"An error occurred while adding the comment to the book",
			"",
		);
	}
};

export { addCommentOnBookController };
