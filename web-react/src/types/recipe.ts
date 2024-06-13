import { Category } from "./category";

export type Recipe = {
  id: number;
  name: string;
  category: Category;
  ingredients: Array<string>;
  instructions: Array<string>;
};
