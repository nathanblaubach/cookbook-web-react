using System;

namespace Cookbook.Infrastructure.Local;

public class JsonRecipeToRecipeMapper
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
