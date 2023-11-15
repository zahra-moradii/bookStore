import * as fs from "fs";
import * as path from "path";
import { IUser } from "../../../models/interfaces/IUser";

const dataFilePath = path.join(__dirname, "../../../data/users.json");

export const readUsersFromFile = (): IUser[] => {
	try {
		const fileData = fs.readFileSync(dataFilePath, "utf8");
		return JSON.parse(fileData);
	} catch (error) {
		return [];
	}
};

export const writeUsersToFile = (users: IUser[]) => {
	try {
		const dataString = JSON.stringify(users, null, 2);
		fs.writeFileSync(dataFilePath, dataString, "utf8");
	} catch (error) {
		throw new Error("Error writing data to file");
	}
};
