import { return400 } from "../../utils/global/httpResponses/return400";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";
import * as path from "path";
import { readUsersFromFile } from "../../utils/global/fileOperation/fileHelpersUser";

const loginController = async (request: any, response: any) => {
	const { userName, password }: { userName: string; password: string } =
		request.body;

	if (!userName || !password) {
		return return400(response, "userName and password must be provided", "");
	}

	try {
		const users = readUsersFromFile();

		const user = users.find(
			(u: any) => u.email === userName || u.phone === userName,
		);

		if (!user) {
			return return400(response, "User not found", "");
		}

		if (user.password !== password) {
			return return400(response, "Incorrect password", "");
		}

		return return200(response, "User logged in successfully", { user });
	} catch (error: any) {
		console.error("error in user login", error);
		return return500(response, "An error occurred...check logs", "");
	}
};

export { loginController };
