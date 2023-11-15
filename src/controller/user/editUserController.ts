import { return400 } from "../../utils/global/httpResponses/return400";
import { return200 } from "../../utils/global/httpResponses/return200";
import { return500 } from "../../utils/global/httpResponses/return500";
import {
	readUsersFromFile,
	writeUsersToFile,
} from "../../utils/global/fileOperation/fileHelpersUser";

const editUserController = async (request: any, response: any) => {
	const {
		id,
		firstName,
		lastName,
		email,
		phone,
		age,
		favoriteGenres,
		gender,
		password,
	}: {
		id: string;
		firstName?: string;
		lastName?: string;
		email?: string;
		phone?: string;
		age?: string;
		favoriteGenres?: string[];
		gender?: string;
		password?: string;
	} = request.body;

	if (!id) {
		return return400(response, "User ID is required", "");
	}

	try {
		const users = readUsersFromFile();

		const userIndex = users.findIndex((user: any) => user.id === id);

		if (userIndex === -1) {
			return return400(response, "User not found", "");
		}

		const user = users[userIndex];

		user.firstName = firstName || user.firstName;
		user.lastName = lastName || user.lastName;
		user.email = email || user.email;
		user.phone = phone || user.phone;
		user.age = age || user.age;
		user.favoriteGenres = favoriteGenres || user.favoriteGenres;
		user.gender = gender || user.gender;
		user.password = password || user.password;

		users[userIndex] = user;

		writeUsersToFile(users);

		return return200(response, "User data updated successfully", user);
	} catch (error: any) {
		console.error("error in user data update", error);

		return return500(response, "An error occurred...check logs", "");
	}
};

export { editUserController };
