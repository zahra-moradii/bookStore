import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";
import { readUsersFromFile } from "../../utils/global/fileOperation/fileHelpersUser";

const getAllUserController = async (request: any, response: any) => {
	try {
		const users = readUsersFromFile();

		return return200(response, "All users retrieved successfully", users);
	} catch (error: any) {
		console.error("Error in getting all users", error);
		return return500(response, "An error occurred...check logs", "");
	}
};

export { getAllUserController };
