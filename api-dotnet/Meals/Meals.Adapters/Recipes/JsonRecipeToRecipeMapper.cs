namespace Meals.Adapters.Recipes;

public static class JsonRecipeToRecipeMapper
{
    public static Recipe Map(JsonRecipe jsonRecipe)
    {
        return new Recipe
        {
            Id = jsonRecipe.Id,
            Name = jsonRecipe.Name,
            Category = jsonRecipe.Category,
            Ingredients = jsonRecipe.Ingredients,
            Instructions = jsonRecipe.Instructions
        };
    }
}
