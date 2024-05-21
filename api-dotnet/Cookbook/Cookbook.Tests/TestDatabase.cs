using Cookbook.Entities;
using Cookbook.Interfaces;

namespace Cookbook.Tests;

public class TestDatabase : IDatabase
{
    public IEnumerable<Recipe> Recipes => 
    [
        new Recipe
        { 
            CategoryId = 0,
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

    public IEnumerable<Category> Categories => throw new NotImplementedException();
}
