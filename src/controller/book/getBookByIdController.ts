import { readBooksFromFile } from "../../utils/global/fileOperation/fileHelpersBooks";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return400 } from "../../utils/global/httpResponses/return400";
import { return500 } from "../../utils/global/httpResponses/return500";

const getBookByIdController = async (request: any, response: any) => {
	try {
		const { id } = request.params;

		const books = readBooksFromFile();

		const book = books.find((b: any) => b.id === id);

		if (!book) {
			return return400(response, "Book not found", "");
		}

		return return200(response, "Book retrieved successfully", book);
	} catch (error: any) {
		console.error("error in getting book by id", error);

		return return500(response, "An error occurred...check logs", "");
	}
};

export { getBookByIdController };
