import { Category } from "./category";

export class Recipe {
    public id: number;
    public name: string;
    public category: Category | undefined;
    public ingredients: Array<string>;
    public instructions: Array<string>;
    constructor(id: number, name: string, category: Category, ingredients: Array<string>, instructions: Array<string>) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}
