import { return200 } from "../../utils/global/httpResponses/return200";
import { return400 } from "../../utils/global/httpResponses/return400";
import { return404 } from "../../utils/global/httpResponses/return404";
import { return500 } from "../../utils/global/httpResponses/return500";
import { readUsersFromFile } from "../../utils/global/fileOperation/fileHelpersUser";

const getUserByIdController = async (request: any, response: any) => {
	const { id } = request.params;

	if (!id) {
		return return400(response, "User ID is required", "");
	}

	try {
		const users = readUsersFromFile();

		const user = users.find((u: any) => u.id === id);

		if (!user) {
			return return404(response, "User not found", "");
		}

		return return200(response, "User retrieved successfully", user);
	} catch (error: any) {
		console.error("error in getting user by ID", error);
		return return500(response, "An error occurred...check logs", "");
	}
};

export { getUserByIdController };
