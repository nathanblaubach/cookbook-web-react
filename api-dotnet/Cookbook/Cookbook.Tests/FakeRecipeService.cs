using Cookbook.Entities;
using Cookbook.Interfaces;

namespace Cookbook.Tests;

public class FakeRecipeService : IRecipeRepository
{
    public IEnumerable<Recipe> GetRecipes() => 
    [
        new Recipe
        { 
            Category = "Beverage",
            Id = 0,
            Name = "Hot Mulled Cider",
            Ingredients =
            [
                "1/2 cup brown sugar",
                "1 tsp whole allspice",
                "1 tsp whole cloves",
                "1/4 tsp salt",
                "dash of ground nutmeg",
                "3 inch stick of cinnamon",
                "2 quarts apple cider"
            ],
            Instructions =
            [
                "Slowly bring to a boil",
                "Cover & simmer for 20 minutes",
                "Remove spices"
            ]
        }
    ];
}
