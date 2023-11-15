import { v4 as uuidv4 } from "uuid";
import { IUser } from "../../models/interfaces/IUser";
import { return400 } from "../../utils/global/httpResponses/return400";
import { return201 } from "../../utils/global/httpResponses/return201";
import { return500 } from "../../utils/global/httpResponses/return500";
import {
	readUsersFromFile,
	writeUsersToFile,
} from "../../utils/global/fileOperation/fileHelpersUser";

const signUpController = async (request: any, response: any) => {
	const { firstName, lastName, email, phone, password } = request.body;

	if (!firstName || !lastName || !email || !phone || !password) {
		return return400(response, "All properties are required", "");
	}

	try {
		const users = readUsersFromFile();

		if (users.some(user => user.email === email)) {
			return return400(response, "User already exists", "");
		}

		const uuid = uuidv4();
		const id = uuid.replace(/\D/g, "").slice(0, 10);

		const newUser: IUser = {
			id,
			firstName,
			lastName,
			email,
			phone,
			age: "",
			gender: "",
			favoriteGenres: [],
			password,
			orderBooks: [],
			createBooks: [],
			favoriteBooks: [],
		};

		users.push(newUser);

		writeUsersToFile(users);

		return return201(response, "User signed up successfully", newUser);
	} catch (error) {
		console.error("Error in user sign up", error);
		return return500(response, "An error occurred. Please check logs", "");
	}
};

export { signUpController };
