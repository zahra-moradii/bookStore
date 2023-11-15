import { IBook } from "./IBook";

export interface IUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  favoriteGenres: string[];
  password: string;
  id: string;
  orderBooks: IBook[];
  createBooks: IBook[];
  favoriteBooks: IBook[];
}
