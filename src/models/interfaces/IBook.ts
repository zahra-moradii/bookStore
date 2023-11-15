import { IComment } from "./IComment";

export interface IBook {
  id: string;
  title: string;
  author: string;
  category: string;
  price: string;
  description: string;
  comments: IComment[];
}
