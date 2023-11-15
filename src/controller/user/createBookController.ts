import { v4 as uuidv4 } from "uuid";
import { return400 } from "../../utils/global/httpResponses/return400";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";
import { IBook } from "../../models/interfaces/IBook";
import { IUser } from "../../models/interfaces/IUser";
import {
	readBooksFromFile,
	writeBooksToFile,
} from "../../utils/global/fileOperation/fileHelpersBooks";
import {
	readUsersFromFile,
	writeUsersToFile,
} from "../../utils/global/fileOperation/fileHelpersUser";
const createBookController = async (request: any, response: any) => {
	const { userId, title, author, photo, category, price, description } =
		request.body;

	if (!userId || !title || !author || !category || !price || !description) {
		return return400(response, "All book details are required", "");
	}

	try {
		const users = readUsersFromFile();
		const books = readBooksFromFile();

		const userIndex = users.findIndex((u: IUser) => u.id === userId);

		if (userIndex === -1) {
			return return400(response, "User not found", "");
		}

		const newBook: IBook = {
			id: uuidv4(),
			title,
			author,
			category,
			price,
			photo,
			description,
			comments: [],
		};

		books.push(newBook);

		users[userIndex].createBooks.push(newBook);

		writeUsersToFile(users);
		writeBooksToFile(books);

		return return200(
			response,
			"Book created and added to user's books successfully",
			newBook,
		);
	} catch (error) {
		console.error("Error in createBookController", error);
		return return500(response, "An error occurred while creating the book", "");
	}
};

export { createBookController };
