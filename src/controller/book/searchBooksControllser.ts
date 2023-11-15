import * as fs from "fs";
import * as path from "path";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return400 } from "../../utils/global/httpResponses/return400";
import { return500 } from "../../utils/global/httpResponses/return500";
import { IBook } from "../../models/interfaces/IBook";

// Define the path to the books data file
const dataFilePath = path.join(__dirname, "../../data/books.json");

// Helper function to read books from the file
const readBooksFromFile = (): IBook[] => {
	try {
		const fileData = fs.readFileSync(dataFilePath, "utf8");
		return JSON.parse(fileData);
	} catch (error) {
		// If the file doesn't exist or there's an error, return an empty array
		return [];
	}
};

const searchBooksController = async (request: any, response: any) => {
	try {
		const { title, category, author } = request.body;

		// Validate that only one search parameter is provided
		const searchParams = [title, category, author].filter(Boolean);
		if (searchParams.length !== 1) {
			return return400(
				response,
				"Please set exactly one search parameter (title, category, or author).",
				"",
			);
		}

		// Read the current books from the file
		const books = readBooksFromFile();

		let result;
		if (title) {
			result = books.filter(book =>
				book.title.toLowerCase().includes(title.toLowerCase()),
			);
		} else if (category) {
			result = books.filter(book =>
				book.category.toLowerCase().includes(category.toLowerCase()),
			);
		} else if (author) {
			result = books.filter(book =>
				book.author.toLowerCase().includes(author.toLowerCase()),
			);
		}

		return return200(response, "Search results retrieved successfully", result);
	} catch (error: any) {
		console.error("error in searching books", error);
		return return500(response, "An error occurred...check logs", "");
	}
};

export { searchBooksController };
