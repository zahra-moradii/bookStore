import { readBooksFromFile } from "../../utils/global/fileOperation/fileHelpersBooks";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";

const getAllBooksController = async (request: any, response: any) => {
	try {
		const books = readBooksFromFile();

		return return200(response, "Books retrieved successfully", books);
	} catch (error: any) {
		console.error("error in getting all books", error);

		return return500(response, "An error occurred...check logs", "");
	}
};

export { getAllBooksController };
