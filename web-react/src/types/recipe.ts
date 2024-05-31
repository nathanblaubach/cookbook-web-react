export type Category = {
  id: number;
  name: string;
};

export type Recipe = {
  id: number;
  name: string;
  category: Category;
  ingredients: Array<string>;
  instructions: Array<string>;
};
