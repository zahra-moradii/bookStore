import * as fs from "fs";
import * as path from "path";
import { IBook } from "../../../models/interfaces/IBook";

const dataFilePath = path.join(__dirname, "../../../data/books.json");

export const readBooksFromFile = (): IBook[] => {
	try {
		const fileData = fs.readFileSync(dataFilePath, "utf8");
		return JSON.parse(fileData);
	} catch (error) {
		return [];
	}
};

export const writeBooksToFile = (books: IBook[]) => {
	try {
		const dataString = JSON.stringify(books, null, 2);
		fs.writeFileSync(dataFilePath, dataString, "utf8");
	} catch (error) {
		throw new Error("Error writing data to file");
	}
};
